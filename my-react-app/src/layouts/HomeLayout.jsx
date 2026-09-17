import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-[#0d1527]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center font-black text-slate-950 shadow-md shadow-amber-500/20 text-base tracking-tighter">
              OIL
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-wide text-white block leading-tight">OilLens</span>
              <span className="text-[10px] text-amber-400/90 font-mono tracking-wider uppercase font-semibold">SIF Intelligence</span>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-xs font-semibold">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Platform</Link>
            <Link to="/app/analyze" className="text-slate-300 hover:text-white transition-colors">NLP Engine</Link>
            <Link to="/app" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-lg shadow-amber-500/10 transition-all">
              Launch Console <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 bg-[#090e1a] text-center text-xs text-slate-500">
        Oil India Limited • SIH 2026 Problem Statement 26165 • SIF Precursor AI Engine
      </footer>
    </div>
  );
}