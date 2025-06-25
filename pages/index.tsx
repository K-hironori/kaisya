import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function LandingPage() {
  const [isPricingMonthly, setIsPricingMonthly] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#06C755] to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                "友だち登録"が売上に変わる
                <br />
                <span className="text-yellow-300">公式LINE構築はプロにまかせよう！</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                開封率90%超、リピート率3倍アップ。<br />
                あなたのビジネスを加速させる公式LINE運用を完全代行
              </p>
              <button className="bg-white text-[#06C755] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                無料オンライン相談を予約する
              </button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="スマートフォンでLINEを操作している様子"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 課題提起 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              こんなお悩み、ありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">友だちは増えたのに売上につながらない</h3>
              <p className="text-gray-600">せっかく登録してもらっても、配信しても反応がない...</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤔</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">何を配信すればいいか分からない</h3>
              <p className="text-gray-600">シナリオ設計やコンテンツ作成に時間が取られる...</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">機能が多すぎて使いこなせない</h3>
              <p className="text-gray-600">リッチメニューやチャットボットの設定が複雑すぎる...</p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス特徴 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LINE構築のプロが、すべてを代行します
            </h2>
            <p className="text-xl text-gray-600">まるでLINE専属のマーケティングチームが付いたような感覚</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">アカウント開設・初期設定</h3>
              <p className="text-gray-600 mb-2">プロフィールから基本設定まで最適化</p>
              <p className="text-sm text-[#06C755] italic">「お店の顔」を魅力的に演出します</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">シナリオ・ステップ配信設計</h3>
              <p className="text-gray-600 mb-2">顧客心理に合わせた配信シナリオを構築</p>
              <p className="text-sm text-[#06C755] italic">まるで営業マンが一人ひとりに話しかけるように</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏷️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">タグ・セグメント設計</h3>
              <p className="text-gray-600 mb-2">顧客属性に応じた効果的な分類システム</p>
              <p className="text-sm text-[#06C755] italic">「この人にはこのメッセージ」を自動化</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">リッチメニュー・カードメッセージ</h3>
              <p className="text-gray-600 mb-2">タップしたくなるビジュアルを制作</p>
              <p className="text-sm text-[#06C755] italic">「押しやすさ」と「美しさ」の両立</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">チャットボット構築</h3>
              <p className="text-gray-600 mb-2">24時間365日の自動応答システム</p>
              <p className="text-sm text-[#06C755] italic">まるで優秀なスタッフが常駐しているかのよう</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">分析・改善レポート</h3>
              <p className="text-gray-600 mb-2">月1回の詳細レポートで継続改善</p>
              <p className="text-sm text-[#06C755] italic">数字が教えてくれる「次の一手」</p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入事例 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入企業さまの成果
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-bold text-[#06C755] mb-2">150%</div>
              <div className="text-sm text-gray-600 mb-4">リピート率向上</div>
              <div className="text-xs text-gray-500">"配信内容が的確で、お客様が自然とリピートしてくれるように"</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600 mb-4">メッセージ開封率</div>
              <div className="text-xs text-gray-500">"こんなに読まれるメッセージが作れるとは思わなかった"</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-sm text-gray-600 mb-4">予約数増加</div>
              <div className="text-xs text-gray-500">"チャットボットが24時間働いてくれるのが心強い"</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm text-gray-600 mb-4">運用工数削減</div>
              <div className="text-xs text-gray-500">"本業に集中できるようになりました"</div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              料金プラン
            </h2>
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${isPricingMonthly ? 'text-gray-900' : 'text-gray-500'}`}>月額</span>
              <button
                onClick={() => setIsPricingMonthly(!isPricingMonthly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#06C755] focus:ring-offset-2"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isPricingMonthly ? 'translate-x-1' : 'translate-x-6'}`} />
              </button>
              <span className={`ml-3 ${!isPricingMonthly ? 'text-gray-900' : 'text-gray-500'}`}>買い切り</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {isPricingMonthly ? '¥49,800' : '¥298,000'}
                  <span className="text-lg text-gray-500 font-normal">
                    {isPricingMonthly ? '/月' : ''}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  アカウント開設・初期設定
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  基本的なリッチメニュー作成
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  月1回の配信代行
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  メールサポート
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                プランを選択
              </button>
            </div>
            <div className="bg-[#06C755] p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  おすすめ
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <div className="text-4xl font-bold text-white mb-2">
                  {isPricingMonthly ? '¥98,000' : '¥588,000'}
                  <span className="text-lg text-green-200 font-normal">
                    {isPricingMonthly ? '/月' : ''}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  Basicの全機能
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  ステップ配信シナリオ設計
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  チャットボット構築
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  タグ・セグメント設計
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  月次分析レポート
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  電話サポート
                </li>
              </ul>
              <button className="w-full bg-white text-[#06C755] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                プランを選択
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {isPricingMonthly ? '¥198,000' : '¥1,188,000'}
                  <span className="text-lg text-gray-500 font-normal">
                    {isPricingMonthly ? '/月' : ''}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  Standardの全機能
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  高度なカードメッセージ作成
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  A/Bテスト実施・分析
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  外部システム連携
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  専任コンサルタント
                </li>
                <li className="flex items-center">
                  <span className="text-[#06C755] mr-2">✓</span>
                  24時間サポート
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                プランを選択
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 導入までの流れ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入までの流れ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ヒアリング</h3>
              <p className="text-gray-600">ビジネス内容と目標を詳しくお聞きします</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">設計</h3>
              <p className="text-gray-600">最適なシナリオとコンテンツを設計します</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">実装</h3>
              <p className="text-gray-600">公式LINEの構築と初期設定を完了します</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">運用サポート</h3>
              <p className="text-gray-600">継続的な改善と運用をサポートします</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "どのくらいの期間で効果が出ますか？",
                a: "一般的に導入から1-2ヶ月で効果を実感いただけます。配信開始から徐々に反応率が向上し、3ヶ月目には大きな成果を感じられるケースが多いです。"
              },
              {
                q: "既存の公式LINEアカウントがある場合はどうなりますか？",
                a: "既存のアカウントを活用して最適化を行います。友だち数やこれまでの配信履歴を分析し、より効果的な運用に改善いたします。"
              },
              {
                q: "業種による制限はありますか？",
                a: "幅広い業種に対応しております。EC、飲食、美容、教育、不動産など、様々な業界での実績があります。まずはお気軽にご相談ください。"
              },
              {
                q: "月々の配信数に制限はありますか？",
                a: "プランによって異なりますが、Standardプラン以上では月8回まで、Premiumプランでは無制限で配信可能です。お客様のニーズに合わせて最適なプランをご提案します。"
              },
              {
                q: "契約期間の縛りはありますか？",
                a: "最低契約期間は3ヶ月からとなっております。効果的な運用には一定期間の継続が重要なため、短期間での解約はお断りしています。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFAQ === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA再掲 */}
      <section className="py-16 bg-gradient-to-br from-[#06C755] to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            今すぐ始めて、売上を加速させませんか？
          </h2>
          <p className="text-xl mb-8 text-green-100">
            無料相談で、あなたのビジネスに最適なLINE活用法をご提案します
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              name="name"
              placeholder="お名前"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <textarea
              name="message"
              placeholder="ご相談内容（任意）"
              rows="3"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-[#06C755] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              無料オンライン相談を予約する
            </button>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LINE構築代行サービス</h3>
              <p className="text-gray-400 text-sm">
                あなたのビジネスを加速させる公式LINE運用を完全サポート
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>公式LINE構築</li>
                <li>シナリオ設計</li>
                <li>チャットボット</li>
                <li>運用サポート</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">会社情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>会社概要</li>
                <li>お問い合わせ</li>
                <li>プライバシーポリシー</li>
                <li>利用規約</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">フォローする</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LINE構築代行サービス. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}