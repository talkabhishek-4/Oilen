import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  ShieldAlert,
  AlertCircle,
  RefreshCw,
  Anchor,
  Fingerprint,
  ArrowRight,
  BarChart2,
  ShieldCheck
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const reviewQueue = [
    {
      id: "SR-2025-084",
      title: "Rig 04 - High Pressure Mud Hose Whip Check Failure",
      reported: "2h ago by D. Vance (Drilling Ops)",
      level: "HIGH SIF POTENTIAL",
      levelVariant: "high",
      precursor: "Precursor: Pressurized System • Equipment Failure",
      precursorIcon: AlertCircle,
      protocol: "HITL Protocol Mandatory"
    },
    {
      id: "SR-2025-081",
      title: "Substation B - Confined Space Permit Isolation Deviation",
      reported: "5h ago by M. Tariq (Electrical)",
      level: "HIGH SIF POTENTIAL",
      levelVariant: "high",
      precursor: "Precursor: Hazardous Energy Control (LOTO)",
      precursorIcon: RefreshCw,
      protocol: "HITL Protocol Mandatory"
    },
    {
      id: "SR-2025-079",
      title: "Warehouse Crane Sling Angle Exceedance",
      reported: "yesterday by J. Roy (Logistics)",
      level: "MEDIUM SIF POTENTIAL",
      levelVariant: "medium",
      precursor: "Precursor: Suspended Load / Rigging",
      precursorIcon: Anchor,
      protocol: "Standard Triage Verification"
    }
  ];

  const categories = [
    { name: "Hazardous Energy Control", pct: 38, width: "38%" },
    { name: "Pressurized Systems", pct: 31, width: "31%" },
    { name: "Working at Height", pct: 19, width: "19%" },
    { name: "Suspended Loads", pct: 12, width: "12%" }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24 text-slate-900">
      
      {/* 1. Header Context Row */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-900 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Demo Data • Prototype Environment
        </div>
        <span className="text-xs text-slate-500 font-medium">Shift Cycle 04</span>
      </div>

      {/* 2. Main Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
          Safety Intelligence
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
          Monitor SIF precursors and reports requiring attention.
        </p>
      </div>

      {/* 3. SIF Precursor Overview Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">SIF Precursor Overview</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Past 24 Hours[cite: 4]</span>
        </div>

        {/* 3-Column Metrics[cite: 4] */}
        <div className="grid grid-cols-3 gap-3 pt-1">
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 font-medium">Ingested[cite: 4]</span>
            <div className="text-2xl sm:text-3xl font-bold text-slate-950">142[cite: 4]</div>
            <span className="text-[11px] text-slate-400 font-normal">All field logs[cite: 4]</span>
          </div>

          <div className="space-y-0.5 border-l border-slate-100 pl-3 sm:pl-4">
            <span className="text-xs text-slate-500 font-medium">Flagged SIF[cite: 4]</span>
            <div className="text-2xl sm:text-3xl font-bold text-rose-600">8[cite: 4]</div>
            <span className="text-[11px] text-slate-400 font-normal">5.6% flagged[cite: 4]</span>
          </div>

          <div className="space-y-0.5 border-l border-slate-100 pl-3 sm:pl-4">
            <span className="text-xs text-slate-500 font-medium">Under Review[cite: 4]</span>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">3[cite: 4]</div>
            <span className="text-[11px] text-slate-400 font-normal">Queue active[cite: 4]</span>
          </div>
        </div>

        {/* Triage Distribution Breakdown[cite: 4] */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600">Triage Distribution[cite: 4]</span>
            <span className="text-slate-500 font-medium">142 Reports Triaged[cite: 4]</span>
          </div>

          <div className="space-y-1.5">
            <div className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-rose-50/90 text-rose-700 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                HIGH SIF POTENTIAL[cite: 4]
              </span>
              <span className="font-bold">2[cite: 4]</span>
            </div>

            <div className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-indigo-50/90 text-indigo-700 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                MEDIUM SIF POTENTIAL[cite: 4]
              </span>
              <span className="font-bold">6[cite: 4]</span>
            </div>

            <div className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                LOW SIF POTENTIAL[cite: 4]
              </span>
              <span className="font-bold">134[cite: 4]</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Priority Review Queue[cite: 4] */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Priority Review Queue[cite: 4]</h2>
          </div>
          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium">
            3 Pending HITL[cite: 4]
          </span>
        </div>

        <div className="space-y-3">
          {reviewQueue.map((item) => {
            const Icon = item.precursorIcon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5 hover:border-slate-300 transition-colors"
              >
                {/* Header Row[cite: 4] */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.title}[cite: 4]
                  </h3>
                  {item.levelVariant === "high" ? (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                      {item.level}[cite: 4]
                    </span>
                  ) : (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      {item.level}[cite: 4]
                    </span>
                  )}
                </div>

                {/* Subtitle / Metadata[cite: 4] */}
                <p className="text-xs text-slate-500 font-normal">
                  Report #{item.id} • Reported {item.reported}[cite: 4]
                </p>

                {/* Precursor Tag Pill[cite: 4] */}
                <div className="w-fit inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium">
                  <Icon className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>{item.precursor}[cite: 4]</span>
                </div>

                {/* Action Row[cite: 4] */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                    <Fingerprint className="w-4 h-4 text-slate-400" />
                    <span>{item.protocol}[cite: 4]</span>
                  </div>

                  <button
                    onClick={() => navigate('/app/reports')}
                    className="inline-flex items-center gap-2 bg-[#0038b8] hover:bg-[#002f9e] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs transition-all cursor-pointer"
                  >
                    Review & Verify <ArrowRight className="w-3.5 h-3.5" />[cite: 4]
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Top Precursor Categories[cite: 4] */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Top Precursor Categories[cite: 4]</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Active Shift[cite: 4]</span>
        </div>

        <div className="space-y-3.5 pt-1">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{cat.name}[cite: 4]</span>
                <span className="font-bold text-slate-700 font-mono">{cat.pct} %[cite: 4]</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: cat.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Human-in-the-Loop Protocol Active Banner[cite: 4] */}
      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
        <div className="p-1 rounded-md text-blue-600 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold text-slate-900">
            Human-in-the-Loop Protocol Active[cite: 4]
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI NLP Assessment assists certified Safety Officers. Action deployment requires Officer verification.[cite: 4]
          </p>
        </div>
      </div>

    </div>
  );
}