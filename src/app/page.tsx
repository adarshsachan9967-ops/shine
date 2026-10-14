"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Music, Music2, Send, Star, Flower2, Coffee, Sun } from "lucide-react";
import confetti from "canvas-confetti";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import { sounds } from "@/utils/sound";

const SWEET_THOUGHTS = [
  "Your kindness has an effortless way of making every day feel so much softer and warmer. 🌸",
  "You have that rare, genuine sweetness that makes anyone around you feel immediately at peace. ✨",
  "No reason or birthday needed—your pure, gentle soul is reason enough to celebrate every day. 💖",
  "Your smile carries a quiet melody that brightens the entire room without trying. 🌷",
  "In a busy, noisy world, your soft words and caring heart are like a breath of fresh morning air. 🍃",
  "Your patience, understanding, and warm heart make you one of the most precious people ever. 🍯",
  "Just a little reminder that you are deeply appreciated for simply being the sweet soul you are. ☕",
  "The universe feels gentler and happier knowing someone as sweet as you is in it. 🌟",
];

const TEASER_CARDS = [
  {
    icon: Flower2,
    tag: "Quiet Notes",
    title: "Handwritten Whispers",
    description:
      "Sweet letters and heartfelt thoughts penned just to remind you how special you are.",
    gradient: "from-[#FFB3C1]/30 to-[#FFE5EC]/60",
    border: "border-[#FFCAD4]/60",
  },
  {
    icon: Music2,
    tag: "Soft Harmonies",
    title: "A Gentle Soundtrack",
    description:
      "Melodies as soothing and comforting as your warmth on a quiet, peaceful evening.",
    gradient: "from-[#FFE5D9]/40 to-[#FFF0F3]/60",
    border: "border-[#FFD1DC]/60",
  },
  {
    icon: Sun,
    tag: "Warm Memories",
    title: "Sweet Keepsakes",
    description:
      "A quiet corner capturing the sweetest smiles, innocent moments, and gentle laughs.",
    gradient: "from-[#FDE2E4]/40 to-[#E8D7F1]/30",
    border: "border-[#E8D7F1]/60",
  },
  {
    icon: Star,
    tag: "Hidden Starlight",
    title: "Midnight Wishes",
    description:
      "Secret star wishes tucked away in constellations, carrying nothing but peace for you.",
    gradient: "from-[#E8D7F1]/30 to-[#FFE5EC]/50",
    border: "border-[#FFCAD4]/60",
  },
];

