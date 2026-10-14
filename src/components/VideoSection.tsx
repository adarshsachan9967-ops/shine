"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Film, Sparkles } from "lucide-react";
import { useSiteConfig } from "@/context/ConfigContext";
import { sounds } from "@/utils/sound";

export default function VideoSection() {
  const config = useSiteConfig();
  const { quote, reels } = config.VIDEO_SECTION;
  const [activeIdx, setActiveIdx] = useState(0);
  const currentReel = reels[activeIdx] || reels[0];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPausedHover, setIsPausedHover] = useState(false);

  const isVideo = currentReel.url?.toLowerCase().endsWith(".mp4");

  // Continuous auto-advancing carousel (Instagram / WhatsApp story style)
  useEffect(() => {
    if (!isPlaying || isPausedHover) return;

    const intervalTime = 40; // 40ms tick
    const totalDuration = 3800; // 3.8s per slide
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % reels.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isPausedHover, reels.length, activeIdx]);

  // Reset progress bar on slide change
  useEffect(() => {
    setProgress(0);
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeIdx, isVideo]);

  const togglePlay = () => {
    sounds.playPop();
    if (isVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handlePrev = () => {
    sounds.playPop();
    setActiveIdx((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    sounds.playPop();
    setActiveIdx((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="cinema" className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 w-full max-w-7xl 2xl:max-w-[1550px] mx-auto overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFB3C1]/20 via-[#FFE3E8]/30 to-[#E8D7F1]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-8">
        <span className="font-handwriting text-2xl md:text-3xl text-[#E25875] font-semibold block mb-1">
          Sweet Moments in Continuous Motion 🎂💖
        </span>
        <h2 className="font-playfair-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D0C1A]">
          {config.NAME}'s Memory Showcase
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#8A4F60] font-light max-w-md mx-auto">
          Every smile, laugh, and radiant glance. Watch the continuous story reel or tap any card below!
        </p>
      </div>

      {/* Reel Switcher Pills */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap mb-8 max-w-5xl mx-auto">
        {reels.map((reel, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={reel.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 shadow-xs cursor-pointer ${
                isActive
                  ? "bg-[#E63956] text-white shadow-md shadow-[#E63956]/25 scale-105"
                  : "bg-white/80 hover:bg-white text-[#4A1525] border border-[#FFCAD4]/60"
              }`}
            >
              <Film className="w-3 h-3" />
              <span>{reel.title}</span>
            </button>
          );
        })}
      </div>

      {/* Centered Continuous Reel Frame Container */}
      <div className="flex justify-center items-center gap-4 sm:gap-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex p-3 rounded-full bg-white/80 hover:bg-white text-[#4A1525] shadow-lg border border-[#FFCAD4]/60 hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous photo"
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          onClick={togglePlay}
          onMouseEnter={() => setIsPausedHover(true)}
          onMouseLeave={() => setIsPausedHover(false)}
          className="relative w-full max-w-[320px] min-[390px]:max-w-[360px] sm:max-w-[400px] md:max-w-[430px] aspect-[9/16] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#FFCAD4] bg-black group cursor-pointer select-none"
        >
          {/* Top Story Segmented Progress Bar */}
          <div className="absolute top-2.5 left-3 right-3 z-30 flex items-center gap-1">
            {reels.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden backdrop-blur-xs"
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-75"
                  style={{
                    width:
                      i < activeIdx
                        ? "100%"
                        : i === activeIdx
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Ambient Blurred Backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentReel.poster || currentReel.url}
              alt=""
              className="w-full h-full object-cover blur-md opacity-35 scale-110"
            />
          </div>

          {/* Media Presentation: Video or High-Res Image with Cross-Fade */}
          <AnimatePresence mode="wait">
            {isVideo ? (
              <video
                ref={videoRef}
                key={currentReel.url}
                src={currentReel.url}
                poster={currentReel.poster}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain relative z-10"
              />
            ) : (
              <motion.div
                key={currentReel.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full z-10 flex items-center justify-center p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentReel.poster || currentReel.url}
                  alt={currentReel.title}
                  className="w-full h-full object-contain drop-shadow-lg rounded-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center Play/Pause Overlay indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 backdrop-blur-xs pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/40 border-2 border-white/70 flex items-center justify-center shadow-2xl backdrop-blur-md animate-pulse">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>
          )}

          {/* Top Pill Tag */}
          <div className="absolute top-6 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/95 text-xs border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#FFB3C1]" />
              {currentReel.tag} • {activeIdx + 1} of {reels.length}
            </span>
          </div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 z-10 pointer-events-none" />

          {/* Bottom Romantic Caption */}
          <div className="absolute bottom-16 left-4 right-4 z-20 text-center text-white pointer-events-none">
            <motion.div
              key={currentReel.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-playfair-luxury text-base sm:text-lg font-semibold text-white drop-shadow-md">
                {currentReel.subtitle}
              </h3>
              <p className="font-serif-luxury text-sm sm:text-base font-normal italic text-[#FFE5EC] mt-0.5 drop-shadow-md">
                “{quote}”
              </p>
              <span className="font-handwriting text-xl text-[#FFCAD4] mt-1 block">
                {config.NAME} 💖
              </span>
            </motion.div>
          </div>

          {/* Playback Controls Overlay */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/25 transition-all shadow-md hover:scale-105 cursor-pointer"
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            {isVideo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className={`p-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all shadow-md hover:scale-105 cursor-pointer ${
                  !isMuted ? "bg-[#E63956] text-white" : "bg-black/50 hover:bg-black/80 text-white"
                }`}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
          </div>

          {/* Mobile Next/Prev overlay buttons */}
          <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-2 right-2 z-30 flex justify-between pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="hidden sm:flex p-3 rounded-full bg-white/80 hover:bg-white text-[#4A1525] shadow-lg border border-[#FFCAD4]/60 hover:scale-110 transition-all cursor-pointer"
          aria-label="Next photo"
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* All Moments Showcase Grid / Strip */}
      <div className="mt-14 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-[#E25875] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> All {reels.length} Cherished Moments
          </span>
          <h3 className="font-playfair-luxury text-xl sm:text-2xl font-bold text-[#3D0C1A] mt-1">
            Tap Any Snapshot to Jump Directly
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {reels.map((reel, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.div
                key={reel.id}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => {
                  sounds.playPop();
                  setActiveIdx(idx);
                  setIsPlaying(true);
                  const playerEl = document.getElementById("cinema");
                  if (playerEl) {
                    playerEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 border-2 bg-black ${
                  isActive
                    ? "border-[#E63956] shadow-xl shadow-[#E63956]/25 ring-2 ring-[#E63956]/40 scale-102"
                    : "border-[#FFCAD4]/80 hover:border-[#E63956]/60 shadow-md hover:shadow-lg"
                }`}
              >
                {/* 9:16 Thumbnail Container */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#2A121A]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={reel.poster || reel.url}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                  {/* Top Badge */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white/90 font-medium border border-white/20">
                      #{idx + 1}
                    </span>
                    {isActive && (
                      <span className="px-2 py-0.5 rounded-full bg-[#E63956] text-white text-[10px] font-bold shadow-xs animate-pulse">
                        Active
                      </span>
                    )}
                  </div>

                  {/* Play/View Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
                        isActive
                          ? "bg-[#E63956] text-white scale-110"
                          : "bg-white/70 text-[#3D0C1A] group-hover:scale-110 group-hover:bg-white"
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-2 left-2 right-2 z-10 text-white">
                    <p className="font-playfair-luxury text-xs font-bold truncate drop-shadow-sm">
                      {reel.title}
                    </p>
                    <p className="text-[10px] text-[#FFCAD4] truncate font-light mt-0.5">
                      {reel.tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
