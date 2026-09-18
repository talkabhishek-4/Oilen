import React from 'react';
import { Flame, Layers, MapPin } from 'lucide-react';

export default function SIFIntelligence() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* High Energy Vectors */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <Flame className="w-4 h-4 text-rose-600" /> High-Energy Sources
          </h3>
          <div className="space-y-2.5 text-xs">
            {[
              { type: "Stored Mechanical / Tension", count: "31%", desc: "Winch cables, drill string torque" },
              { type: "Pressurized Systems (>150 PSI)", count: "29%", desc: "Manifolds, mud pump lines" },
              { type: "Gravity / Suspended Loads", count: "24%", desc: "Traveling blocks, casing elevators" },
              { type: "Hydrocarbon Release / Hot Work", count: "16%", desc: "Gas leaks in unventilated areas" }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{item.type}</span>
                  <span className="text-amber-700 font-mono">{item.count}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Barrier Failures */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" /> Barrier Integrity Failures
          </h3>
          <div className="space-y-2.5 text-xs">
            {[
              { barrier: "Direct Physical Exclusion Zone", status: "Absent / Breached", severity: "Critical" },
              { barrier: "LOTO / Double Positive Isolation", status: "Incomplete Tagging", severity: "High" },
              { barrier: "Secondary Fall Arrest System", status: "Unanchored", severity: "Critical" },
              { barrier: "Blowout Preventer (BOP) Actuation", status: "Delayed Sensor Log", severity: "Warning" }
            ].map((b, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">{b.barrier}</p>
                  <p className="text-[11px] text-rose-600 mt-0.5">{b.status}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-bold">
                  {b.severity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Site Density */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600" /> Site Precursor Density
          </h3>
          <div className="space-y-2.5 text-xs">
            {[
              { site: "Drilling Rig #07 (Duliajan)", score: "High Precursor Rate", count: 88, alert: true },
              { site: "Moran Field Wellhead Skid", score: "Moderate Precursor Rate", count: 54, alert: true },
              { site: "Jorhat Compression Complex", score: "Controlled", count: 24, alert: false },
              { site: "Naharkatiya Pipeline Hub", score: "Controlled", count: 18, alert: false }
            ].map((s, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">{s.site}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.score}</p>
                </div>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  s.alert ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {s.count} logs
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}