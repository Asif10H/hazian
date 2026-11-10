import React, { useState } from 'react';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  Info, 
  CheckCircle2, 
  Car, 
  Compass,
  Bike,
  Bus,
  Waves,
  Milestone,
  ExternalLink,
  ChevronRight,
  Flag,
  ArrowRight,
  Route
} from 'lucide-react';

const RouteGuide = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!data) return null;

  const steps = data.steps || [];

  const stepIcons = [Bus, Waves, Milestone, Flag];

  const vehicleIcons = {
    'টমটম / ইজিবাইক (লোকাল)': Car,
    'সিএনজি অটোরিকশা (লোকাল)': Car,
    'রিজার্ভ সিএনজি / টমটম': Car,
    'মোটরসাইকেল (লোকাল রাইড)': Bike,
  };

  return (
    <section id="route" className="section-padding bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200 shadow-xs">
            <Route size={14} className="text-emerald-700" />
            <span>সরাসরি সড়ক যোগাযোগ গাইড</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            {data.title || "যাতায়াত ও রুট নির্দেশিকা"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle || "চকরিয়া পৌর সদর ও বাস টার্মিনাল থেকে মাতামুহুরী ব্রিজ হয়ে হাজিয়ান গ্রামে পৌঁছানোর সহজ রোডম্যাপ ও ভাড়ার তালিকা।"}
          </p>
        </div>

        {/* Quick Route Summary Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-8 sm:mb-10 shadow-xl border border-slate-800 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
                <Compass size={14} className="text-emerald-400" />
                <span>প্রারম্ভিক কেন্দ্র</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {data.summary?.hub || "চকরিয়া পৌর চত্বর"}
              </div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
                <Navigation size={14} className="text-emerald-400" />
                <span>আনুমানিক দূরত্ব</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                {data.summary?.distance || "৩.৫ - ৪ কিমি"}
              </div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
                <Clock size={14} className="text-emerald-400" />
                <span>যাতায়াত সময়</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                {data.summary?.time || "১৫ - ২০ মিনিট"}
              </div>
            </div>

            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
                <MapPin size={14} className="text-emerald-400" />
                <span>গন্তব্যস্থল</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {data.summary?.destination || "হাজিয়ান গ্রাম"}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE STEP-BY-STEP ROAD JOURNEY TRACK                              */}
        {/* ========================================================================= */}
        <div className="mb-12 sm:mb-14 reveal">
          
          {/* Subheader with Step Mode and Direct Maps Link */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Navigation size={16} />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  ধাপে ধাপে যাতায়াত নির্দেশিকা
                </h3>
                <p className="text-xs text-slate-500">
                  চকরিয়া থেকে হাজিয়ান গ্রামে পৌঁছানোর ৪টি প্রধান ট্রানজিট পয়েন্ট
                </p>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/YttXbSo8JCqcuF7r5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-emerald-300 shadow-2xs transition-all"
            >
              <ExternalLink size={13} className="text-emerald-600" />
              <span>গুগল ম্যাপে লাইভ রুট দেখুন</span>
            </a>
          </div>

          {/* Desktop Visual Asphalt Highway Track (Visible on lg screens) */}
          <div className="hidden lg:block mb-8 bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient Background & Curbs */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 opacity-70" />
            
            {/* Visual Header within Asphalt Canvas */}
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-400 font-mono tracking-wider">
                  ইন্টারেক্টিভ রোড ট্র্যাক সিমুলেশন
                </span>
                <span className="text-xs text-slate-400">
                  • প্রতিটি স্টপে ক্লিক করে বিস্তারিত বিবরণ দেখুন
                </span>
              </div>
              
              <div className="text-xs font-mono text-slate-400">
                বর্তমান অবস্থান: <span className="text-emerald-400 font-bold font-sans">{steps[activeStep]?.title}</span>
              </div>
            </div>

            {/* Simulated Roadbed */}
            <div className="relative py-7 px-4">
              {/* Asphalt Road Body */}
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700/60 shadow-inner flex items-center">
                {/* Yellow Dashed Centerline */}
                <div className="w-full border-t-2 border-dashed border-amber-400/40 relative">
                  {/* Active Travelling Progress Trail */}
                  <div 
                    className="absolute top-[-2px] left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                    style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* 4 Checkpoint Stations along the Highway */}
              <div className="relative z-10 grid grid-cols-4 gap-3">
                {steps.map((st, i) => {
                  const SIcon = stepIcons[i] || MapPin;
                  const isActive = activeStep === i;
                  const isPassed = activeStep > i;

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className="group flex flex-col items-center text-center focus:outline-hidden transition-all"
                    >
                      {/* Kilometer Pill above station */}
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2 transition-all ${
                        isActive 
                          ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold scale-105' 
                          : isPassed 
                            ? 'bg-slate-800 text-emerald-400 border border-slate-700' 
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}>
                        {st.distance || `স্টপ ${st.step}`}
                      </span>

                      {/* Station Checkpoint Pin on the Road */}
                      <div className="relative my-1">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                          isActive 
                            ? 'bg-emerald-500 text-slate-950 scale-110 ring-4 ring-emerald-500/30' 
                            : isPassed 
                              ? 'bg-emerald-700 text-white hover:bg-emerald-600' 
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
                        }`}>
                          <SIcon size={20} />
                        </div>

                        {/* Pulsing ring for active stop */}
                        {isActive && (
                          <span className="absolute -inset-1 rounded-2xl border-2 border-emerald-400 animate-ping pointer-events-none opacity-50" />
                        )}
                      </div>

                      {/* Station Title & Badge */}
                      <div className="mt-2.5 max-w-[170px]">
                        <span className={`text-[10px] font-bold block mb-0.5 ${
                          isActive ? 'text-emerald-400' : 'text-slate-400'
                        }`}>
                          {st.badge}
                        </span>
                        <span className={`text-xs font-bold leading-tight line-clamp-1 transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {st.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Waypoint Road Strip Banner */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold">
                  {steps[activeStep]?.step} • {steps[activeStep]?.badge}
                </span>
                <span className="text-slate-400 font-medium">
                  {steps[activeStep]?.roadType || "প্রধান সড়ক"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400">
                  আনুমানিক সময়: <strong className="text-emerald-400 font-mono">{steps[activeStep]?.timeEst || "১৫ মিনিট"}</strong>
                </span>
                <span className="text-slate-400">
                  বাহন: <strong className="text-white">{steps[activeStep]?.vehicle}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Step Cards Grid with Highway Milestone Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((item, idx) => {
              const SIcon = stepIcons[idx] || MapPin;
              const isSelected = activeStep === idx;

              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-xl -translate-y-1'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Connector Arrow (Between Desktop Cards) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 items-center justify-center shadow-xs pointer-events-none">
                      <ChevronRight size={14} />
                    </div>
                  )}

                  <div>
                    {/* Card Top Milestone Header */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center shadow-xs transition-colors ${
                          isSelected 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.step}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {item.distance || "রুট পয়েন্ট"}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                        isSelected 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Step Icon & Title */}
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <SIcon size={16} />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    {/* Instruction Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {item.desc}
                    </p>

                    {/* Landmark / Road Surface Tag */}
                    {item.landmark && (
                      <div className="mb-3 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 flex items-center gap-1.5">
                        <MapPin size={11} className="text-emerald-600 shrink-0" />
                        <span className="truncate">{item.landmark}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Vehicle / Transit Status */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{item.vehicle}</span>
                    </div>
                    {item.timeEst && (
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                        {item.timeEst}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Route Progress Indicator Bar */}
          <div className="mt-4 p-3 rounded-xl bg-slate-100/90 border border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-slate-800">রোড সিকোয়েন্স:</span>
              <span className="text-slate-600 hidden sm:inline">
                মহাসড়ক (N1) ➔ মাতামুহুরী গার্ডার ব্রিজ ➔ ১নং ওয়ার্ড সংযোগ সড়ক ➔ হাজিয়ান গ্রাম
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500">
              * প্রধান চত্বর থেকে টমটম বা সিএনজিযোগে সরাসরি যাওয়া যায়
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TRANSPORT & APPROXIMATE FARES DIRECTORY                                  */}
        {/* ========================================================================= */}
        <div className="mb-8 reveal">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <Car size={13} />
              উপলব্ধ বাহন ও আনুমানিক ভাড়ার তালিকা
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.fares?.map((fareItem, fIdx) => {
              const VIcon = vehicleIcons[fareItem.vehicle] || Car;
              return (
                <div 
                  key={fIdx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all card-hover-lift"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3.5 border border-emerald-100">
                      <VIcon size={20} />
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {fareItem.vehicle}
                    </h4>

                    <div className="flex items-baseline gap-1.5 my-2">
                      <span className="text-lg sm:text-xl font-black text-emerald-700 font-mono">
                        {fareItem.fare}
                      </span>
                      <span className="text-xs text-slate-500 font-normal">
                        / {fareItem.unit}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {fareItem.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fare Disclaimer Note */}
          <div className="mt-3.5 text-center sm:text-right">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium italic">
              * {data.fareNotice || "সময়, জ্বালানি মূল্য ও পরিস্থিতির ওপর ভিত্তি করে যানবাহনের আনুমানিক ভাড়া কিছুটা কম-বেশি হতে পারে।"}
            </span>
          </div>
        </div>

        {/* Travel Tip Banner */}
        {data.tip && (
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start sm:items-center gap-3.5 text-slate-800 shadow-2xs reveal">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-xs">
              <Info size={18} />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="text-emerald-950 font-bold block sm:inline mr-1">জরুরি পরামর্শ:</strong>
              {data.tip}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RouteGuide;