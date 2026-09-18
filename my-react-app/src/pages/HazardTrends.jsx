import React from 'react';

export default function HazardTrends() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Precursor Trajectory */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
        <div>
          <h3 className="font-bold text-sm text-slate-900">Weekly Precursor Density Trajectory</h3>
          <p className="text-xs text-slate-500">SIF Precursor vs. Non-SIF incident volume trends</p>
        </div>

        <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-100">
          {[
            { week: "Wk 34", sif: 38, non: 72 },
            { week: "Wk 35", sif: 42, non: 84 },
            { week: "Wk 36", sif: 56, non: 91 },
            { week: "Wk 37", sif: 35, non: 68 },
            { week: "Wk 38", sif: 64, non: 110 }
          ].map(w => (
            <div key={w.week} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full flex gap-1 items-end justify-center h-40">
                <div className="w-3.5 bg-rose-500 rounded-t" style={{ height: `${w.sif}%` }} title={`SIF: ${w.sif}`} />
                <div className="w-3.5 bg-slate-300 rounded-t" style={{ height: `${w.non}%` }} title={`Non-SIF: ${w.non}`} />
              </div>
              <span className="text-[10px] font-mono text-slate-500">{w.week}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 text-xs">
          <span className="flex items-center gap-2 text-rose-600 font-semibold">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-xs" /> SIF Precursor Rate
          </span>
          <span className="flex items-center gap-2 text-slate-600 font-semibold">
            <span className="w-2.5 h-2.5 bg-slate-300 rounded-xs" /> Routine Observations
          </span>
        </div>
      </div>

      {/* Barrier Degradation */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
        <div>
          <h3 className="font-bold text-sm text-slate-900">Recurring Barrier Degradation Matrix</h3>
          <p className="text-xs text-slate-500">Critical controls exhibiting high breakdown frequency</p>
        </div>

        <div className="space-y-3 text-xs">
          {[
            { barrier: "Work Permit & Mechanical Isolation (LOTO)", risk: "84% Failure Density", status: "Critical Attention" },
            { barrier: "Rigging Hardware Inspection Prior to Lift", risk: "68% Failure Density", status: "High Action" },
            { barrier: "Catwalk Fall Arrest Static Anchor Points", risk: "46% Failure Density", status: "Moderate Action" },
            { barrier: "Atmospheric Testing in Confined Tanks", risk: "28% Failure Density", status: "Controlled" }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">{item.barrier}</p>
                <p className="text-[11px] text-amber-700 font-mono mt-0.5">{item.risk}</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}