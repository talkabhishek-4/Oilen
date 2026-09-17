import React from 'react';
import { ArrowUpRight, ShieldAlert, Flame, MapPin, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0f172a]/90 border border-slate-800 p-5 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Reports Screened (YTD)</span>
          <div className="text-3xl font-black text-white mt-1">2,840</div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" /> +14.2% observations logged
          </div>
        </div>

        <div className="bg-[#0f172a]/90 border border-rose-500/30 p-5 rounded-2xl">
          <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">SIF Precursors Detected</span>
          <div className="text-3xl font-black text-rose-400 mt-1">624</div>
          <div className="mt-2 text-[11px] text-rose-300/80 font-medium">
            21.9% of near-misses had fatal potential
          </div>
        </div>

        <div className="bg-[#0f172a]/90 border border-amber-500/30 p-5 rounded-2xl">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Dominant IOGP Rule</span>
          <div className="text-xl font-black text-slate-100 mt-2 truncate">Line of Fire / Rigging</div>
          <div className="mt-2 text-[11px] text-slate-400 font-medium">
            38.5% of critical precursors
          </div>
        </div>

        <div className="bg-[#0f172a]/90 border border-slate-800 p-5 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">High Risk Installations</span>
          <div className="text-3xl font-black text-white mt-1">4 Rigs</div>
          <div className="mt-2 text-[11px] text-amber-400/90 font-medium">
            Exceeding threshold density
          </div>
        </div>
      </div>

      {/* Middle Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <h3 className="font-bold text-sm text-slate-100">IOGP Life-Saving Rules SIF Precursor Breakdown</h3>
              <p className="text-xs text-slate-400">Precursor concentration across operational activities</p>
            </div>
            <Link to="/app/intelligence" className="text-xs text-amber-400 hover:underline">View Matrix →</Link>
          </div>

          <div className="space-y-3.5">
            {[
              { name: "Line of Fire & Stored Tension", count: 240, pct: 82, color: "bg-rose-500" },
              { name: "Energy Isolation (LOTO / Piping Under Pressure)", count: 168, pct: 57, color: "bg-amber-500" },
              { name: "Safe Mechanical Lifting Operations", count: 114, pct: 39, color: "bg-orange-500" },
              { name: "Working at Height & Elevated Catwalks", count: 72, pct: 25, color: "bg-yellow-500" },
              { name: "Bypassing Safety Controls & Interlocks", count: 30, pct: 10, color: "bg-blue-500" }
            ].map(r => (
              <div key={r.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{r.name}</span>
                  <span className="font-mono text-slate-400">{r.count} reports ({r.pct}%)</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 mb-2 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4" /> The Precursor Imperative
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard near-miss reporting counts minor events equally. SIF prevention focuses on the critical 20–25% containing high energy where a single safeguard failure leads to fatal outcome.
            </p>
          </div>

          <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Classifier Architecture</span>
            <p className="text-xs font-semibold text-slate-200">Domain-Fine-Tuned RoBERTa + Rule Extractor</p>
            <div className="flex gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">F1-Score: 0.942</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">OIL Trained</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}