import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldAlert, 
  Cpu, 
  FileText, 
  TrendingUp, 
  ArrowLeft 
} from 'lucide-react';

export default function DashboardLayout() {
  const navItems = [
    { to: "/app", label: "Executive Dashboard", icon: LayoutDashboard, end: true },
    { to: "/app/intelligence", label: "SIF Intelligence", icon: ShieldAlert },
    { to: "/app/analyze", label: "Analyze Report (NLP)", icon: Cpu },
    { to: "/app/reports", label: "Safety Reports Log", icon: FileText },
    { to: "/app/trends", label: "Hazard Trends", icon: TrendingUp },
  ];

  return (
    <div className="flex h-screen w-screen bg-[#070b14] text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-800/80 bg-[#0b1120] flex flex-col justify-between shrink-0">
        <div>
          <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-800/80 bg-[#0d1527]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center font-black text-slate-950 shadow-md shadow-amber-500/20 text-base tracking-tighter">
              OIL
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-wide text-white block leading-tight">OilLens SIF</span>
              <span className="text-[10px] text-amber-400/90 font-mono tracking-wider uppercase font-semibold">Intelligence Hub</span>
            </div>
          </div>

          <nav className="p-3 space-y-1 text-xs font-semibold">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800/80 bg-[#080d19] space-y-3">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Landing
          </NavLink>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400 leading-snug">
            <p className="font-bold text-slate-300">Oil India Limited HSSE</p>
            <p className="text-slate-500 mt-0.5">PS 26165 • High Energy & Barrier Verification</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-slate-800/80 bg-[#0d1527]/90 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xs font-bold text-slate-300 tracking-wider font-mono uppercase">
              OIL INDIA LIMITED <span className="text-slate-600">/</span> <span className="text-amber-400">HSSE INTELLIGENCE SYSTEM</span>
            </h2>
            <p className="text-[11px] text-slate-400 font-sans">Assam & Arunachal Basin Operational Operations</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 font-bold">NLP CLASSIFIER LIVE</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-[#070b14]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}