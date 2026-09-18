import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { 
  Menu, 
  X,
  User, 
  Shield, 
  LayoutDashboard, 
  Cpu, 
  FileText, 
  AlertTriangle, 
  TrendingUp,
  ArrowLeft
} from 'lucide-react';

export default function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/app/analyze", label: "Analyze", icon: Cpu },
    { to: "/app/reports", label: "Reports", icon: FileText },
    { to: "/app/intelligence", label: "SIF Intel", icon: AlertTriangle },
    { to: "/app/trends", label: "Trends", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      
      
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 px-4 h-16 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="p-2 -ml-1 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

      
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white">
              <Shield className="w-4 h-4 stroke-[2.2] fill-white/20" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-slate-950 block leading-tight tracking-tight">
                OILENS[cite: 4]
              </span>
              <span className="text-[10px] text-slate-400 font-medium block leading-none">
                Detect. Predict. Prevent.[cite: 4]
              </span>
            </div>
          </Link>
        </div>

        {/* User Avatar Circle[cite: 4] */}
        <button 
          className="w-8 h-8 rounded-full bg-[#0038b8] text-white flex items-center justify-center shadow-xs cursor-pointer hover:bg-blue-700 transition-colors"
          title="Safety Officer Profile"
        >
          <User className="w-4 h-4 stroke-[2.2]" />
        </button>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex">
          <div className="w-72 bg-white h-full p-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-bold text-sm text-slate-900">Navigation</span>
                <button onClick={() => setDrawerOpen(false)} className="p-1 rounded text-slate-500 hover:bg-slate-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setDrawerOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 font-bold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                to="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Home
              </Link>
            </div>
          </div>
          <div className="flex-1" onClick={() => setDrawerOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 pt-6 bg-[#f8fafc]">
        <Outlet />
      </main>

      
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/90 h-16 px-2 flex items-center justify-around shadow-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 w-16 py-1 text-[10px] font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`
              }
            >
              <Icon className="w-5 h-5 stroke-[2]" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

    </div>
  );
}