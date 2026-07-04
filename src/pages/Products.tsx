import { BookOpen, Sparkles, GitFork, ArrowRight, ExternalLink } from 'lucide-react'

const products = [
  {
    id: 'zizai',
    name: '字在',
    tagline: '帮爸妈识字更自在',
    description: '专为长辈设计的汉字学习工具。大字显示、语音朗读、笔画练习，让爸妈也能轻松识字。从妈妈的真实需求出发，帮她一步步实现考驾照的梦想。',
    features: ['大字显示，保护视力', '语音朗读，边听边学', '笔画练习，跟写跟练', '每日打卡，培养习惯', '场景化例句，学以致用'],
    icon: BookOpen,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    status: '已上线',
    price: '¥9.9 起',
    links: [
      { label: '去爱发电购买', url: 'https://afdian.com/a/zizai', primary: true },
      { label: '查看 GitHub', url: 'https://github.com/Onthewayfromschool/learnChinesecharacters', primary: false },
    ],
  },
  {
    id: 'quangan',
    name: '全干',
    tagline: 'AI 助手',
    description: '基于 Function Calling 的多 Agent CLI 工具。不只是聊天，而是真正能帮你干活的 AI 助手。编码、日常事务、语音交互，一个工具全搞定。',
    features: ['多 Agent 协作', 'Function Calling', '语音交互 (ASR + TTS)', '双层记忆系统', 'Ink TUI 界面'],
    icon: Sparkles,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    status: '开发中',
    price: '待定',
    links: [
      { label: '查看源码', url: '#', primary: true },
    ],
  },
  {
    id: 'crossroads',
    name: '十字路口',
    tagline: '决策助手',
    description: '面对人生选择时，用结构化的方式梳理思路。8 步引导式决策流程，帮你分析利弊、评估风险，做出不后悔的决定。',
    features: ['8 步引导式决策', 'LangGraph 工作流', '结构化分析', '历史决策回顾', '可导出决策报告'],
    icon: GitFork,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    status: '开发中',
    price: '待定',
    links: [
      { label: '查看源码', url: '#', primary: true },
    ],
  },
]

export default function Products() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">我的产品</h1>
        <p className="text-gray-600">每一件都是为解决真实问题而做</p>
      </div>

      <div className="space-y-8">
        {products.map((product) => {
          const Icon = product.icon
          return (
            <div
              key={product.id}
              className={`bg-white rounded-2xl border ${product.borderColor} shadow-sm overflow-hidden`}
            >
              {/* 头部 */}
              <div className={`${product.bgColor} p-6 md:p-8`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-md shrink-0`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        product.status === '已上线'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-orange-600 font-medium mt-1">{product.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-bold text-gray-800">{product.price}</p>
                  </div>
                </div>
              </div>

              {/* 内容 */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">核心功能</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-orange-500">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {product.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        link.primary
                          ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {link.label}
                      {link.url.startsWith('http') ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
