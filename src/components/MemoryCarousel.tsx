"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, LayoutGrid, SlidersHorizontal, Sparkles } from "lucide-react";
import { MemoryItem } from "@/data/config";
import { useSiteConfig } from "@/context/ConfigContext";
import MemoryLightbox from "./MemoryLightbox";

const TAPE_COLORS = ["#FFCAD4", "#FFE5D9", "#D8E2DC", "#ECE4DB", "#FAD2E1", "#E2ECE9"];

function MemoryCard({
  item,
  idx,
  onClick,
}: {
  item: MemoryItem;
  idx: number;
  onClick: () => void;
}) {
  const [src, setSrc] = useState(item.src);
  const tapeColor = TAPE_COLORS[idx % TAPE_COLORS.length];

  const handleError = () => {
    if (src.includes(".jpg")) {
      setSrc(item.src.replace(".jpg", ".jpeg"));
    } else if (src.includes(".jpeg")) {
      setSrc(item.src.replace(".jpeg", ".jpg"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6, rotate: 0, scale: 1.03, zIndex: 30 }}
      transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
      onClick={onClick}
      className="cursor-pointer select-none"
      style={{ transform: `rotate(${item.rotation || (idx % 2 === 0 ? -1.5 : 1.5)}deg)` }}
      data-cursor="image"
    >
      <div className="group relative bg-white p-2 sm:p-3 pb-3 sm:pb-5 rounded-xl sm:rounded-2xl polaroid-shadow hover:polaroid-shadow-hover transition-all duration-300 border border-[#F3E8EE] h-full flex flex-col justify-between">
        {/* Cute Washi Tape on Top */}
        <div
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 sm:w-18 h-4 sm:h-5 rounded-xs shadow-xs pointer-events-none opacity-85 border border-black/5 z-20"
          style={{
            backgroundColor: tapeColor,
            transform: `translateX(-50%) rotate(${(idx % 3 - 1) * 2}deg)`,
          }}
        />

        {/* Photo Box */}
        <div className="relative aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-[#FFF5F7] mb-2 sm:mb-2.5">
          {/* Ambient blur backdrop */}
          <Image
            src={src}
            alt=""
            fill
            unoptimized
            onError={handleError}
            className="object-cover blur-xs opacity-25 scale-110 pointer-events-none"
            sizes="(max-width: 640px) 160px, 240px"
          />
          {/* Unclipped full photo */}
          <Image
            src={src}
            alt={item.alt}
            fill
            unoptimized
            onError={handleError}
            className="object-contain p-1 group-hover:scale-105 transition-transform duration-300 relative z-10"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#4A1525] text-[11px] font-semibold shadow-md flex items-center gap-1">
              <Eye className="w-3 h-3" /> View
            </span>
          </div>
        </div>

        {/* Caption & Date */}
        <div className="text-center px-1">
          <p className="font-handwriting text-sm sm:text-base md:text-lg text-[#3D0C1A] font-semibold truncate leading-tight">
            {item.caption}
          </p>
          <span className="text-[9px] sm:text-[10px] text-[#8A4F60] font-medium tracking-wider uppercase block mt-0.5">
            {item.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MemoryCarousel() {
  const config = useSiteConfig();
  const allMemories = config.MEMORIES;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { label: `All Memories (${allMemories.length}) 🎂`, value: "all" },
    { label: "Smiles 🌸", value: "smiles" },
    { label: "Favorites ✨", value: "favorites" },
    { label: "Special Moments 💖", value: "moments" },
    { label: "Quiet Places ☕", value: "places" },
  ];

  const filteredMemories =
    selectedCategory === "all"
      ? allMemories
      : allMemories.filter((m) => m.category === selectedCategory);

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + filteredMemories.length) % filteredMemories.length);
    }
  };

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % filteredMemories.length);
    }
  };

  const scrollHoriz = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="memories" className="relative py-24 md:py-36 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#FFFDFB]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FFE5EC]/30 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-2xl md:text-3xl text-[#E25875] font-semibold block mb-2"
        >
          All Cherished Photographs
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D0C1A]"
        >
          Little moments.{" "}
          <span className="italic text-[#FF758F] font-serif-luxury block sm:inline">
            Big memories. ❤️
          </span>
        </motion.h2>
        <p className="mt-3 text-sm md:text-base text-[#8A4F60] font-light max-w-lg mx-auto">
          Explore all {allMemories.length} photos of Birthday Girl {config.NAME} 🎂💖. Tap any polaroid snapshot to enlarge in full screen!
        </p>

        {/* Controls Bar: Category Filters & Grid/Carousel Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 max-w-5xl mx-auto px-2">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#E25875] text-white shadow-md scale-105"
                    : "bg-white/80 hover:bg-white text-[#5A2030] border border-[#FFCAD4]/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Grid vs Carousel */}
          <div className="flex items-center bg-white/90 border border-[#FFCAD4] rounded-full p-1 shadow-xs">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-[#E25875] text-white shadow-xs"
                  : "text-[#5A2030] hover:text-[#E25875]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All 64 Grid</span>
            </button>
            <button
              onClick={() => setViewMode("carousel")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                viewMode === "carousel"
                  ? "bg-[#E25875] text-white shadow-xs"
                  : "text-[#5A2030] hover:text-[#E25875]"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Carousel</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: ALL 64 PHOTOS RESPONSIVE GRID */}
      {viewMode === "grid" && (
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 lg:gap-6 py-4">
            {filteredMemories.map((item, idx) => (
              <MemoryCard
                key={item.id}
                item={item}
                idx={idx}
                onClick={() => setActiveIdx(idx)}
              />
            ))}
          </div>

          {/* Bottom count badge */}
          <div className="text-center mt-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-[#FFCAD4] text-xs sm:text-sm font-medium text-[#4A1525] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#E25875]" />
              Showing all {filteredMemories.length} cherished memories of {config.NAME} 🎂💖
            </span>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: HORIZONTAL CAROUSEL */}
      {viewMode === "carousel" && (
        <div className="w-full">
          {/* Navigation Arrows */}
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto flex items-center justify-end gap-3 mb-6 px-4 sm:px-8">
            <button
              onClick={() => scrollHoriz("left")}
              className="p-3 rounded-full bg-white/90 hover:bg-white border border-[#FFCAD4] text-[#4A1525] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollHoriz("right")}
              className="p-3 rounded-full bg-white/90 hover:bg-white border border-[#FFCAD4] text-[#4A1525] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto py-6 px-4 sm:px-8 snap-x snap-mandatory no-scrollbar w-full"
          >
            {filteredMemories.map((item, idx) => (
              <div key={item.id} className="flex-shrink-0 snap-center w-[230px] min-[390px]:w-[260px] sm:w-[300px]">
                <MemoryCard
                  item={item}
                  idx={idx}
                  onClick={() => setActiveIdx(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <MemoryLightbox
        item={activeIdx !== null ? filteredMemories[activeIdx] : null}
        onClose={() => setActiveIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
