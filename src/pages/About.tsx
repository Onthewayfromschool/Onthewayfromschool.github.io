import { Mail, Code, Coffee, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">关于我</h1>
        <p className="text-gray-600">一个相信技术应该温暖每个人的开发者</p>
      </div>

      {/* 我是谁 */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            F
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">fxls</h2>
            <p className="text-gray-500">独立开发者 / 前端工程师</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            我是 fxls，一个在前端和 AI 领域不断探索的开发者。
            从重庆大学毕业，在阿里和海康实习过，后来和团队一起做过创业项目「飞鱼闪充」。
          </p>
          <p>
            现在，我把主要精力放在做<span className="font-medium text-orange-600">能让长辈也用得上的产品</span>。
            技术不应该只是年轻人的专利，它应该帮助每一个人——包括我们的父母。
          </p>
        </div>
      </section>

      {/* 为什么做这些产品 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">为什么做这些产品？</h2>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl shrink-0">
              👩
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">从妈妈的需求出发</h3>
              <p className="text-gray-700 leading-relaxed">
                我妈妈五十多岁了，她一直想考驾照，但因为不识字，科目一都过不了。
                市面上没有一款真正为长辈设计的识字工具——字体太小、功能太复杂、没有考虑到长辈的使用习惯。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                所以我做了「字在」，大字显示、语音朗读、笔画练习，从妈妈的真实需求出发，帮她一步步识字。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl shrink-0">
              🛠️
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">工具应该帮人做事</h3>
              <p className="text-gray-700 leading-relaxed">
                做「全干」是因为我觉得现在的 AI 对话太「轻」了——问一句答一句，不能真正帮你完成任务。
                我希望 AI 能像助手一样，真正动手帮你编码、查资料、处理日常事务。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl shrink-0">
              🚦
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">决策需要结构化</h3>
              <p className="text-gray-700 leading-relaxed">
                「十字路口」源于我自己在做选择时的困扰。很多时候我们不是不知道答案，
                而是被情绪和信息淹没，看不清全貌。一个结构化的决策流程，能帮你理清思路，做出不后悔的决定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">联系我</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:1527490762@qq.com"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-medium text-gray-800">邮箱</p>
              <p className="text-sm text-gray-500">1527490762@qq.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Onthewayfromschool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-gray-100 transition-colors">
              <Code size={20} />
            </div>
            <div>
              <p className="font-medium text-gray-800">GitHub</p>
              <p className="text-sm text-gray-500">@Onthewayfromschool</p>
            </div>
          </a>

          <a
            href="https://afdian.com/a/zizai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-colors">
              <Coffee size={20} />
            </div>
            <div>
              <p className="font-medium text-gray-800">爱发电</p>
              <p className="text-sm text-gray-500">支持我的创作</p>
            </div>
          </a>

          <a
            href="https://xiaohongshu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="font-medium text-gray-800">小红书</p>
              <p className="text-sm text-gray-500">分享产品日常</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
