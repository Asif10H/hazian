import React from 'react';

/**
 * VillageLogo Component
 * A bespoke civic emblem representing Hazian Village:
 * - Golden Rising Sun (প্রভাতী সূর্য ও জ্ঞান-প্রগতির প্রতীক)
 * - Matamuhuri River waves (মাতামুহুরী নদীর রূপালী জলধারা)
 * - Evergreen agricultural canopy & sprout (উর্বর পলিমাটি ও সবুজ শ্যামলিমা)
 */
const VillageLogo = ({ className = "w-10 h-10" }) => {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-2 shadow-sm ring-1 ring-white/20 group-hover:scale-105 group-hover:shadow-md group-hover:from-emerald-500 group-hover:to-teal-700 transition-all duration-300 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          <linearGradient id="hazianSun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="hazianRiver" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>
        </defs>

        {/* Golden Dawn Sun */}
        <circle cx="16" cy="11.5" r="4.2" fill="url(#hazianSun)" />

        {/* Sun Radiant Rays */}
        <path
          d="M16 4.5V2.8M9.5 7.5L8.2 6.2M22.5 7.5L23.8 6.2M6 12H4M28 12H26"
          stroke="#FEF08A"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Green Village Canopy / Rolling Landscape */}
        <path
          d="M3.5 21.5C7.5 16.5 11.5 16 16 19C20.5 16 24.5 16.5 28.5 21.5"
          stroke="#A7F3D0"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* Matamuhuri Flowing River Ribbon */}
        <path
          d="M3.5 25C7.5 22.5 11.5 26.5 16 24C20.5 21.5 24.5 25.5 28.5 23"
          stroke="url(#hazianRiver)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Secondary River Ripple */}
        <path
          d="M5.5 28.2C9.5 26.2 12.5 28.8 16 27.2C19.5 25.8 22.5 28.2 26.5 26.2"
          stroke="#E0F2FE"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Central Sprout Leaf */}
        <path
          d="M16 15.5C15 12.5 16 9.5 16 9.5C16 9.5 17 12.5 16 15.5Z"
          fill="#FFFFFF"
          opacity="0.95"
        />
      </svg>
    </div>
  );
};

export default VillageLogo;

