"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="home" className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-zinc-400">Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">Surakshith</span>
            </h1>
            <p className="mt-3 text-zinc-300 text-lg">
              <strong>Full-stack develope</strong>r passionate about building scalable, user-focused products and constantly learning new skills.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">Contact</a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://github.com/Surakshith94/" target="_blank"><Github className="h-4 w-4"/> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://www.linkedin.com/in/surakshith-acharya-294870329/" target="_blank"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSHxGwmVHtDFZwRQqdDzDXbRRrkVRvfPjvkpgQHVqFRwgzrwCpwSbGtgKFVFvFpdNHCSGxGd"><Mail className="h-4 w-4"/> Email</a>
            </div>
          </div>

          {/* Portrait + Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-8 rounded-full blur-3xl bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/20 to-transparent pointer-events-none"></div>
            <div className="rounded-[28px] p-[2px] bg-gradient-to-b from-white/20 to-white/5">
              <div className="bg-black/40 rounded-[26px] p-8 border border-white/10">
                <div className="relative mx-auto w-[320px] h-[320px] rounded-full overflow-hidden">
                  <Image src="/avatar.jpeg" alt="Portrait" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Selected work showing craft and curiosity.">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="PantryChef-AI"
            blurb="PantryChef AI is a smart, full-stack web application that transforms a user's leftover ingredients into unique, delicious recipes using the power of Google's Gemini AI. It's designed to reduce food waste and inspire creativity in the kitchen."
            tags={["Next.js", "Javascript", "Typescript", "Tailwind"]}
            live="https://pantry-chef-ai-two.vercel.app/"
            repo="https://github.com/Surakshith94/PantryChef-AI"
          />
          <ProjectCard
            title="EcoShop — Carbon-aware Storefront"
            blurb="Headless e-commerce with green hosting metrics and low-carbon image pipeline."
            tags={["Remix", "Edge", "Cloudflare"]}
            live="#"
            repo="#"
          />
          <ProjectCard
            title="Talky — AI Voice Notes"
            blurb="Transcribe, summarize and tag voice notes. On-device keyword spotting."
            tags={["Tauri", "Whisper", "SQLite"]}
            live="#"
            repo="#"
          />
          <ProjectCard
            title="Frames — Micro-interactions Kit"
            blurb="A tiny motion component library focusing on accessibility and progressive enhancement."
            tags={["Framer Motion", "A11y", "TypeScript"]}
            live="#"
            repo="#"
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="What I use to turn ideas into products.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 p-5 bg-white/[.04]">
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm text-zinc-400 mt-2">React, Next.js, Tailwind, Framer Motion, shadcn/ui</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/[.04]">
            <h3 className="font-semibold">Backend</h3>
            <p className="text-sm text-zinc-400 mt-2">Node, Express, tRPC, Prisma, PostgreSQL, Redis</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/[.04]">
            <h3 className="font-semibold">DevOps</h3>
            <p className="text-sm text-zinc-400 mt-2">Vercel, Docker, GitHub Actions, Cloudflare, AWS</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/[.04]">
            <h3 className="font-semibold">Quality</h3>
            <p className="text-sm text-zinc-400 mt-2">Lighthouse, Playwright, Vitest, A11y & performance budgets</p>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Let’s build something great together.">
        <div className="grid md:grid-cols-2 gap-8">
          <form action="https://formspree.io/f/xyzlglwy" method="POST"
                className="rounded-2xl border border-white/10 p-6 bg-white/[.04]">
            <label className="grid gap-2 text-sm">
              <span>Name</span>
              <input name="name" required className="border border-white/10 rounded-xl px-4 py-2 bg-black/40" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm mt-4">
              <span>Email</span>
              <input type="email" name="email" required className="border border-white/10 rounded-xl px-4 py-2 bg-black/40" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm mt-4">
              <span>Message</span>
              <textarea name="message" required rows={4} className="border border-white/10 rounded-xl px-4 py-2 bg-black/40" placeholder="Tell me about your project" />
            </label>
            <button className="mt-4 px-5 py-2.5 rounded-xl bg-white text-black hover:opacity-90">Send</button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/[.04]">
            <h3 className="font-semibold">Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>Based in Bengaluru • Open to remote</li>
              <li>Response time: under 24 hours</li>
              <li>Preferred stack: Mern Stack</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="py-10">
       <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-500 text-center">
        © {new Date().getFullYear()} Built by Surakshith. All rights reserved.
      </div>
      </footer>
    </>
  );
}
