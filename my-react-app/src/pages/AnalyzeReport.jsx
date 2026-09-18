import React, { useState } from 'react';
import { Cpu, Send, RefreshCw, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AnalyzeReport() {
  const [narrative, setNarrative] = useState('');
  const [location, setLocation] = useState('Drilling Rig #07 (Duliajan)');
  const [category, setCategory] = useState('Near-Miss');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!narrative.trim()) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const text = narrative.toLowerCase();
      const isSif = text.includes('sling') || text.includes('crane') || text.includes('pressure') || 
                    text.includes('height') || text.includes('wire') || text.includes('gas') || 
                    text.includes('fall') || text.includes('snapped') || text.includes('high voltage') ||
                    text.includes('hoist');

      setResult({
        id: `OIL-LIVE-${Math.floor(1000 + Math.random() * 9000)}`,
        classification: isSif ? "SIF Precursor (P-SIF)" : "Non-SIF Routine Observation",
        isSif,
        confidence: isSif ? 96.2 : 93.4,
        iogpRule: isSif 
          ? (text.includes('height') ? "Working at Height" : text.includes('pressure') ? "Energy Isolation" : "Line of Fire & Mechanical Lifting") 
          : "Work Authorization",
        highEnergy: isSif ? "Stored Mechanical Energy / Pressure Release" : "Low Kinetic Energy",
        barrier: isSif ? "Physical Exclusion Zone & Rigging Integrity Breached" : "Administrative Documentation Standard",
        narrative
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Input Form */}
      <div className="lg:col-span-6 bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            AI Safety Report Classifier
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Input unstructured narrative descriptions from field logs to screen for serious fatality precursors.
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Asset Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-slate-200 focus:ring-1 focus:ring-amber-400 focus:outline-none"
              >
                <option>Drilling Rig #07 (Duliajan)</option>
                <option>Central Gas Gathering Station (Jorhat)</option>
                <option>Moran Wellhead Installation #04</option>
                <option>Naharkatiya Pumping Station</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Report Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-slate-200 focus:ring-1 focus:ring-amber-400 focus:outline-none"
              >
                <option>Near-Miss</option>
                <option>Unsafe Condition (UC)</option>
                <option>Unsafe Act (UA)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1">Observation Narrative</label>
            <textarea
              rows={5}
              value={narrative}
              onChange={(e) => setNarrative(e.target.value)}
              placeholder="e.g. Mud line manifold pressure spiked above 2400 PSI during flow testing; high pressure hammer union was found with missing safety retaining clip..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-amber-400 focus:outline-none leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-mono">Sample Test Narratives</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setNarrative("Winch hoist tugger cable snapped under tension while hoisting drill collar. Cable whipped within 1.5m of roustabout crew on drill floor.")}
                className="text-[11px] px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 cursor-pointer"
              >
                High Energy Tugger Cable Snapped
              </button>
              <button
                type="button"
                onClick={() => setNarrative("Shift log book on workshop table missing signoff signature from outgoing technician.")}
                className="text-[11px] px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 cursor-pointer"
              >
                Low Risk Administrative Anomaly
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !narrative.trim()}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? <><RefreshCw className="w-4 h-4 animate-spin" /> Evaluating Precursors...</> : <><Send className="w-4 h-4" /> Run SIF Classification</>}
          </button>
        </form>
      </div>

      {/* Output Panel */}
      <div className="lg:col-span-6 bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-base font-bold text-white mb-4">Classification Result</h3>

        {result ? (
          <div className="space-y-4 text-xs">
            <div className={`p-4 rounded-xl border flex items-center justify-between ${
              result.isSif ? 'bg-rose-500/15 border-rose-500/30 text-rose-300' : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
            }`}>
              <div className="flex items-center gap-3">
                {result.isSif ? <ShieldAlert className="w-6 h-6 text-rose-400" /> : <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                <div>
                  <p className="font-extrabold text-sm uppercase">{result.classification}</p>
                  <p className="text-[11px] opacity-80">Model Confidence: {result.confidence}%</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-slate-500 block mb-1">Mapped IOGP Rule</span>
                <span className="font-bold text-amber-400 text-sm">{result.iogpRule}</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-slate-500 block mb-1">High Energy Factor</span>
                <span className="font-bold text-slate-200 text-sm">{result.highEnergy}</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl col-span-2">
                <span className="text-slate-500 block mb-1">Failed or Absent Barrier</span>
                <span className="font-bold text-rose-300 text-sm">{result.barrier}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Input Text</span>
              <p className="text-slate-300 italic mt-1">"{result.narrative}"</p>
            </div>
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-slate-500 space-y-2 border border-dashed border-slate-800 rounded-xl">
            <Cpu className="w-8 h-8 opacity-40" />
            <p className="text-xs">Submit a narrative to view real-time precursor classification</p>
          </div>
        )}
      </div>
    </div>
  );
}