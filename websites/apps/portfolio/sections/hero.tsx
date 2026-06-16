"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Palette, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Aurora gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating glass cards */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] hidden lg:block"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
          <Palette className="h-6 w-6 text-purple-400" />
          <div className="mt-2 text-xs text-white/60">UI/UX Design</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[8%] hidden lg:block"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
          <Code2 className="h-6 w-6 text-indigo-400" />
          <div className="mt-2 text-xs text-white/60">Full Stack</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] left-[15%] hidden lg:block"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
          <Zap className="h-6 w-6 text-fuchsia-400" />
          <div className="mt-2 text-xs text-white/60">Performance</div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            Available for freelance projects
          </motion.div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-white">Rahul</span>
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Badam
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Principal Software Engineer crafting premium digital experiences.
            Specialized in React, Next.js, and modern frontend architecture.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
            >
              View Work
            </a>
          </div>

          {/* Stats pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {[
              { n: "50+", l: "Projects" },
              { n: "10+", l: "Years" },
              { n: "99%", l: "Satisfaction" },
              { n: "25+", l: "Tech Stack" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-full border border-white/5 bg-white/[0.03] px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-lg font-bold text-white">{s.n}</span>
                <span className="ml-2 text-sm text-zinc-500">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-purple-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}