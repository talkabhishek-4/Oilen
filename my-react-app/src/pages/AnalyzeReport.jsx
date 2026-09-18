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
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-500" />
            AI Safety Report Classifier
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Input unstructured narrative descriptions from field logs to screen for high-consequence precursors.
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Asset Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:ring-1 focus:ring-amber-500 focus:outline-none"
              >
                <option>Drilling Rig #07 (Duliajan)</option>
                <option>Central Gas Gathering Station (Jorhat)</option>
                <option>Moran Wellhead Installation #04</option>
                <option>Naharkatiya Pumping Station</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Report Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:ring-1 focus:ring-amber-500 focus:outline-none"
              >
                <option>Near-Miss</option>
                <option>Unsafe Condition (UC)</option>
                <option>Unsafe Act (UA)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-1">Observation Narrative</label>
            <textarea
              rows={5}
              value={narrative}
              onChange={(e) => setNarrative(e.target.value)}
              placeholder="e.g. Mud line manifold pressure spiked above 2400 PSI during flow testing; high pressure hammer union was found with missing safety retaining clip..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-amber-500 focus:outline-none leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold">Sample Test Narratives</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setNarrative("Winch hoist tugger cable snapped under tension while hoisting drill collar. Cable whipped within 1.5m of roustabout crew on drill floor.")}
                className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 cursor-pointer"
              >
                High Energy Tugger Cable Snapped
              </button>
              <button
                type="button"
                onClick={() => setNarrative("Shift log book on workshop table missing signoff signature from outgoing technician.")}
                className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 cursor-pointer"
              >
                Low Risk Administrative Anomaly
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !narrative.trim()}
            className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50 shadow-xs"
          >
            {loading ? <><RefreshCw className="w-4 h-4 animate-spin" /> Evaluating Precursors...</> : <><Send className="w-4 h-4" /> Run SIF Classification</>}
          </button>
        </form>
      </div>

      {/* Output Panel */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Classification Result</h3>

        {result ? (
          <div className="space-y-4 text-xs">
            <div className={`p-4 rounded-xl border flex items-center justify-between ${
              result.isSif ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <div className="flex items-center gap-3">
                {result.isSif ? <ShieldAlert className="w-6 h-6 text-rose-600" /> : <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                <div>
                  <p className="font-extrabold text-sm uppercase">{result.classification}</p>
                  <p className="text-[11px] opacity-90">Model Confidence: {result.confidence}%</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-slate-500 block mb-1 font-medium">Mapped IOGP Rule</span>
                <span className="font-bold text-amber-700 text-sm">{result.iogpRule}</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-slate-500 block mb-1 font-medium">High Energy Factor</span>
                <span className="font-bold text-slate-800 text-sm">{result.highEnergy}</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl col-span-2">
                <span className="text-slate-500 block mb-1 font-medium">Failed or Absent Barrier</span>
                <span className="font-bold text-rose-600 text-sm">{result.barrier}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Input Text</span>
              <p className="text-slate-700 italic mt-1 leading-relaxed">"{result.narrative}"</p>
            </div>
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400 space-y-2 border border-dashed border-slate-200 rounded-xl">
            <Cpu className="w-8 h-8 opacity-40" />
            <p className="text-xs">Submit a narrative to view real-time precursor classification</p>
          </div>
        )}
      </div>
    </div>
  );
}