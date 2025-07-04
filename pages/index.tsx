import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

export default function LandingPage() {
  const [isPricingMonthly, setIsPricingMonthly] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
        }
      });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>公式LINE構築まるっと代行サービス</title>
        <meta name="description" content="AI×人間の融合で実現する次世代LINE構築サービス。開封率95%超、リピート率5倍を実現。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glass-morphism-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-gradient {
          background: linear-gradient(135deg, #06C755, #00FF88, #06C755);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 25%, #06C755 100%);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(6, 199, 85, 0.3);
        }
        .neon-border {
          box-shadow: 0 0 20px rgba(6, 199, 85, 0.5), inset 0 0 20px rgba(6, 199, 85, 0.1);
        }
        .particle-bg {
          background-image: radial-gradient(circle at 25% 25%, rgba(6, 199, 85, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          from { text-shadow: 0 0 20px #06C755, 0 0 30px #06C755, 0 0 40px #06C755; }
          to { text-shadow: 0 0 10px #06C755, 0 0 20px #06C755, 0 0 30px #06C755; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>

      <div className="min-h-screen bg-black font-sans">
        {/* Hero Section */}
        <section className="relative hero-gradient text-white overflow-hidden min-h-screen flex items-center particle-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-green-400/20 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/30 rotate-45 animate-float" style={{animationDelay: '-4s'}}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full glass-morphism border border-green-500/30 mb-4">
                    🚀 次世代型LINE構築サービス
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                  <span className="text-white">友だち登録が</span>
                  <br />
                  <span className="text-gradient animate-glow">売上に変わる</span>
                  <br />
                  <span className="text-white">革命的体験</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light leading-relaxed">
                  <span className="text-green-400 font-semibold">開封率95%超</span>、<span className="text-green-400 font-semibold">リピート率5倍</span>を実現<br />
                  AIと人間の融合で、あなたのビジネスを<br />
                  <span className="text-gradient font-bold">次のステージ</span>へ
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-green-400 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl neon-border">
                    🎯 無料戦略セッション予約
                  </button>
                  <button className="glass-morphism text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300 border border-green-500/50">
                    📊 成功事例を見る
                  </button>
                </div>
              </div>
              <div className="hidden lg:block animate-fade-in">
                <div className="relative">
                  {/* Main phone mockup */}
                  <div className="relative z-10 animate-float">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl shadow-2xl glass-morphism-dark">
                      <div className="bg-green-500/90 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/20 h-4 rounded-full"></div>
                          <div className="bg-white/30 h-4 rounded-full w-3/4"></div>
                          <div className="bg-white/20 h-4 rounded-full w-1/2"></div>
                        </div>
                        <div className="bg-white/30 h-12 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stats */}
                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-2xl shadow-xl glass-morphism text-center animate-float" style={{animationDelay: '-1s'}}>
                    <div className="text-2xl font-bold text-black">95%</div>
                    <div className="text-sm text-black/80">開封率</div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-xl glass-morphism text-center animate-float" style={{animationDelay: '-3s'}}>
                    <div className="text-2xl font-bold text-white">5倍</div>
                    <div className="text-sm text-white/80">リピート率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 課題提起 */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 particle-bg opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-red-500/20 text-red-300 text-sm font-bold rounded-full glass-morphism border border-red-500/30 mb-6">
                ⚠️ 多くの企業が直面する現実
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">もう</span>
                <span className="text-gradient">悩まない</span>
                <span className="text-white">でください</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                これらの問題、すべて解決できます
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-morphism-dark p-8 rounded-3xl border border-red-500/30 card-hover group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💔</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">友だちは増えたのに<br/>売上につながらない</h3>
                <p className="text-gray-400 text-center leading-relaxed">せっかく登録してもらっても、配信しても反応がない...これは戦略が間違っているから</p>
                <div className="mt-6 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <p className="text-red-300 text-sm text-center font-semibold">❌ 平均開封率: 15%以下</p>
                </div>
              </div>
              <div className="glass-morphism-dark p-8 rounded-3xl border border-orange-500/30 card-hover group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🤯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">何を配信すればいいか<br/>分からない</h3>
                <p className="text-gray-400 text-center leading-relaxed">シナリオ設計やコンテンツ作成に時間が取られる...本業に集中できない</p>
                <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <p className="text-orange-300 text-sm text-center font-semibold">⏰ 週20時間以上を浪費</p>
                </div>
              </div>
              <div className="glass-morphism-dark p-8 rounded-3xl border border-blue-500/30 card-hover group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">機能が多すぎて<br/>使いこなせない</h3>
                <p className="text-gray-400 text-center leading-relaxed">リッチメニューやチャットボットの設定が複雑すぎる...もうお手上げ</p>
                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-blue-300 text-sm text-center font-semibold">🚫 機能活用率: 30%以下</p>
                </div>
              </div>
            </div>
            
            {/* Solution teaser */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-4 p-6 glass-morphism rounded-2xl border border-green-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">でも、安心してください</h3>
                  <p className="text-gray-300">これらの問題、すべて私たちが解決します</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス特徴 */}
        <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 particle-bg opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-green-500/20 text-green-400 text-sm font-bold rounded-full glass-morphism border border-green-500/30 mb-6">
                🎯 革新的ソリューション
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-white">AIが作る</span>
                <br />
                <span className="text-gradient">未来のLINE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                まるで専属マーケティングチームが24時間働いているかのような体験
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-morphism-dark p-8 rounded-3xl border border-green-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI構築・初期設定</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">プロフィールから基本設定まで、AIが最適化して自動構築</p>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <p className="text-green-400 text-sm font-semibold">✨ 設定時間: 従来の1/10</p>
                </div>
              </div>
              
              <div className="glass-morphism-dark p-8 rounded-3xl border border-purple-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">心理学ベースシナリオ</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">顧客心理を分析し、購買行動を促進するシナリオを自動生成</p>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <p className="text-purple-300 text-sm font-semibold">🎯 コンバージョン率: 3倍向上</p>
                </div>
              </div>
              
              <div className="glass-morphism-dark p-8 rounded-3xl border border-blue-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">次世代AIチャットボット</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">GPT-4を活用した自然な対話で、24時間365日の接客を実現</p>
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-blue-300 text-sm font-semibold">⚡ 応答速度: 0.3秒以内</p>
                </div>
              </div>
              
              <div className="glass-morphism-dark p-8 rounded-3xl border border-orange-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🏷️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">動的セグメンテーション</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">AIが顧客行動を分析し、リアルタイムでセグメントを自動更新</p>
                <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <p className="text-orange-300 text-sm font-semibold">📊 精度: 95%以上</p>
                </div>
              </div>
              
              <div className="glass-morphism-dark p-8 rounded-3xl border border-green-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AIデザイン生成</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">リッチメニューやカードメッセージをAIが自動デザイン</p>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <p className="text-green-300 text-sm font-semibold">🎨 生成時間: 5分以内</p>
                </div>
              </div>
              
              <div className="glass-morphism-dark p-8 rounded-3xl border border-yellow-500/30 card-hover group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">リアルタイム分析</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">AIが24時間データを分析し、即座に改善提案を実行</p>
                <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <p className="text-yellow-300 text-sm font-semibold">⚡ 改善提案: 毎時更新</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-green-400 to-green-500 text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="mb-12">
              <span className="inline-block px-6 py-3 bg-black/20 text-black text-sm font-bold rounded-full glass-morphism border border-black/30 mb-6">
                🎯 限定オファー
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black">
                今すぐ始めて<br />
                <span className="text-black">売上を</span>
                <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">爆発的に</span>
                <span className="text-black">成長させませんか？</span>
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8">
                無料戦略セッションで、あなたのビジネスに最適な<br />
                <span className="font-bold">次世代LINE活用法</span>をご提案します
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-morphism-dark p-8 rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">🎁 今だけ特典</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span className="text-white">30万円相当の戦略シート無料プレゼント</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span className="text-white">競合分析レポート（5万円相当）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span className="text-white">初月50%オフ（先着10社限定）</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="お名前"
                    className="w-full px-6 py-4 rounded-2xl text-gray-900 bg-white/90 backdrop-blur-sm border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    className="w-full px-6 py-4 rounded-2xl text-gray-900 bg-white/90 backdrop-blur-sm border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="電話番号"
                  className="w-full px-6 py-4 rounded-2xl text-gray-900 bg-white/90 backdrop-blur-sm border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="ご相談内容・現在の課題をお聞かせください（任意）"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl text-gray-900 bg-white/90 backdrop-blur-sm border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20"
                >
                  🚀 無料戦略セッションを予約する
                </button>
                <p className="text-black/70 text-sm">
                  ※ 24時間以内にご連絡いたします　※ 無理な営業は一切いたしません
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 particle-bg opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center">
                    <span className="text-black text-xl font-bold">L</span>
                  </div>
                  <h3 className="text-2xl font-black text-gradient">次世代LINE構築サービス</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  AIと人間の融合で、あなたのビジネスを<br />
                  次のステージへ押し上げる革命的なLINE運用を実現
                </p>
                <div className="flex space-x-4">
                  <div className="glass-morphism-dark p-4 rounded-2xl border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-gray-400">開封率</div>
                  </div>
                  <div className="glass-morphism-dark p-4 rounded-2xl border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400">5倍</div>
                    <div className="text-sm text-gray-400">リピート率</div>
                  </div>
                  <div className="glass-morphism-dark p-4 rounded-2xl border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-gray-400">AI稼働</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">🎯 サービス</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-green-400 transition-colors cursor-pointer">AI構築・初期設定</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">心理学ベースシナリオ</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">次世代AIチャットボット</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">動的セグメンテーション</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">AIデザイン生成</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">リアルタイム分析</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">🔗 リンク</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-green-400 transition-colors cursor-pointer">会社概要</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">成功事例</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">料金プラン</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">お問い合わせ</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">プライバシーポリシー</li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">利用規約</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  <p>&copy; 2024 次世代LINE構築サービス. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-white text-sm">X</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-white text-sm">FB</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-white text-sm">IG</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-black text-sm">LINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}