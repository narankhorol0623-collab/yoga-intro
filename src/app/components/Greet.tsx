"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";

// --- Interfaces (TypeScript Types) ---

interface NavItemProps {
  icon: string;
  active?: boolean;
}

interface FeatureCardProps {
  title: string;
  duration: string;
  icon: string;
  variant: "low" | "highest";
}

interface GuideProps {
  name: string;
  specialty: string;
  imageSrc: string;
}

const ThePulseLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-['Manrope'] antialiased selection:bg-[#ffb1c6] selection:text-[#600c31] min-h-screen">
      <Head>
        <title>THE PULSE | Cinematic Sanctuary</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* --- Header --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 h-20 flex justify-between items-center px-6 ${
          isScrolled
            ? "bg-[#131313]/80 backdrop-blur-md"
            : "bg-gradient-to-b from-[#1C1B1B] to-transparent"
        }`}
      >
        <div className="flex items-center space-x-4">
          <span
            className="material-symbols-outlined text-[#FFB1C6] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsDrawerOpen(true)}
          >
            Menu
          </span>
          <h1 className="font-['Newsreader'] uppercase tracking-tight text-3xl font-bold text-[#FFB1C6] italic">
            THE PULSE
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#544246]/20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6TEZq1SyZtO4FkBSRoBNlQ7u469A2wzRaBLE5SeSiELQtGD0CChPd7GEJ3mC2AZFsADutWCT5_k9KZOzM2sYfbtpppvMwMIMYxxk00edR81n4Levor-hjae6CsttLyCQAbIiMBnMszwgP7XJ8DW-VeObv9u8UvQpXHvoXv9VRuIAPSlKanYJ6nanzDC0DI7aWeNK6zkfI-RRpy4bFs8jhdogKlEbEPLAnBiGnTZf-DY7gTP2rdIXpXbMH73hrDwI4lRHffo3V9UQ"
            alt="User profile"
          />
        </div>
      </header>

      <main className="pb-32 overflow-x-hidden">
        {/* --- Hero Section --- */}
        <section className="relative h-[751px] w-full flex items-end px-6 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6gdVM6o1uKxV0lFU8id7eciHCV0kwGHknzi2RQiESk5VXJmbsOiSYgMixpn284Ra1lYacLdCBHVcgg9Ot1hcdzWXIdVtLug0iELlO8cyFxer_UA1VEmnjHk5QOIqrjp46K6cvVv6mwxT_nsvn_TEH5YlLQPg4NskE4p0_sfSqBMyzGMsZ-_-CqAQ7VW5BEGqxKnuaU8XDRDTSzaAMytN8ZyOuQsZqwwlbxl2d3A5amWX3BvvZgNahmMrZ0rpDDuM8UVe34twOwOk"
              alt="surrealist scene"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full">
            <p className="font-['Manrope'] text-[#ffb1c6] tracking-[0.2em] uppercase text-[10px] mb-4">
              the kinetic dreamscape
            </p>
            <h2 className="font-['Newsreader'] italic text-5xl md:text-6xl text-[#e5e2e1] leading-[0.9] -tracking-widest mb-8">
              find the <br />
              <span className="text-[#ffb1c6] italic">rhythm</span> <br />
              of your <br />
              inner void
            </h2>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-[#ffb1c6] to-[#db7093] text-[#3f001c] font-bold py-5 px-10 rounded-xl text-sm uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 duration-300">
                Begin Ritual
              </button>
              <div className="flex flex-col items-start">
                <span className="font-['Newsreader'] italic text-[#d9c0c5] text-xl">
                  01
                </span>
                <div className="w-8 h-[1px] bg-[#544246]/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bento Grid --- */}
        <section className="px-6 py-12 space-y-12">
          <div className="flex flex-col items-start">
            <h3 className="font-['Newsreader'] text-3xl italic text-[#e5e2e1] lowercase tracking-tighter">
              todays resonance
            </h3>
            <div className="w-1/3 h-[2px] bg-[#ffb1c6]/30 mt-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Main Feature */}
            <div className="col-span-2 relative bg-[#2a2a2a] rounded-lg overflow-hidden h-[300px] flex flex-col justify-end p-8">
              <img
                className="absolute top-0 right-[-10%] h-[110%] w-auto object-cover opacity-80 mix-blend-lighten pointer-events-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATGnP0h_xnB6I87wD1pI9CVw6IUUxM9g1BIPFEgbaWbYy9frijXoSqQgK2Eip6mYnQqSCBL5Dj37zHEbPpeQLyJguuIttQbH1hPcmqjjvS9dgUKl0zB2h3Piase8vznjazizJ7RA5wt4qNnQu62zIXiKbwE3mTqI_pASt86ImBDJEYo2eI9IMjwJGWy7F6yLKxK1K9chD9BtrmaLx0oqQdC_lvz7mL3vBbAwWS3BDn9SW030AtQLhFM0Gto76Lan6l6KjhN9f2oHM"
                alt="yoga pose silhouette"
              />
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#ffb1c6] animate-pulse"></div>
                  <span className="font-['Manrope'] text-[10px] text-[#ffb1c6] uppercase tracking-widest">
                    Live: Sanctuary Flow
                  </span>
                </div>
                <h4 className="font-['Newsreader'] text-3xl italic text-[#e5e2e1] mb-4">
                  The Morning <br /> Ascension
                </h4>
                <button className="text-[#d9c0c5] font-['Manrope'] text-[10px] uppercase tracking-widest border-b border-[#544246]/40 pb-1">
                  Enter Space
                </button>
              </div>
            </div>

            <SmallCard
              title="Breath Rituals"
              duration="12 min • guided"
              icon="waves"
              variant="low"
            />
            <SmallCard
              title="Lunar Drift"
              duration="45 min • sleep"
              icon="nightlight"
              variant="highest"
            />
          </div>
        </section>

        {/* --- Editorial Spotlight --- */}
        <section className="py-12 relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-[#1c1b1b]/50 z-0"></div>
          <div className="relative z-10 px-6 flex flex-col items-center">
            <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAoJDXOQqyoAqXkKouenP68NK3UvdsDGCYMtVSN-QNoqbkn5s82gHD34JHhWzCAm73XEoH0Dpmmzj5wkfLaIKkcRGmnnXM9ADdX5sr7oeTtr8ZZK1atV-n3ciNxmwG1tSYsSmREdkwzkcZ7TEjdo3CvWrqVRHw7CPkD2m3vJDWDoaQMnQXx4h7PbAihmUBTx8ntduh9DmqEOrLiiWSb7POBjNXtus88ZUu1BaZ8GvyZ1FLyJGIfUet_LTnp_oIXaHvLLjypqx6tJo"
                alt="meditating woman"
              />
              <div className="absolute inset-0 bg-[#ffb1c6]/10 mix-blend-overlay"></div>
            </div>
            <div className="mt-[-4rem] ml-12 bg-[#131313] p-8 rounded-lg shadow-2xl border border-[#544246]/10 max-w-[80%]">
              <h3 className="font-['Newsreader'] text-4xl italic text-[#ffb1c6] leading-none mb-4">
                surrender to the pulse
              </h3>
              <p className="font-['Manrope'] text-[#d9c0c5] text-sm leading-relaxed tracking-wide">
                The sanctuary is not a place you go, but a frequency you tune
                into. Every movement is a conversation with the void.
              </p>
            </div>
          </div>
        </section>

        {/* --- Horizontal Scroll: Guides --- */}
        <section className="py-12 pl-6">
          <h3 className="font-['Newsreader'] text-3xl italic text-[#e5e2e1] lowercase mb-8">
            the ethereal guides
          </h3>
          <div className="flex space-x-6 overflow-x-auto pr-6 no-scrollbar">
            <GuideItem
              name="elara voss"
              specialty="dream weaving"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAnefo1r6xO4u34rG1VjLHCoOlyDWAOd5uar5uZes6yWtAB5zhc8Us1ZUZU7qj-_c8DDYKjdw6Hw-CEJpWu_FNNzJ4ltuulTjGnQuyJ9gSH15cNaYdgTzMFaFbbwGuPqGzbR8cP4bUAJtuF6F1JrqqB2ETX8Axbgo6P7VMkdRirXizNhZuSs9oaNzAYAuUOEVZK33s71_0dg6ovgHP9U1KDq6skCfAzGzORDMu38Y6mIl_Pl1cfj375IVT4MpG2H8aRJLT2EZcX5eU"
            />
            <GuideItem
              name="kai solaris"
              specialty="kinetic stillness"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBWvQrkPNiLjHK7WiC4hP81FnXrxVOv7_ZGgX4zNTv00ij_zoZlBOerx9beARYUTRPG1qXHz2X9ROIRuRKCx1r4u3JNeDgnGD08ui5dLiwaEC8rfH1ZVc1y4UVSFNndikFeI2Xw-ocQO4ngEzuc3VqhdtUufXQPFtJovfWfp61kpLZmi50UkULBpAwkFi0Nu6ZvFEFdiRz5QKoK5bquIBEqN4QGiMcdhsAX9ZQQQ-dPd7mNfpia5HnlDVZS_-mPOhNhDGuDkYJryjs"
            />
          </div>
        </section>
      </main>

      {/* --- Navigation Drawer --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-md flex transition-opacity duration-500">
          <aside className="h-full w-4/5 rounded-r-[3rem] bg-[#131313] shadow-2xl flex flex-col p-12 space-y-8 animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#FFB1C6] font-['Newsreader'] text-3xl">
                THE ETHEREAL PULSE
              </h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="material-symbols-outlined text-[#FFB1C6]"
              >
                close
              </button>
            </div>
            <nav className="space-y-6">
              <DrawerLink icon="spa" label="Sanctuary" active />
              <DrawerLink icon="waves" label="The Flow" />
              <DrawerLink icon="nightlight" label="Rituals" />
              <DrawerLink icon="menu_book" label="Guides" />
            </nav>
          </aside>
          <div className="flex-1" onClick={() => setIsDrawerOpen(false)}></div>
        </div>
      )}

      {/* --- Bottom Navigation --- */}
      {/* <nav className="fixed bottom-0 left-0 w-full h-24 bg-[#131313]/90 backdrop-blur-xl flex justify-around items-center px-8 pb-4 z-50 rounded-t-[3rem] shadow-[0_-40px_80px_-20px_rgba(219,112,147,0.15)] text-xs uppercase tracking-widest">
        <NavButton icon="self_care" active />
        <NavButton icon="explore" />
        <NavButton icon="auto_awesome" />
        <NavButton icon="person" />
      </nav> */}
    </div>
  );
};

// --- Sub-components (Internal to this file for clarity) ---

const SmallCard: React.FC<FeatureCardProps> = ({
  title,
  duration,
  icon,
  variant,
}) => (
  <div
    className={`col-span-1 rounded-lg p-6 flex flex-col justify-between h-[220px] relative overflow-hidden ${
      variant === "low" ? "bg-[#1c1b1b]" : "bg-[#353534]"
    }`}
  >
    {variant === "highest" && (
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ffb1c6]/10 rounded-full blur-2xl"></div>
    )}
    <span className="material-symbols-outlined text-[#ffb1c6] text-3xl">
      {icon}
    </span>
    <div>
      <h5 className="font-['Newsreader'] text-xl text-[#e5e2e1] italic leading-tight">
        {title.split(" ").map((w, i) => (
          <React.Fragment key={i}>
            {w}
            <br />
          </React.Fragment>
        ))}
      </h5>
      <p className="font-['Manrope'] text-[9px] text-[#d9c0c5] uppercase mt-2 tracking-widest">
        {duration}
      </p>
    </div>
  </div>
);

const GuideItem: React.FC<GuideProps> = ({ name, specialty, imageSrc }) => (
  <div className="flex-shrink-0 w-64">
    <div className="aspect-[3/4] bg-[#2a2a2a] rounded-xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
      <img className="w-full h-full object-cover" src={imageSrc} alt={name} />
    </div>
    <h4 className="font-['Newsreader'] text-xl text-[#e5e2e1] italic lowercase">
      {name}
    </h4>
    <p className="font-['Manrope'] text-[10px] text-[#ffb1c6] uppercase tracking-[0.2em] mt-1">
      {specialty}
    </p>
  </div>
);

const NavButton: React.FC<NavItemProps> = ({ icon, active }) => (
  <a
    className={`flex items-center justify-center rounded-full transition-all ${
      active
        ? "bg-[#DB7093] text-[#3F001C] w-14 h-14 scale-110 animate-pulse"
        : "text-[#D9C0C5] w-12 h-12 hover:text-[#FFB1C6]"
    }`}
    href="#"
  >
    <span
      className="material-symbols-outlined text-2xl"
      style={{ fontVariationSettings: active ? "'FILL' 1" : "" }}
    >
      {icon}
    </span>
  </a>
);

const DrawerLink: React.FC<{
  icon: string;
  label: string;
  active?: boolean;
}> = ({ icon, label, active }) => (
  <a
    className={`flex items-center space-x-4 font-['Newsreader'] text-2xl lowercase italic transition-all ${
      active
        ? "text-[#FFB1C6] pl-4 border-l-2 border-[#FFB1C6]"
        : "text-[#D9C0C5] opacity-60 hover:pl-6"
    }`}
    href="#"
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span>{label}</span>
  </a>
);

export default ThePulseLanding;