export default function Home() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [sweetCount, setSweetCount] = useState(128);
  const [hasSentLove, setHasSentLove] = useState(false);

  // Soft sparkle celebration on load
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.55 },
        colors: ["#FF758F", "#FFB3C1", "#FFD166", "#E8D7F1"],
      });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleAudio = () => {
    const isMuted = sounds.toggleMute();
    setIsPlayingAudio(!isMuted);
  };

  const handleNextThought = () => {
    sounds.playHeartChime();
    setThoughtIndex((prev) => (prev + 1) % SWEET_THOUGHTS.length);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#FF758F", "#FFB3C1", "#FFD1DC"],
    });
  };

  const handleSendWarmth = () => {
    sounds.playPop();
    setSweetCount((prev) => prev + 1);
    setHasSentLove(true);
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.75 },
      colors: ["#FF758F", "#FFB3C1", "#E25875", "#FFD166"],
    });
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FFFDFB] via-[#FFF5F7] to-[#FFF0F3] text-[#2A121A] selection:bg-[#FFB3C1] selection:text-[#3D0C1A] overflow-x-hidden">
      {/* 1. Custom Sweet Heart Cursor */}
      <CustomCursor />

      {/* 2. Floating Hearts & Sparkles Ambient Canvas */}
      <ParticleBackground />

      {/* 3. Ambient Glowing Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gradient-to-tr from-[#FFB3C1]/25 via-[#FFE3E8]/35 to-[#E8D7F1]/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFE5D9]/30 rounded-full blur-[110px]" />
        <div className="absolute top-2/3 left-10 w-[350px] h-[350px] bg-[#FFCAD4]/20 rounded-full blur-[100px]" />
      </div>

      {/* 4. Minimalist Luxury Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-4">
        <nav className="glass-nav px-5 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center justify-between gap-6 w-full max-w-4xl border border-[#FFCAD4]/50 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFCAD4] via-[#FFE5EC] to-[#FFF0F3] border border-[#FF758F]/40 flex items-center justify-center shadow-xs">
              <span className="text-base select-none">🌸</span>
            </div>
            <span className="font-serif-luxury text-lg sm:text-xl font-bold bg-gradient-to-r from-[#4A1525] via-[#8A2846] to-[#E63956] bg-clip-text text-transparent">
              A Sweet Little Secret
            </span>
          </div>

          <button
            onClick={handleToggleAudio}
            className="px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-[#FFE3E8] text-[#4A1525] text-xs font-medium flex items-center gap-2 border border-[#FF8DA1]/30 transition-all duration-300 shadow-xs cursor-pointer group"
            title="Toggle gentle background melody"
            aria-label="Toggle gentle background melody"
          >
            {isPlayingAudio ? (
              <>
                <Music2 className="w-3.5 h-3.5 text-[#E25875] animate-bounce" />
                <span className="hidden sm:inline font-medium">Playing Melody</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-[#8A4F60] group-hover:text-[#E25875]" />
                <span className="hidden sm:inline font-medium">Soft Music</span>
              </>
            )}
          </button>
        </nav>
      </header>

      {/* 5. Hero Coming Soon Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 sm:pt-36 pb-20 px-4 sm:px-6 text-center z-10 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F3] border border-[#FFCAD4]/70 text-[#8A3B4D] mb-6 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D6D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63956]" />
          </span>
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Coming Soon • A Little Secret In The Making ✨
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-playfair-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#3D0C1A] leading-[1.12] mb-6"
        >
          Something as sweet as you{" "}
          <span className="block mt-2 font-serif-luxury italic bg-gradient-to-r from-[#E25875] via-[#FF758F] to-[#C77DFF] bg-clip-text text-transparent">
            is blossoming here. 🌸✨
          </span>
        </motion.h1>

        {/* Poetic Narrative - Sweet person / Not her birthday */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-4 mb-10 px-2"
        >
          <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#5A2030] font-normal leading-relaxed italic">
            “No special occasion needed, and no, it’s not your birthday today—this is simply because you are one of the sweetest, kindest, and gentlest souls in this world.”
          </p>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#8A4F60] font-light leading-relaxed max-w-2xl mx-auto">
            Some people make the universe softer just by being themselves. Your quiet warmth, genuine kindness, and sweet nature deserve a little digital sanctuary of their own. We are carefully crafting something pure and beautiful for you... stay tuned. 🌷
          </p>
        </motion.div>

        {/* Interactive "Tap for Sweet Thoughts" Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-xl mx-auto mb-14"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#FFCAD4]/70 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#FFB3C1]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#FF758F]" />
              <span className="text-xs font-semibold tracking-widest text-[#9E3D52] uppercase">
                A Little Reminder For You
              </span>
              <Sparkles className="w-4 h-4 text-[#FF758F]" />
            </div>

            <div className="min-h-[90px] flex items-center justify-center py-2 px-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={thoughtIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="font-handwriting text-2xl sm:text-3xl text-[#4A1525] font-semibold leading-snug"
                >
                  “{SWEET_THOUGHTS[thoughtIndex]}”
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 pt-4 border-t border-[#FFCAD4]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#8A4F60] font-light">
                Thought {thoughtIndex + 1} of {SWEET_THOUGHTS.length}
              </span>
              <button
                onClick={handleNextThought}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FF758F] to-[#E25875] text-white text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Next Sweet Thought ✨</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Teaser Feature Cards Grid */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="font-handwriting text-xl sm:text-2xl text-[#E25875] font-semibold block mb-1">
              What’s being woven together
            </span>
            <h2 className="font-playfair-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0C1A]">
              Glimpses of what is coming soon
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
            {TEASER_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`glass-card rounded-2xl p-6 border ${card.border} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br ${card.gradient}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FFCAD4]/60 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#E25875]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E3D52] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#FFCAD4]/40">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-playfair-luxury text-xl font-bold text-[#3D0C1A] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A2030]/80 font-light leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive "Send Sweet Warmth" Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <button
            onClick={handleSendWarmth}
            className="group px-8 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#3D0C1A] font-medium text-sm sm:text-base border border-[#FFCAD4] shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 cursor-pointer active:scale-95"
          >
            <Heart className="w-4 h-4 text-[#FF4D6D] fill-[#FF758F] group-hover:scale-125 transition-transform" />
            <span className="font-medium">Send Warmth & Smiles 🌸</span>
            <span className="text-xs bg-[#FFF0F3] text-[#8A3B4D] px-2.5 py-0.5 rounded-full font-semibold border border-[#FFCAD4]/50">
              {sweetCount}
            </span>
          </button>
          <p className="text-xs text-[#8A4F60] font-light">
            {hasSentLove
              ? "Sweet warmth sent straight into this little universe! 💖"
              : "Tap to leave a sprinkle of warm love for the sweetest person"}
          </p>
        </motion.div>
      </section>

      {/* 6. Footer */}
      <footer className="relative z-10 py-10 px-4 border-t border-[#FFCAD4]/40 text-center">
        <p className="font-handwriting text-xl sm:text-2xl text-[#5A2030] font-medium mb-1">
          Made with pure fondness for the sweetest soul ✨
        </p>
        <p className="text-xs text-[#8A4F60] font-light">
          Something magical will unfold here soon. Keep smiling! 🌸
        </p>
      </footer>
    </main>
  );
}
