import { Link, Outlet, useLocation } from 'react-router-dom'
import { Home, Package, User } from 'lucide-react'

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/products', label: '产品', icon: Package },
  { path: '/about', label: '关于', icon: User },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex flex-col">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
            fxls.dev
          </Link>
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* 主内容 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-orange-100 py-6">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-gray-500">
          <p> 2025 fxls. 做让长辈也能自在使用的产品。</p>
        </div>
      </footer>
    </div>
  )
}
