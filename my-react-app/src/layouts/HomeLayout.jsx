import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, ArrowRight, Menu, X } from 'lucide-react';

export default function HomeLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo & Brand[cite: 3] */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Shield className="w-5 h-5 fill-white/20 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-slate-900 block leading-none">
                OILENS
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                Detect. Predict. Prevent.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links[cite: 3] */}
          <nav className="hidden md:flex items-center gap-9 text-xs font-semibold text-slate-600">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollToSection('why-oilens')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Primary CTA[cite: 3] */}
          <div className="hidden md:flex items-center">
            <Link
              to="/app"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Open Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-5 py-4 space-y-3 text-xs font-semibold">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left py-1 text-slate-700"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="block w-full text-left py-1 text-slate-700"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollToSection('why-oilens')}
              className="block w-full text-left py-1 text-slate-700"
            >
              About
            </button>
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-2.5 rounded-lg mt-2"
            >
              Open Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </header>

      {/* Page Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer[cite: 3] */}
      <footer className="border-t border-slate-100 py-6 bg-white text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              O
            </div>
            <div>
              <span className="font-bold text-slate-900 text-xs mr-2">OILENS</span>
              <span className="text-[10px] text-slate-400">Detect. Predict. Prevent.</span>
            </div>
          </div>
          <p className="text-center text-slate-500 text-[11px]">
            AI-powered SIF precursor detection & safety intelligence
          </p>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Prototype / Demonstration
          </div>
        </div>
      </footer>
    </div>
  );
}