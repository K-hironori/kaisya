// スケジュール管理クラス
class TimeScheduleManager {
    constructor() {
        this.tasks = [];
        this.svg = document.getElementById('clock-svg');
        this.editingTaskId = null;
        this.currentTimeInterval = null;
        this.init();
    }

    init() {
        this.createHourMarkers();
        this.loadTasks();
        this.renderSchedule();
        this.startCurrentTimeDisplay();
        this.setupEventListeners();
    }

    // 時間マーカーを作成
    createHourMarkers() {
        const markersGroup = document.getElementById('hour-markers');
        const center = { x: 200, y: 200 };
        const radius = 160;

        for (let hour = 0; hour < 24; hour++) {
            const angle = (hour * 15) - 90; // 12時を上にするため-90度
            const radian = angle * Math.PI / 180;
            const x = center.x + Math.cos(radian) * radius;
            const y = center.y + Math.sin(radian) * radius;

            // 時間マーカーライン
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', center.x + Math.cos(radian) * 170);
            line.setAttribute('y1', center.y + Math.sin(radian) * 170);
            line.setAttribute('x2', center.x + Math.cos(radian) * 180);
            line.setAttribute('y2', center.y + Math.sin(radian) * 180);
            line.setAttribute('stroke', '#666666');
            line.setAttribute('stroke-width', hour % 6 === 0 ? '3' : '2');
            markersGroup.appendChild(line);

            // 時間テキスト
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x);
            text.setAttribute('y', y);
            text.setAttribute('class', 'hour-marker');
            text.textContent = hour;
            markersGroup.appendChild(text);
        }
    }

    // 現在時刻表示を開始
    startCurrentTimeDisplay() {
        this.updateCurrentTimeLine();
        this.currentTimeInterval = setInterval(() => {
            this.updateCurrentTimeLine();
        }, 60000); // 1分ごとに更新
    }

    // 現在時刻ラインを更新
    updateCurrentTimeLine() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        const angle = this.timeToAngle(currentTime);
        
        const currentTimeGroup = document.getElementById('current-time-line');
        currentTimeGroup.innerHTML = '';

        const innerRadius = 50;
        const outerRadius = 170;
        const center = { x: 200, y: 200 };
        
        const radian = angle * Math.PI / 180;
        const innerCoords = {
            x: center.x + Math.cos(radian) * innerRadius,
            y: center.y + Math.sin(radian) * innerRadius
        };
        const outerCoords = {
            x: center.x + Math.cos(radian) * outerRadius,
            y: center.y + Math.sin(radian) * outerRadius
        };

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', innerCoords.x);
        line.setAttribute('y1', innerCoords.y);
        line.setAttribute('x2', outerCoords.x);
        line.setAttribute('y2', outerCoords.y);
        line.setAttribute('class', 'current-time-line');
        currentTimeGroup.appendChild(line);
    }

    // イベントリスナーを設定
    setupEventListeners() {
        // マウスイベントでハイライト
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('task-item')) {
                const taskId = e.target.dataset.taskId;
                this.highlightTask(taskId);
            } else if (e.target.classList.contains('schedule-segment')) {
                const taskId = e.target.dataset.taskId;
                this.highlightTask(taskId);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('task-item') || e.target.classList.contains('schedule-segment')) {
                this.removeHighlight();
            }
        });
    }

    // タスクをハイライト
    highlightTask(taskId) {
        this.removeHighlight();
        
        // 円グラフのセグメントをハイライト
        const segment = document.querySelector(`[data-task-id="${taskId}"]`);
        if (segment) {
            segment.classList.add('highlighted');
        }
        
        // リストアイテムをハイライト
        const taskItem = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
        if (taskItem) {
            taskItem.classList.add('highlighted');
        }
    }

    // ハイライトを削除
    removeHighlight() {
        document.querySelectorAll('.highlighted').forEach(el => {
            el.classList.remove('highlighted');
        });
    }

    // 時間を角度に変換
    timeToAngle(time) {
        const [hours, minutes] = time.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        return (totalMinutes * 0.25) - 90; // 360度/1440分 = 0.25度/分
    }

    // 角度をSVG座標に変換
    angleToCoords(angle, radius) {
        const radian = angle * Math.PI / 180;
        return {
            x: 200 + Math.cos(radian) * radius,
            y: 200 + Math.sin(radian) * radius
        };
    }

    // タスクを追加
    addTask(startTime, endTime, name, color) {
        const task = {
            id: Date.now(),
            startTime,
            endTime,
            name,
            color
        };
        this.tasks.push(task);
        this.saveTasks();
        this.renderSchedule();
        this.updateTaskList();
    }

    // タスクを更新
    updateTask(taskId, startTime, endTime, name, color) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = {
                id: taskId,
                startTime,
                endTime,
                name,
                color
            };
            this.saveTasks();
            this.renderSchedule();
            this.updateTaskList();
        }
    }

    // タスクを編集モードに設定
    editTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            document.getElementById('start-time').value = task.startTime;
            document.getElementById('end-time').value = task.endTime;
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-color').value = task.color;
            
            this.editingTaskId = taskId;
            
            // ボタンを更新ボタンに変更
            const addButton = document.getElementById('add-task');
            addButton.textContent = '更新';
            addButton.id = 'update-task';
            addButton.onclick = () => this.updateTaskFromForm();
        }
    }

    // フォームからタスクを更新
    updateTaskFromForm() {
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        const taskName = document.getElementById('task-name').value;
        const taskColor = document.getElementById('task-color').value;

        if (!startTime || !endTime || !taskName) {
            alert('すべての項目を入力してください');
            return;
        }

        this.updateTask(this.editingTaskId, startTime, endTime, taskName, taskColor);
        this.resetForm();
    }

    // フォームをリセット
    resetForm() {
        document.getElementById('task-name').value = '';
        document.getElementById('start-time').value = '09:00';
        document.getElementById('end-time').value = '10:00';
        document.getElementById('task-color').value = '#4CAF50';
        
        this.editingTaskId = null;
        
        // ボタンを追加ボタンに戻す
        const updateButton = document.getElementById('update-task');
        if (updateButton) {
            updateButton.textContent = '予定を追加';
            updateButton.id = 'add-task';
            updateButton.onclick = () => addTask();
        }
    }

    // タスクを削除
    deleteTask(taskId) {
        const taskItem = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
        if (taskItem) {
            taskItem.classList.add('fade-out');
            setTimeout(() => {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                this.saveTasks();
                this.renderSchedule();
                this.updateTaskList();
                
                // 編集中のタスクが削除された場合、フォームをリセット
                if (this.editingTaskId === taskId) {
                    this.resetForm();
                }
            }, 300);
        }
    }

    // スケジュールを描画
    renderSchedule() {
        const segmentsGroup = document.getElementById('schedule-segments');
        segmentsGroup.innerHTML = '';

        this.tasks.forEach(task => {
            const startAngle = this.timeToAngle(task.startTime);
            const endAngle = this.timeToAngle(task.endTime);
            
            // 日をまたぐ場合の処理
            let actualEndAngle = endAngle;
            if (endAngle <= startAngle) {
                actualEndAngle = endAngle + 360;
            }

            const innerRadius = 60;
            const outerRadius = 140;

            const startCoords = this.angleToCoords(startAngle, innerRadius);
            const endCoords = this.angleToCoords(actualEndAngle, innerRadius);
            const startCoordsOuter = this.angleToCoords(startAngle, outerRadius);
            const endCoordsOuter = this.angleToCoords(actualEndAngle, outerRadius);

            const largeArcFlag = (actualEndAngle - startAngle) > 180 ? 1 : 0;

            const pathData = [
                `M ${startCoords.x} ${startCoords.y}`,
                `L ${startCoordsOuter.x} ${startCoordsOuter.y}`,
                `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endCoordsOuter.x} ${endCoordsOuter.y}`,
                `L ${endCoords.x} ${endCoords.y}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startCoords.x} ${startCoords.y}`,
                'Z'
            ].join(' ');

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('fill', task.color);
            path.setAttribute('stroke', '#2c2c2c');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('class', 'schedule-segment');
            path.setAttribute('data-task-id', task.id);

            // ホバー時のタイトル表示
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.textContent = `${task.name} (${task.startTime} - ${task.endTime})`;
            path.appendChild(title);

            segmentsGroup.appendChild(path);
        });
    }

    // タスク一覧を更新
    updateTaskList() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.style.borderLeftColor = task.color;
            taskItem.setAttribute('data-task-id', task.id);

            taskItem.innerHTML = `
                <div class="task-info">
                    <div class="task-name">${task.name}</div>
                    <div class="task-time">${task.startTime} - ${task.endTime}</div>
                </div>
                <div class="task-actions">
                    <button class="edit-btn" onclick="scheduleManager.editTask(${task.id})">編集</button>
                    <button class="delete-btn" onclick="scheduleManager.deleteTask(${task.id})">削除</button>
                </div>
            `;

            taskList.appendChild(taskItem);
        });
    }

    // タスクを保存
    saveTasks() {
        localStorage.setItem('timeTasks', JSON.stringify(this.tasks));
    }

    // タスクを読み込み
    loadTasks() {
        const savedTasks = localStorage.getItem('timeTasks');
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
    }

    // 全てのタスクを削除
    clearAll() {
        this.tasks = [];
        this.saveTasks();
        this.renderSchedule();
        this.updateTaskList();
        this.resetForm();
    }

    // クリーンアップ
    destroy() {
        if (this.currentTimeInterval) {
            clearInterval(this.currentTimeInterval);
        }
    }
}

// グローバル変数
let scheduleManager;

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    scheduleManager = new TimeScheduleManager();
});

// タスクを追加する関数
function addTask() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const taskName = document.getElementById('task-name').value;
    const taskColor = document.getElementById('task-color').value;

    if (!startTime || !endTime || !taskName) {
        alert('すべての項目を入力してください');
        return;
    }

    scheduleManager.addTask(startTime, endTime, taskName, taskColor);
    scheduleManager.resetForm();
}

// 全て削除する関数
function clearAll() {
    if (confirm('すべての予定を削除しますか？')) {
        scheduleManager.clearAll();
    }
}

// エンターキーでタスクを追加
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            const updateButton = document.getElementById('update-task');
            if (updateButton) {
                scheduleManager.updateTaskFromForm();
            } else {
                addTask();
            }
        }
    }
});

// ページを離れる前にクリーンアップ
window.addEventListener('beforeunload', function() {
    if (scheduleManager) {
        scheduleManager.destroy();
    }
});