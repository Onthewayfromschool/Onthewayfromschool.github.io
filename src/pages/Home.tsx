import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Sparkles, GitFork } from 'lucide-react'

const products = [
  {
    id: 'zizai',
    name: '字在',
    tagline: '帮爸妈识字更自在',
    description: '专为长辈设计的汉字学习工具，让妈妈也能轻松识字，考取驾照、独立出行。',
    icon: BookOpen,
    color: 'bg-orange-500',
    status: '已上线',
    link: 'https://afdian.com/a/zizai',
  },
  {
    id: 'quangan',
    name: '全干',
    tagline: 'AI 助手',
    description: '基于 Function Calling 的多 Agent CLI 工具，让 AI 不只是聊天。',
    icon: Sparkles,
    color: 'bg-blue-500',
    status: '开发中',
    link: '#',
  },
  {
    id: 'crossroads',
    name: '十字路口',
    tagline: '决策助手',
    description: '面对人生选择时，用结构化的方式梳理思路，做出不后悔的决定。',
    icon: GitFork,
    color: 'bg-green-500',
    status: '开发中',
    link: '#',
  },
]

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-16">
      {/* Hero 区域 */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          做让长辈也能<br className="md:hidden" />自在使用的产品
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          我是 fxls，一个相信技术应该温暖每个人的独立开发者。
          我的妈妈因为不会认字，连驾照都考不了——这让我开始做「字在」。
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-md"
          >
            查看产品
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            了解更多
          </Link>
        </div>
      </section>

      {/* 创始人故事简短版 */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl shrink-0">
            👨‍💻
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">为什么做这些产品？</h2>
            <p className="text-gray-600 leading-relaxed">
              我妈妈五十多岁了，她一直想考驾照，但因为不识字，科目一都过不了。
              市面上没有一款真正为长辈设计的识字工具——字体太小、功能太复杂、没有考虑到长辈的使用习惯。
              所以我做了「字在」，从妈妈的真实需求出发，帮她一步步识字。
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              我相信，<span className="font-medium text-orange-600">好的产品不是炫技，而是解决真实的问题。</span>
            </p>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">我的产品</h2>
          <Link
            to="/products"
            className="text-sm text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <a
                key={product.id}
                href={product.link}
                target={product.link.startsWith('http') ? '_blank' : undefined}
                rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center text-white shrink-0`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        product.status === '已上线'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-sm text-orange-600 font-medium mb-1">{product.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all shrink-0 mt-1"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}
