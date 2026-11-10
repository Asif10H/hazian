import React from 'react';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  Car, 
  Compass,
  Bike
} from 'lucide-react';

const RouteGuide = ({ data }) => {
  if (!data) return null;

  const vehicleIcons = {
    'টমটম / ইজিবাইক (লোকাল)': Car,
    'সিএনজি অটোরিকশা (লোকাল)': Car,
    'রিজার্ভ সিএনজি / টমটম': Car,
    'মোটরসাইকেল (লোকাল রাইড)': Bike,
  };

  return (
    <section id="route" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title || "যাতায়াত ও রুট নির্দেশিকা"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle || "চকরিয়া পৌর সদর ও বাস টার্মিনাল থেকে মাতামুহুরী ব্রিজ হয়ে হাজিয়ান গ্রামে পৌঁছানোর সহজ রোডম্যাপ ও ভাড়ার তালিকা।"}
          </p>
        </div>

        {/* Quick Route Summary Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-10 shadow-md border border-slate-800 reveal">
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

        {/* 4-Step Interactive Timeline Roadmap */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <Navigation size={13} />
              ধাপে ধাপে যাতায়াত নির্দেশিকা
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {data.steps?.map((item, idx) => (
              <div 
                key={idx}
                className="relative rounded-2xl bg-slate-50 border border-slate-200/80 p-5 flex flex-col justify-between shadow-xs hover:border-emerald-300 hover:bg-white transition-all card-hover-lift group reveal reveal-delay-1"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm font-mono flex items-center justify-center shadow-xs">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Vehicle Indicator */}
                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>{item.vehicle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport & Approximate Fares Directory */}
        <div className="mb-8">
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
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all card-hover-lift"
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
        </div>

        {/* Travel Tip Banner */}
        {data.tip && (
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start sm:items-center gap-3.5 text-slate-800 shadow-xs">
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
