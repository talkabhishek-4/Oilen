import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Zap, Cpu, ArrowRight, Activity, Flame, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5" /> SIH 2026 Problem Statement 26165
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          AI/NLP Engine to Detect <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">SIF Precursors</span> in OIL Field Reports
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Automated classification of Unsafe-Act, Unsafe-Condition, and Near-Miss narratives. Automatically isolates the high-energy vectors and broken safety barriers behind Serious Injuries & Fatalities (SIF).
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            to="/app/analyze"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl shadow-amber-500/10 transition-all"
          >
            <Cpu className="w-4 h-4" /> Run Live NLP Inference
          </Link>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold px-6 py-3 rounded-xl text-sm border border-slate-800 transition-all"
          >
            Enter Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Feature Triplets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0f172a]/80 border border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-white">Binary SIF Classification</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Distinguishes low-potential routine observations from genuine fatal precursors containing high-energy releases and degraded physical barriers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f172a]/80 border border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-white">IOGP Life-Saving Rules Mapping</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Automatically aligns incident narratives to standard IOGP safety rules: Line of Fire, Energy Isolation, Working at Height, and Mechanical Lifting.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f172a]/80 border border-slate-800 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-white">Barrier Failure Tracking</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Surfaces recurring barrier gaps (e.g. LOTO bypass, missing exclusion zones, unanchored fall harnesses) before incidents manifest in field installations.
          </p>
        </div>
      </div>
    </div>
  );
}