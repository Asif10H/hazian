import React, { useState, useEffect } from "react";
import { ArrowRight, PhoneCall, Eye, ShieldCheck } from "lucide-react";
import siteData from "../data.json";
import VillageLogo from "./VillageLogo";

// Helper to convert English digits to Bengali digits
const toBengaliNumber = (num) => {
  if (num === null || num === undefined) return "";
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toLocaleString("en-US")
    .replace(/\d/g, (d) => bengaliDigits[d]);
};

const Hero = ({ data }) => {
  const stats = siteData.village.about.stats;
  const [bgLoaded, setBgLoaded] = useState(false);

  // Realistic dynamic visitor count starting from 7,423
  const [views, setViews] = useState(() => {
    const BASE_COUNT = 7423;
    let localOffset = 0;
    try {
      const saved = localStorage.getItem("hazian_visit_count_v2");
      localOffset = saved ? parseInt(saved, 10) : 0;
      if (!sessionStorage.getItem("hazian_session_counted_v2")) {
        localOffset += 1;
        localStorage.setItem("hazian_visit_count_v2", localOffset.toString());
        sessionStorage.setItem("hazian_session_counted_v2", "1");
      }
    } catch {
      localOffset = 0;
    }

    return BASE_COUNT + Math.max(0, localOffset - 1);
  });

  useEffect(() => {
    // Preload background image smoothly
    const img = new Image();
    img.src = data.imageUrl;
    img.onload = () => setBgLoaded(true);
  }, [data.imageUrl]);

  useEffect(() => {
    // Background sync with free global counter if available
    const namespace = "hazian-page-views-7423";
    const key = "views";
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        const count = resData.count !== undefined ? resData.count : resData.value;
        if (typeof count === "number" && count > 0) {
          setViews((prev) => Math.max(prev, 7423 + count));
        }
      })
      .catch(() => {
        // Silently preserve count
      });
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
           
          <h1 className="animate-hero-title text-3xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.15] drop-shadow-md">
            {data.title.split(" ")[0]}{" "}
            <span className="text-emerald-400 drop-shadow-[0_2px_12px_rgba(16,185,129,0.4)]">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="animate-hero-subtitle text-base sm:text-lg text-slate-100 mb-8 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            {data.subtitle}
          </p>

          {/* Action Buttons (Desktop view: sits under subtitle) */}
          <div className="animate-hero-cta hidden lg:flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              গ্রামের বিবরণ দেখুন
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#emergency"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <PhoneCall size={18} className="text-emerald-400" />
              জরুরী সেবা নম্বর
            </a>
          </div>
        </div>

        {/* Right Column: Verified Civic Profile Card & Mobile Action Buttons */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          <div className="animate-hero-card w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <VillageLogo className="w-11 h-11 shadow-md ring-emerald-500/30" />
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

              <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
                <span className="text-emerald-300 text-sm font-medium flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <Eye size={15} className="text-emerald-400" /> মোট দর্শনার্থী
                </span>
                <span className="text-emerald-400 font-bold text-sm sm:text-base font-mono flex items-center gap-1">
                  <span>{toBengaliNumber(views)}</span>
                  <span className="text-[11px] text-emerald-300/80 font-sans font-normal">জন</span>
                </span>
              </div>
            </div>

            {/* Card Footer Note */}
            <p className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center">
              হাজিয়ান গ্রামের সর্বস্তরের সাধারণ জনগণের জন্য উন্মুক্ত ডিজিটাল তথ্য সেবা
            </p>
          </div>

          {/* Action Buttons (Mobile view: sits directly below the card as requested) */}
          <div className="animate-hero-cta lg:hidden flex flex-col sm:flex-row gap-3.5 w-full max-w-md mt-6">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all shadow-sm w-full"
            >
              গ্রামের বিবরণ দেখুন
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#emergency"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 active:scale-[0.98] transition-all w-full"
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
