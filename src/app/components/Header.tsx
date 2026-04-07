import React from 'react';
import Head from 'next/head';


const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#fef8f9]/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto left-0 right-0">
    <div className="text-xl md:text-2xl font-serif font-bold text-[#9c3d5f]">The Ethereal Pulse</div>
    <div className="hidden md:flex items-center gap-12 font-serif italic tracking-tight">
      {['Sanctuary', 'Practice', 'Guides', 'Membership'].map((item) => (
        <a key={item} className="text-[#755d5f] hover:text-[#9c3d5f] transition-opacity" href={`#${item.toLowerCase()}`}>
          {item}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <button className="material-symbols-outlined text-[#db7093] scale-95 hover:opacity-80 transition-all">
        shopping_bag
      </button>
      <div className="w-10 h-10 rounded-full bg-pink-100 overflow-hidden border border-[#db7093]/20">
        <img 
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto grid grid-cols-12 gap-8 items-center pt-32">
    <div className="col-span-12 lg:col-span-7">
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9c3d5f] mb-6 block font-semibold">
        Est. 2024 — Somatic Resonance
      </span>
      <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[1] font-serif font-bold -tracking-[0.04em] mb-12 text-[#1d1b1c]">
        Breathe into the <br/>
        <span className="italic font-extralight text-[#9c3d5f]">Unseen</span> Space.
      </h1>
      <p className="text-lg md:text-xl max-w-md leading-relaxed text-[#544246] mb-12 font-serif">
        A curated archive of movement and stillness designed for the modern transcendentalist. Reclaim your rhythm.
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <button className="bg-gradient-to-br from-[#9c3d5f] to-[#db7093] text-white px-10 py-5 rounded-full font-sans text-sm tracking-widest shadow-lg hover:scale-105 transition-transform">
          BEGIN PRACTICE
        </button>
        <button className="text-[#1d1b1c] font-serif italic text-lg relative group">
          View Schedules
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#db7093]"></span>
        </button>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-5 relative">
      <div className="aspect-[4/5] rounded-full overflow-hidden shadow-2xl relative z-10 border-[12px] border-white/30">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
          alt="Yoga Pose" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#f8d8db] rounded-full -z-10 opacity-50 blur-3xl"></div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="px-6 md:px-12 py-32 bg-[#f8f2f3]">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Curated <span className="italic font-normal">Sanctuaries</span></h2>
        <p className="font-sans text-[10px] uppercase tracking-widest text-[#755d5f] max-w-[150px] text-right">
          EXPLORE OUR CORE PILLARS
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[700px]">
        <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="relative z-10">
            <span className="text-[#9c3d5f] font-sans text-xs tracking-widest mb-4 block">01</span>
            <h3 className="text-4xl font-serif font-bold mb-6">Pranayama <br/>Archival</h3>
            <p className="text-[#544246] max-w-xs leading-relaxed font-serif">Breathing techniques transcribed from ancient lineage.</p>
          </div>
          <div className="absolute bottom-[-5%] right-[-5%] w-2/3 h-2/3 rounded-3xl overflow-hidden rotate-6 group-hover:rotate-0 transition-transform duration-700">
             <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" alt="Meditation" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="bg-[#9c3d5f] text-white rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden shadow-xl">
          <span className="material-symbols-outlined text-4xl absolute top-8 right-8">waves</span>
          <h4 className="text-2xl font-serif italic">Vinyasa Flow</h4>
        </div>

        <div className="bg-[#ece7e8] rounded-3xl p-8 flex flex-col justify-between hover:bg-[#f8d8db] transition-colors cursor-pointer">
          <h4 className="text-sm font-sans tracking-widest font-bold uppercase">Membership</h4>
          <div className="flex justify-between items-end">
            <p className="text-sm font-serif italic text-[#755d5f]">Unlock global access</p>
            <span className="material-symbols-outlined">arrow_outward</span>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-3xl p-12 flex items-center gap-8 group transition-all shadow-sm">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#fef8f9]">
            <img src="https://images.unsplash.com/photo-1599447292180-45fd84092ef0?auto=format&fit=crop&q=80&w=200" alt="Tools" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h4 className="text-2xl font-serif font-bold mb-2">Sacred Objects</h4>
            <p className="text-[#544246] text-sm font-serif">A collection of tools for the tactile practice.</p>
            <button className="mt-4 text-[#9c3d5f] font-sans text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                SHOP COLLECTION <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page ---

export default function YogaLandingPage() {
  return (
    <div className="bg-[#fef8f9] text-[#1d1b1c] font-serif selection:bg-[#db7093]/30">
      <Head>
        <title>The Ethereal Pulse | Yoga Sanctuary</title>
        <meta name="description" content="Somatic resonance and yoga practice" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <BentoGrid />

        {/* Editorial Section */}
        <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800" 
                  alt="Editorial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-[240px] md:max-w-[280px]">
                <span className="font-sans text-[10px] tracking-widest text-[#9c3d5f] mb-4 block font-bold">GUEST FEATURE</span>
                <p className="font-serif text-lg md:text-xl leading-snug italic">"The architecture of the breath is the soul's home."</p>
                <p className="mt-4 text-xs font-sans text-[#755d5f] tracking-widest">— DR. ELARA VANCE</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-serif font-bold -tracking-tight leading-tight mb-8">
                The Lunar <br/><span className="italic text-[#db7093]">Manifesto</span>
              </h2>
              <p className="text-lg text-[#544246] leading-relaxed mb-12 font-serif">
                Our latest editorial explores the intersection of gravity and stillness. We delve into the rhythmic cycles that define our somatic experience.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Gravitational Alignment', desc: 'Understanding your center of mass in static holds.' },
                  { title: 'Nocturnal Rhythms', desc: 'Yoga Nidra practices for deep restorative sleep.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                    <span className="text-[#9c3d5f] font-serif text-xl">0{idx + 1}</span>
                    <div>
                      <h5 className="text-xl font-serif font-bold mb-1 group-hover:text-[#9c3d5f] transition-colors">{item.title}</h5>
                      <p className="text-sm text-[#755d5f] font-serif">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-32 mb-24 bg-white/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Join the <span className="italic font-normal">Pulse</span></h2>
            <p className="text-[#755d5f] mb-12 max-w-xl mx-auto italic font-serif text-lg">
              Weekly transmissions of movement, philosophy, and ethereal curation.
            </p>
            <form className="flex flex-col md:flex-row gap-4 items-center">
              <input 
                className="w-full bg-transparent border-b border-[#d9c0c5] focus:outline-none focus:border-[#9c3d5f] px-4 py-4 text-xl font-serif transition-colors" 
                placeholder="Your essence (Email)" 
                type="email" 
              />
              <button className="w-full md:w-auto px-12 py-4 bg-[#1d1b1c] text-white rounded-full font-sans text-xs tracking-widest hover:bg-[#9c3d5f] transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#f8f2f3] py-24 px-6 md:px-12 border-t border-pink-100">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <span className="text-2xl font-serif text-[#9c3d5f] mb-8 block font-bold">The Ethereal Pulse</span>
            <p className="text-[#755d5f] font-serif text-sm leading-relaxed">
              Elevating somatic consciousness through curated stillness since 2024.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h6 className="font-bold text-[#9c3d5f] uppercase tracking-widest text-[10px] mb-2">Discovery</h6>
            <div className="flex flex-col gap-3 text-sm text-[#755d5f]">
              <a href="#" className="hover:text-[#9c3d5f]">Sanctuary</a>
              <a href="#" className="hover:text-[#9c3d5f]">Practice</a>
              <a href="#" className="hover:text-[#9c3d5f]">Membership</a>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-bold text-[#9c3d5f] uppercase tracking-widest text-[10px] mb-2">Connect</h6>
            <div className="flex flex-col gap-3 text-sm text-[#755d5f]">
              <a href="#" className="hover:text-[#9c3d5f]">Instagram</a>
              <a href="#" className="hover:text-[#9c3d5f]">Contact</a>
            </div>
          </div>
          <div className="text-[10px] text-[#755d5f] opacity-60 flex flex-col justify-end">
            © 2026 The Ethereal Pulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}