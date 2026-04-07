"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";

const EtherealPulse = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Навигацийн хэсэг гүйлгэх үед өнгө нь өөрчлөгдөх эффект
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-sans selection:bg-[#db7093] overflow-x-hidden">
      <Head>
        <title>The Ethereal Pulse | Kinetic Sanctuary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
        />
      </Head>

      {/* --- Responsive Navigation --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
          isScrolled
            ? "bg-[#1c1b1b]/90 backdrop-blur-md py-3"
            : "bg-transparent pt-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-xl md:text-3xl italic font-light tracking-tighter text-[#FFB1C6]">
            The Ethereal Pulse
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {["Sanctuary", "Practice", "Guides", "Membership"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-serif uppercase tracking-[0.2em] text-[10px] text-[#D9C0C5] hover:text-[#FFB1C6] transition-all"
              >
                The {item}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-[#ffb1c6] to-[#db7093] text-[#3f001c] px-5 py-2 md:px-8 md:py-3 rounded-full hover:scale-105 transition-transform tracking-widest text-[10px] uppercase font-bold shadow-lg shadow-[#db7093]/20">
            Join Now
          </button>
        </div>
      </nav>

      <main>
        {/* --- Hero Section: Responsive Height --- */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40 scale-110"
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/60 to-[#131313]"></div>
          </div>

          <div className="relative z-10 text-center px-6 w-full max-w-7xl">
            <h1 className="font-serif text-[16vw] lg:text-[10vw] leading-[0.85] -tracking-[0.05em] italic font-light text-[#FFB1C6] flex flex-col items-center">
              <span className="md:mr-32 drop-shadow-2xl">The Ethereal</span>
              <span className="md:ml-48 -mt-2 md:-mt-6 text-[#e5e2e1] text-[18vw] lg:text-[12vw] font-black not-italic mix-blend-difference">
                Pulse
              </span>
            </h1>
            <p className="font-sans text-[#d9c0c5] text-[10px] md:text-sm tracking-[0.4em] uppercase mt-10 md:mt-12 max-w-xl mx-auto leading-loose">
              A cinematic sanctuary for the somatic dreamer.
            </p>
            <div className="mt-12 md:mt-16 flex justify-center">
              <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#FFB1C6] to-transparent animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* --- Section 1: Grid Layout Adjustment --- */}
        <section className="relative py-24 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative inline-block w-full">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#db7093]/20 rounded-full blur-[80px]"></div>
                <img
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-3xl relative z-10"
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
                  alt="Yoga pose"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-8 order-1 lg:order-2 space-y-6 md:space-y-8">
              <h2 className="font-serif text-5xl md:text-8xl leading-tight text-[#e5e2e1]">
                The Kinetic <br />
                <span className="italic text-[#FFB1C6] font-light">Dream</span>
              </h2>
              <p className="text-[#d9c0c5] text-base md:text-lg leading-relaxed font-serif italic opacity-80">
                Step beyond the threshold of the mundane. Here, movement is a
                meditation in light and shadow. We have curated a rhythmic
                landscape where your breath dictates the pulse.
              </p>
              <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
                <span className="material-symbols-outlined text-4xl text-[#FFB1C6]">
                  auto_awesome
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#d9c0c5]">
                  Somatic Immersion & Sensory Refinement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 2: Cards Grid (Mobile 1, Tablet 2, Desktop 3) --- */}
        <section className="bg-[#1c1b1b] py-24 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h3 className="font-serif text-5xl md:text-7xl text-[#e5e2e1] italic">
                The Modalities
              </h3>
              <p className="text-[#FFB1C6] uppercase tracking-[0.3em] text-[10px] font-bold border-b border-[#FFB1C6] pb-2">
                Curated experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Liquid Shadows",
                  type: "Vinyasa Flow",
                  img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800",
                  vol: "01",
                },
                {
                  title: "Neon Stillness",
                  type: "Deep Yin",
                  img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800",
                  vol: "02",
                  offset: true,
                },
                {
                  title: "Kinetic Pulse",
                  type: "Dynamic Hatha",
                  img: "https://images.unsplash.com/photo-1552196564-972b49932ad4?q=80&w=800",
                  vol: "03",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#353534] transition-all duration-700 ${card.offset ? "lg:mt-20" : ""}`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 right-6 flex justify-between">
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#FFB1C6]">
                      Vol. {card.vol}
                    </span>
                    <span className="material-symbols-outlined text-white text-sm">
                      north_east
                    </span>
                  </div>
                  <div className="absolute bottom-10 left-10">
                    <h4 className="font-serif text-4xl text-[#e5e2e1] leading-none mb-4">
                      {card.title.split(" ")[0]} <br />{" "}
                      <span className="italic font-light opacity-80">
                        {card.title.split(" ")[1]}
                      </span>
                    </h4>
                    <span className="text-[9px] uppercase tracking-widest font-black text-[#FFB1C6]">
                      {card.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 3: Vertical Split Atmosphere --- */}
        <section className="relative bg-[#131313] flex flex-col lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
              alt="Atmosphere"
            />
          </div>
          <div className="w-full lg:w-1/2 px-8 md:px-20 py-20 md:py-32 flex flex-col justify-center space-y-10">
            <h2 className="font-serif text-6xl md:text-9xl text-[#e5e2e1] leading-[0.8]">
              The <br /> Atmosphere
            </h2>
            <p className="text-lg text-[#d9c0c5] font-serif italic max-w-md">
              A spatial intervention designed to dissolve the ego. Our studio
              uses chromotherapy and acoustic resonance to create a sanctuary.
            </p>
            <div className="grid grid-cols-2 gap-10 border-y border-white/5 py-12">
              <div>
                <div className="text-[#FFB1C6] font-serif text-4xl italic tracking-tighter">
                  72°
                </div>
                <div className="text-[9px] uppercase tracking-widest mt-2 opacity-50 font-bold">
                  Ambient Warmth
                </div>
              </div>
              <div>
                <div className="text-[#FFB1C6] font-serif text-4xl italic tracking-tighter">
                  432hz
                </div>
                <div className="text-[9px] uppercase tracking-widest mt-2 opacity-50 font-bold">
                  Sonic Frequency
                </div>
              </div>
            </div>
            <button className="group flex items-center space-x-6 w-fit">
              <div className="w-14 h-14 rounded-full border border-[#FFB1C6] flex items-center justify-center group-hover:bg-[#FFB1C6] transition-all">
                <span className="material-symbols-outlined text-[#FFB1C6] group-hover:text-[#131313] text-sm">
                  play_arrow
                </span>
              </div>
              <span className="uppercase tracking-[0.3em] text-[9px] font-black">
                Experience the sound
              </span>
            </button>
          </div>
        </section>

        {/* --- Footer & Newsletter --- */}
        <section className="py-32 px-6 text-center relative overflow-hidden bg-white/5">
          <div className="max-w-2xl mx-auto space-y-10">
            <h3 className="font-serif text-5xl md:text-7xl italic text-[#e5e2e1]">
              Become the{" "}
              <span className="not-italic text-[#FFB1C6]">Pulse.</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-sm focus:border-[#FFB1C6] outline-none transition-all"
                placeholder="Your essence (Email)"
                type="email"
              />
              <button className="bg-[#FFB1C6] text-[#3f001c] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
                Begin Journey
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e0e0e] pt-20 pb-10 px-8 text-center lg:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 border-t border-white/5 pt-16">
          <div className="lg:col-span-2">
            <div className="font-serif text-3xl italic text-[#FFB1C6] mb-6">
              The Ethereal Pulse
            </div>
            <p className="text-[#d9c0c5] text-sm opacity-50 max-w-sm mx-auto lg:mx-0">
              A cinematic dreamscape for somatic discovery. Movement as art,
              breathing as medicine.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h5 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
              Navigations
            </h5>
            {["Sanctuary", "Practice", "Guides", "Membership"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-serif text-[#d9c0c5] hover:text-[#FFB1C6] text-sm"
              >
                The {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h5 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
              Studio
            </h5>
            {["Privacy", "Terms", "Etiquette"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-serif text-[#d9c0c5] hover:text-[#FFB1C6] text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-20 text-[9px] tracking-[0.3em] uppercase opacity-20">
          © 2026 The Ethereal Pulse.
        </div>
      </footer>
    </div>
  );
};

export default EtherealPulse;
