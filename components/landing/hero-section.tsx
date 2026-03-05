"use client"

import { motion } from "framer-motion"
import { Play, ChevronDown } from "lucide-react"
import { MagneticButton } from "@/components/effects/magnetic-button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-pink/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5 text-xs font-medium tracking-wider text-neon-cyan uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
            Now Streaming
          </span>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl lg:text-8xl">
          {/* "THE FUTURE OF" - characters fade in one by one */}
          <span className="text-foreground inline-block">
            {"The Future of".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.06,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <br />
          {/* "ENTERTAINMENT" - drops down from height and bounces before landing */}
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            animate={{
              opacity: [0, 1, 1, 1, 1, 1],
              y: [-300, 0, -60, 0, -20, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 1.4,
              times: [0, 0.35, 0.55, 0.7, 0.85, 1],
              ease: [
                [0.22, 1, 0.36, 1],
                [0.22, 1, 0.36, 1],
                [0.22, 1, 0.36, 1],
                [0.22, 1, 0.36, 1],
                [0.22, 1, 0.36, 1],
              ],
            }}
            className="gradient-text inline-block"
          >
            Entertainment
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl"
        >
          Immerse yourself in a next-generation streaming experience. 
          Discover cinematic worlds, exclusive originals, and content that pushes the boundaries of digital media.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton strength={0.2}>
            <Link
              href="/auth"
              className="group flex items-center gap-2 rounded-xl bg-neon-cyan px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              Start Watching
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              href="/search"
              className="flex items-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan/5 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-neon-cyan/40 hover:bg-neon-cyan/10"
            >
              Explore Library
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50K+", label: "Titles" },
            { value: "4K", label: "Ultra HD" },
            { value: "12M", label: "Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold neon-text text-neon-cyan md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
