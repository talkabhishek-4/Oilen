import React, { useState } from 'react';
import { Search, Filter, ShieldAlert, CheckCircle2 } from 'lucide-react';

const STATIC_REPORTS = [
  {
    id: "OIL-NM-2026-0881",
    site: "Drilling Rig #07 (Duliajan)",
    narrative: "Auxiliary winch tugger cable parted under tension while lifting drill collar. Wire rope whipped across drill floor.",
    isSif: true,
    iogpRule: "Line of Fire",
    barrier: "Physical Exclusion Zone Absent",
    confidence: 96.4
  },
  {
    id: "OIL-UC-2026-0879",
    site: "Central Gas Gathering Station (Jorhat)",
    narrative: "High pressure bleed valve on sour gas scrubber seized open during maintenance; permit tagging expired.",
    isSif: true,
    iogpRule: "Energy Isolation",
    barrier: "Double Block & Bleed LOTO",
    confidence: 91.8
  },
  {
    id: "OIL-UA-2026-0872",
    site: "Moran Wellhead Installation #04",
    narrative: "Painter observed unclipping safety lanyard while stepping over monkey board handrail without tie-off.",
    isSif: true,
    iogpRule: "Working at Height",
    barrier: "100% Tie-Off / Secondary Lanyard",
    confidence: 89.2
  },
  {
    id: "OIL-NM-2026-0865",
    site: "Base Engineering Workshop (Duliajan)",
    narrative: "Shift hand-over paper copy left unsigned on welding bench. Fire extinguisher present and valid.",
    isSif: false,
    iogpRule: "Work Authorization",
    barrier: "Administrative Paper Checklist",
    confidence: 94.1
  }
];

export default function Reports() {
  const [query, setQuery] = useState('');
  const [sifFilter, setSifFilter] = useState(false);

  const filtered = STATIC_REPORTS.filter(r => {
    const matches = r.narrative.toLowerCase().includes(query.toLowerCase()) ||
                    r.site.toLowerCase().includes(query.toLowerCase()) ||
                    r.iogpRule.toLowerCase().includes(query.toLowerCase());
    return sifFilter ? (matches && r.isSif) : matches;
  });

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search report ID, narrative, rule, site..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <button
          onClick={() => setSifFilter(!sifFilter)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
            sifFilter ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          {sifFilter ? "SIF Precursors Only" : "Show All Reports"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-4">Report ID</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Site</th>
              <th className="py-3 px-4">Narrative</th>
              <th className="py-3 px-4">IOGP Rule</th>
              <th className="py-3 px-4">Failed Barrier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filtered.map(r => (
              <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">{r.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {r.isSif ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      <ShieldAlert className="w-3 h-3" /> SIF Precursor
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Non-SIF
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">{r.site}</td>
                <td className="py-3 px-4 max-w-sm truncate text-slate-600">{r.narrative}</td>
                <td className="py-3 px-4 font-semibold text-amber-700 whitespace-nowrap">{r.iogpRule}</td>
                <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{r.barrier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}