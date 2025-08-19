#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
未処理品番の月次推移レポート生成スクリプト
"""
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
from matplotlib.backends.backend_pdf import PdfPages
from datetime import datetime
import math
import os
import warnings

# 入力条件（コード先頭の変数で定義）
start_year = 2025
start_month = 8  # 2025年8月開始
backlog_start = 2600  # 初期未処理（品番）
process_per_day = 10  # 1日処理（品番/日）
workdays_per_month = 20  # 稼働日/月
new_per_day = 1.2  # 新規流入（品番/日）

def setup_japanese_font():
    """日本語フォントを設定"""
    japanese_fonts = [
        "Noto Sans CJK JP",
        "IPAexGothic", 
        "Hiragino Sans",
        "MS Gothic"
    ]
    
    for font_name in japanese_fonts:
        try:
            font_path = fm.findfont(fm.FontProperties(family=font_name))
            if font_name.lower() in font_path.lower():
                plt.rcParams['font.family'] = font_name
                return font_name
        except:
            continue
    
    # フォントが見つからない場合の警告
    warnings.warn("日本語フォントが検出されませんでした。英数フォントで継続します。")
    plt.rcParams['font.family'] = "DejaVu Sans"
    return "DejaVu Sans"

def calculate_monthly_data():
    """月次データを計算"""
    # 基本計算値
    monthly_process = process_per_day * workdays_per_month  # 200
    monthly_new = new_per_day * workdays_per_month  # 24
    monthly_net_reduction = monthly_process - monthly_new  # 176
    daily_net_reduction = process_per_day - new_per_day  # 8.8
    
    # 月次データを格納するリスト
    data = []
    current_backlog = backlog_start
    current_year = start_year
    current_month = start_month
    
    while current_backlog > 0:
        month_start = current_backlog
        
        # 最終月かどうか判定
        if current_backlog <= monthly_net_reduction:
            # 最終月：何日でゼロになるか計算
            final_workdays = math.ceil(current_backlog / daily_net_reduction)
            monthly_process_final = final_workdays * process_per_day
            monthly_new_final = final_workdays * new_per_day
            monthly_net_final = monthly_process_final - monthly_new_final
            month_end = max(0, month_start - monthly_net_final)
            
            data.append({
                '月': f"{current_year:04d}-{current_month:02d}",
                '期首残(品番)': month_start,
                '新規(品番/月)': round(monthly_new_final, 1),
                '処理(品番/月)': monthly_process_final,
                '純減(品番/月)': round(monthly_net_final, 1),
                '期末残(品番)': month_end
            })
            break
        else:
            # 通常月
            month_end = month_start - monthly_net_reduction
            data.append({
                '月': f"{current_year:04d}-{current_month:02d}",
                '期首残(品番)': month_start,
                '新規(品番/月)': monthly_new,
                '処理(品番/月)': monthly_process,
                '純減(品番/月)': monthly_net_reduction,
                '期末残(品番)': month_end
            })
        
        current_backlog = month_end
        current_month += 1
        if current_month > 12:
            current_month = 1
            current_year += 1
    
    return pd.DataFrame(data)

def create_explanation_text(df):
    """説明文を生成"""
    zero_month = df.iloc[-1]['月']
    final_row = df.iloc[-1]
    final_month_workday = math.ceil((df.iloc[-1]['期首残(品番)']) / (process_per_day - new_per_day))
    
    monthly_process_total = process_per_day * workdays_per_month
    monthly_new_total = new_per_day * workdays_per_month
    monthly_net = monthly_process_total - monthly_new_total
    
    explanation = f"""未処理品番の処理進捗分析レポート

【初期状況】
当分析は、未処理{backlog_start:,}品番から開始し、1日{process_per_day}品番の処理能力と新規{new_per_day}品番/日の流入を前提としています。

【月次処理の関係性】
• 月次処理能力：{monthly_process_total}品番/月（{process_per_day}品番/日 × {workdays_per_month}日）
• 月次新規流入：{monthly_new_total}品番/月（{new_per_day}品番/日 × {workdays_per_month}日）  
• 実質的な月次純減：{monthly_net}品番/月

【到達見込み】
分析結果により、**{zero_month}**に未処理品番がゼロに到達する見込みです。最終月は稼働{final_month_workday}日目でゼロ到達（推定）となります。以降は新規{new_per_day}品番/日の処理のみで運用可能となります。

