import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherPrayerWidget from "./components/WeatherPrayerWidget";
import About from "./components/About";
import History from "./components/History";
import Institutions from "./components/Institutions";
import Representatives from "./components/Representatives";
import CitizenServices from "./components/CitizenServices";
import EmergencyContacts from "./components/EmergencyContacts";
import Notables from "./components/Notables";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import RouteGuide from "./components/RouteGuide";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import siteData from "./data.json";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const { village } = siteData;
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar data={village} />

      <main>
        <Hero data={village.heroSection} />

        {/* Local Weather & Prayer Times Widget */}
        <WeatherPrayerWidget />

        {/* Core Info */}
        <About data={village.about} />
        <History data={village.history} />

        {/* Community & Institutions */}
        <Institutions data={village.institutions} />
        <Representatives data={village.representatives} />
        <Notables data={village.notables} />

        {/* Services & Emergency */}
        <CitizenServices data={village.services} />
        <EmergencyContacts data={village.emergency} />

        {/* Media & Gallery */}
        <Gallery data={village.gallery} />

        {/* Frequently Asked Questions */}
        <FAQ data={village.faq} />

        {/* Travel & Route Guide */}
        <RouteGuide data={village.routeGuide} />

        {/* Contact */}
        <Contact data={village.contact} />
      </main>

      <Footer />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}

export default App;
