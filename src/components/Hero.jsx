import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, PhoneCall, MapPin, Eye, ShieldCheck, Users, Landmark } from "lucide-react";
import siteData from "../data.json";

const Hero = ({ data }) => {
  const stats = siteData.village.about.stats;
  const [views, setViews] = useState(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Preload background image smoothly
    const img = new Image();
    img.src = data.imageUrl;
    img.onload = () => setBgLoaded(true);
  }, [data.imageUrl]);

  useEffect(() => {
    const namespace = "hazian-page-views";
    const key = "views";
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const currentViews = data.count !== undefined ? data.count : data.value;
        if (currentViews !== undefined) {
          setViews(currentViews);
        }
      })
      .catch((err) => console.error("Error fetching view count:", err));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-slate-950 pt-24 pb-16 lg:py-20"
    >
      {/* Background Image with Crisp Overlay & Smooth Fade-in */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          bgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Natural & Vibrant Photo Overlays: left side provides text contrast, right side keeps photo bright & visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
        
        {/* Hidden SEO image */}
        <img
          src={data.imageUrl}
          alt="হাজিয়ান গ্রামের প্রাকৃতিক দৃশ্য - মাতামুহুরী নদীর তীরে সবুজ প্রকৃতি, চকরিয়া, কক্সবাজার"
          width="1200"
          height="630"
          className="sr-only"
          aria-hidden="true"
          loading="eager"
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Heading & Information */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ঐতিহ্যবাহী জনপদ • ফাঁসিয়াখালী ইউনিয়ন
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.15] drop-shadow-md">
            {data.title.split(" ")[0]}{" "}
            <span className="text-emerald-400 drop-shadow-[0_2px_12px_rgba(16,185,129,0.4)]">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100 mb-8 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            {data.subtitle}
          </p>

          {/* Action Buttons (Desktop view: sits under subtitle) */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
            >
              গ্রামের বিবরণ দেখুন
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#emergency"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-colors"
            >
              <PhoneCall size={18} className="text-emerald-400" />
              জরুরী সেবা নম্বর
            </a>
          </div>
        </div>

        {/* Right Column: Verified Civic Profile Card & Mobile Action Buttons */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">হাজিয়ান গ্রাম বাতায়ন</h3>
                  <p className="text-xs text-slate-400 font-medium">১নং ওয়ার্ড • চকরিয়া, কক্সবাজার</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                <ShieldCheck size={12} /> ভেরিফাইড
              </span>
            </div>

            {/* Structured Indicators */}
            <div className="space-y-3">
              {stats &&
                stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/50 border border-slate-800"
                  >
                    <span className="text-slate-400 text-sm font-medium">
                      {stat.label}
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      {stat.value}
                    </span>
                  </div>
                ))}

              <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/50 border border-slate-800">
                <span className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                  উপজেলা ও জেলা
                </span>
                <span className="text-white font-bold text-sm">
                  চকরিয়া, কক্সবাজার
                </span>
              </div>

              {views !== null && (
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
                  <span className="text-emerald-300 text-sm font-medium flex items-center gap-1.5">
                    <Eye size={16} /> মোট ভিজিটর
                  </span>
                  <span className="text-emerald-400 font-bold text-sm sm:text-base font-mono">
                    {views.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            {/* Card Footer Note */}
            <p className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center">
              হাজিয়ান গ্রাম পরিচালনা কমিটি কর্তৃক পরিচালিত ডিজিটাল তথ্য সেবা
            </p>
          </div>

          {/* Action Buttons (Mobile view: sits directly below the card as requested) */}
          <div className="lg:hidden flex flex-col sm:flex-row gap-3.5 w-full max-w-md mt-6">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm w-full"
            >
              গ্রামের বিবরণ দেখুন
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#emergency"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-colors w-full"
            >
              <PhoneCall size={18} className="text-emerald-400" />
              জরুরী সেবা নম্বর
            </a>
          </div>
        </div>

      </div>
 
    </section>
  );
};

export default Hero;