【現場への示唆】
処理能力を日当たり+2品番向上できれば、到達時期を約2-3ヶ月短縮可能と推定されます。"""
    
    return explanation, zero_month, final_month_workday

def create_graph(df):
    """グラフを作成してPNG保存"""
    plt.figure(figsize=(12, 8))
    
    months = df['月'].tolist()
    backlogs = df['期末残(品番)'].tolist()
    
    plt.plot(months, backlogs, marker='o', linewidth=2, markersize=8, color='#2E86AB')
    plt.title('未処理品番の月次推移（開始: 2025-08）', fontsize=16, fontweight='bold', pad=20)
    plt.xlabel('月', fontsize=12)
    plt.ylabel('期末残(品番)', fontsize=12)
    
    plt.xticks(rotation=45)
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    
    # Y軸の値を桁区切り表示
    ax = plt.gca()
    ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'{int(x):,}'))
    
    # PNG保存
    plt.savefig('backlog_trend_202508.png', dpi=100, bbox_inches='tight')
    return plt.gcf()

def create_pdf_report(df, explanation, graph_fig):
    """PDFレポートを作成"""
    with PdfPages('backlog_report_202508.pdf') as pdf:
        # 1ページ目：タイトル＋概要説明文＋グラフ
        fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8.27, 11.69))  # A4サイズ
        
        # タイトルと説明文
        ax1.text(0.5, 0.95, '未処理品番 月次推移レポート', 
                transform=ax1.transAxes, fontsize=18, fontweight='bold', 
                ha='center', va='top')
        
        ax1.text(0.05, 0.85, explanation, transform=ax1.transAxes, 
                fontsize=10, ha='left', va='top', wrap=True)
        
        ax1.set_xlim(0, 1)
        ax1.set_ylim(0, 1)
        ax1.axis('off')
        
        # グラフを埋め込み
        months = df['月'].tolist()
        backlogs = df['期末残(品番)'].tolist()
        
        ax2.plot(months, backlogs, marker='o', linewidth=2, markersize=6, color='#2E86AB')
        ax2.set_title('未処理品番の月次推移（開始: 2025-08）', fontsize=12, fontweight='bold')
        ax2.set_xlabel('月', fontsize=10)
        ax2.set_ylabel('期末残(品番)', fontsize=10)
        ax2.tick_params(axis='x', rotation=45, labelsize=8)
        ax2.tick_params(axis='y', labelsize=8)
        ax2.grid(True, alpha=0.3)
        ax2.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'{int(x):,}'))
        
        plt.tight_layout()
        pdf.savefig(fig, bbox_inches='tight')
        plt.close(fig)
        
        # 2ページ目：表
        fig, ax = plt.subplots(figsize=(8.27, 11.69))
        ax.axis('tight')
        ax.axis('off')
        
        # データフレームを整形して表示
        df_display = df.copy()
        for col in ['期首残(品番)', '処理(品番/月)', '期末残(品番)']:
            df_display[col] = df_display[col].apply(lambda x: f'{int(x):,}')
        for col in ['新規(品番/月)', '純減(品番/月)']:
            df_display[col] = df_display[col].apply(lambda x: f'{x:,.1f}')
        
        table = ax.table(cellText=df_display.values,
                        colLabels=df_display.columns,
                        cellLoc='center',
                        loc='center',
                        bbox=[0.1, 0.1, 0.8, 0.8])
        
        table.auto_set_font_size(False)
        table.set_fontsize(9)
        table.scale(1.2, 1.5)
        
        # ヘッダーのスタイル
        for i in range(len(df_display.columns)):
            table[(0, i)].set_facecolor('#2E86AB')
            table[(0, i)].set_text_props(weight='bold', color='white')
        
        plt.title('月次推移データ詳細', fontsize=16, fontweight='bold', y=0.95)
        pdf.savefig(fig, bbox_inches='tight')
        plt.close(fig)

def main():
    """メイン処理"""
    # 日本語フォント設定
    font_name = setup_japanese_font()
    
    # 計算実行
    df = calculate_monthly_data()
    
    # CSV保存
    df.to_csv('backlog_monthly_202508_start.csv', index=False, encoding='utf-8-sig')
    
    # 説明文生成
    explanation, zero_month, final_workdays = create_explanation_text(df)
    
    # グラフ作成・保存
    graph_fig = create_graph(df)
    
    # PDF作成
    create_pdf_report(df, explanation, graph_fig)
    
    plt.close('all')
    
    # 結果出力
    print(f"ゼロ到達月: {zero_month}")
    print(f"最終月のゼロ到達稼働日数: {final_workdays}日")
    print("\n生成ファイル:")
    print("- backlog_report_202508.pdf")
    print("- backlog_trend_202508.png")  
    print("- backlog_monthly_202508_start.csv")
    
    return zero_month, final_workdays

if __name__ == "__main__":
    main()