import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Institutions from './components/Institutions';
import Representatives from './components/Representatives';
import CitizenServices from './components/CitizenServices';
import EmergencyContacts from './components/EmergencyContacts';
import Notables from './components/Notables';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import siteData from './data.json';

function App() {
  const { village } = siteData;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar data={village} />
      
      <main>
        <Hero data={village.heroSection} />
        
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
        
        {/* Media & Feed */}
        <Gallery data={village.gallery} />
        
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