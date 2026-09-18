import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Check, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  User, 
  Scale
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-10 sm:pt-14 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              AI-POWERED SAFETY INTELLIGENCE
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Detect SIF Precursors
              </h1>
              <h1 className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight leading-[1.15]">
                Before They Become Serious.
              </h1>
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
              OILENS analyzes unsafe-act, unsafe-condition and near-miss reports to identify potential Serious Injury & Fatality precursors and provide explainable safety intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/app/analyze"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-lg text-xs shadow-xs transition-all cursor-pointer"
              >
                Analyze a Report <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/app"
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold px-5 py-3 rounded-lg text-xs border border-slate-200 transition-all cursor-pointer"
              >
                Explore Dashboard <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                Human-in-the-loop decision support
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                Explainable causal reasoning
              </span>
            </div>
          </div>

          {/* Right Hero: Reasoning Concept Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-3.5">
              
              {/* Preview Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase font-mono">
                    Reasoning Concept Preview
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500 uppercase border border-slate-200">
                  Prototype / Demo
                </span>
              </div>

              {/* Step 1: Safety Report[cite: 3] */}
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  SAFETY REPORT
                </span>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Worker entered a <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-normal not-italic">confined space</span> <span className="bg-rose-100 text-rose-900 px-1 py-0.5 rounded font-normal not-italic">without gas testing</span>. <span className="bg-rose-100 text-rose-900 px-1 py-0.5 rounded font-normal not-italic">No standby person</span> was present."
                </p>
              </div>

              {/* Connector Arrow[cite: 3] */}
              <div className="flex justify-center text-slate-300">
                <span className="text-sm font-mono">↓</span>
              </div>

              {/* Step 2: AI Analysis[cite: 3] */}
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="font-bold text-blue-600 uppercase tracking-wider">AI ANALYSIS</span>
                  <span className="text-slate-400">NLP Structured Extraction</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-medium">Hazard</span>
                    <span className="font-bold text-slate-800 text-[11px]">Confined Space</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-medium">Exposure</span>
                    <span className="font-bold text-slate-800 text-[11px]">Atmospheric Hazard</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 text-[11px] text-rose-900">
                  <span className="font-bold block text-[10px] uppercase tracking-wider text-rose-600 mb-0.5">Control Gap Identified</span>
                  Gas testing not performed • No standby person present
                </div>
              </div>

              {/* Connector Arrow[cite: 3] */}
              <div className="flex justify-center text-slate-300">
                <span className="text-sm font-mono">↓</span>
              </div>

              {/* Step 3: SIF Potential Flag[cite: 3] */}
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    SIF POTENTIAL
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600">
                    <span className="w-2 h-2 rounded-full bg-rose-600" />
                    HIGH SIF POTENTIAL
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-rose-50 text-rose-600 border border-rose-200">
                  Precursor Flagged
                </span>
              </div>

              {/* Connector Arrow[cite: 3] */}
              <div className="flex justify-center text-slate-300">
                <span className="text-sm font-mono">↓</span>
              </div>

              {/* Step 4: Safety Officer Review[cite: 3] */}
              <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center">
                    SO
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block leading-tight">Safety Officer Review</span>
                    <span className="text-[10px] text-blue-600">Human verification & control action</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white text-blue-700 border border-blue-200">
                  Pending Review
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE VALUE: WHY OILENS?[cite: 3] */}
      <section id="why-oilens" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-1.5">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider font-mono">
            CORE VALUE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why OILENS?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SIF Precursor Detection[cite: 3] */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100">
              <AlertTriangle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              SIF Precursor Detection
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Identify potential serious-injury and fatality precursors within unsafe-act, unsafe-condition and near-miss reports.
            </p>
          </div>

          {/* Card 2: Explainable Intelligence[cite: 3] */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Explainable Intelligence
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect evidence, hazard, exposure, control gaps and potential consequences to explain the assessment.
            </p>
          </div>

          {/* Card 3: Human Validation[cite: 3] */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
              <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Human Validation
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Support Safety Officers with AI-assisted analysis while keeping human review at the center of safety decisions.
            </p>
          </div>

        </div>
      </section>

      {/* 3. HOW OILENS WORKS (5 Process Cards)[cite: 3] */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-1.5">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How OILENS Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From a safety report to explainable SIF intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Step 01[cite: 3] */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">01</span>
              <h4 className="font-bold text-xs text-slate-900 uppercase">REPORT</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Unsafe Act /<br />
                Unsafe Condition /<br />
                Near-Miss
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase pt-3 border-t border-slate-100 block">
              FIELD SUBMISSION
            </span>
          </div>

          {/* Step 02[cite: 3] */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">02</span>
              <h4 className="font-bold text-xs text-slate-900 uppercase">NLP UNDERSTANDING</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Extract:<br />
                • Hazard<br />
                • Activity<br />
                • Exposure<br />
                • Controls
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase pt-3 border-t border-slate-100 block">
              CONTEXT EXTRACTION
            </span>
          </div>

          {/* Step 03[cite: 3] */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">03</span>
              <h4 className="font-bold text-xs text-slate-900 uppercase">SIF ANALYSIS</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Evaluate:<br />
                • Control Gaps<br />
                • Potential Consequence<br />
                • SIF Potential
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase pt-3 border-t border-slate-100 block">
              CRITICAL RISK MODEL
            </span>
          </div>

          {/* Step 04[cite: 3] */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">04</span>
              <h4 className="font-bold text-xs text-slate-900 uppercase">EXPLANATION</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                • Evidence<br />
                • Reasoning<br />
                • Domain Knowledge
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase pt-3 border-t border-slate-100 block">
              TRACEABLE FACTORS
            </span>
          </div>

          {/* Step 05[cite: 3] */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">05</span>
              <h4 className="font-bold text-xs text-blue-900 uppercase">HUMAN REVIEW</h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                • Safety Officer<br />
                • Validation<br />
                • Safety Action
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-600 uppercase pt-3 border-t border-blue-200/60 block">
              ACTION DECISION
            </span>
          </div>

        </div>
      </section>

      {/* 4. CAPABILITIES: BUILT FOR PROACTIVE SAFETY INTELLIGENCE[cite: 3] */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-1.5">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider font-mono">
            CAPABILITIES
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Built for Proactive Safety Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">SIF Intelligence</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Understand why a report was flagged.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Hazard Trends</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Identify recurring hazard and precursor patterns.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Report Analysis</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Analyze individual safety reports.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <User className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Safety Officer Review</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Keep human judgment in the decision loop.
            </p>
          </div>

        </div>
      </section>

      {/* 5. ETHICAL AI STATEMENT: AI EXPLAINS, HUMAN REVIEWS[cite: 3] */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100">
          <Scale className="w-6 h-6 stroke-[2]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          AI explains. Human reviews. Safety action follows.
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          OILENS is designed as decision support. It does not replace established safety procedures or Safety Officer judgment.
        </p>
      </section>

      {/* 6. FROM EVIDENCE TO ACTION (Workflow Pipeline Diagram)[cite: 3] */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From Evidence to Action
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            OILENS does not simply produce an SIF label. It provides the reasoning behind the assessment so that Safety Officers can review the relevant evidence and make informed safety decisions.
          </p>
        </div>

        {/* Diagram Pill Pipeline[cite: 3] */}
        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-semibold">
            
            {/* Top Row */}
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
              REPORT
            </span>
            <span className="text-slate-300">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
              EVIDENCE
            </span>
            <span className="text-slate-300">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
              HAZARD
            </span>
            <span className="text-slate-300">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
              EXPOSURE
            </span>
            <span className="text-slate-300">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
              CONTROL GAP
            </span>
            <span className="text-slate-300">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
              POTENTIAL CONSEQUENCE
            </span>
            <span className="text-slate-300">→</span>

            {/* Bottom Row */}
            <div className="w-full flex items-center justify-center gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 font-bold">
                SIF POTENTIAL
              </span>
              <span className="text-slate-300">→</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold shadow-xs">
                SAFETY OFFICER REVIEW
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION[cite: 3] */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Turn Safety Reports Into Preventive Intelligence.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Analyze reports, understand SIF precursor patterns, and support proactive safety review.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-xs shadow-xs hover:shadow transition-all cursor-pointer"
          >
            Open OILENS Dashboard <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/app/analyze"
            className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-lg text-xs border border-slate-200 transition-all cursor-pointer"
          >
            Analyze a Report <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </section>

    </div>
  );
}