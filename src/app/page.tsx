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
      <Section
  id="projects"
  title="Projects"
  subtitle="Selected work showing craft and curiosity."
>
  <motion.div
    className="grid md:grid-cols-2 gap-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {/* ---- PROJECT CARD 1 ---- */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 45px rgba(139,92,246,0.25)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
    >
      <ProjectCard
        title="PantryChef-AI"
        blurb="PantryChef AI is a smart, full-stack web application that transforms a user's leftover ingredients into unique, delicious recipes using the power of Google's Gemini AI. It's designed to reduce food waste and inspire creativity in the kitchen."
        tags={["Next.js", "Javascript", "Typescript", "Tailwind"]}
        live="https://pantry-chef-ai-two.vercel.app/"
        repo="https://github.com/Surakshith94/PantryChef-AI"
      />
    </motion.div>

    {/* ---- PROJECT CARD 2 ---- */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 45px rgba(139,92,246,0.25)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
    >
      <ProjectCard
        title="EcoShop — Carbon-aware Storefront"
        blurb="Headless e-commerce with green hosting metrics and low-carbon image pipeline."
        tags={["Remix", "Edge", "Cloudflare"]}
        live="#"
        repo="#"
      />
    </motion.div>

    {/* ---- PROJECT CARD 3 ---- */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 45px rgba(139,92,246,0.25)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
    >
      <ProjectCard
        title="Talky — AI Voice Notes"
        blurb="Transcribe, summarize and tag voice notes. On-device keyword spotting."
        tags={["Tauri", "Whisper", "SQLite"]}
        live="#"
        repo="#"
      />
    </motion.div>

    {/* ---- PROJECT CARD 4 ---- */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 45px rgba(139,92,246,0.25)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
    >
      <ProjectCard
        title="Frames — Micro-interactions Kit"
        blurb="A tiny motion component library focusing on accessibility and progressive enhancement."
        tags={["Framer Motion", "A11y", "TypeScript"]}
        live="#"
        repo="#"
      />
    </motion.div>
  </motion.div>
</Section>


      {/* SKILLS */}
{/* SKILLS */}
<Section
  id="skills"
  title="Skills"
  subtitle="What I use to turn ideas into products."
>
  <motion.div
    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {[
      {
        h: "Frontend",
        p: "React, Next.js, Tailwind, Framer Motion, shadcn/ui",
      },
      {
        h: "Backend",
        p: "Node, Express, tRPC, Prisma, PostgreSQL, Redis",
      },
      {
        h: "DevOps",
        p: "Vercel, Docker, GitHub Actions, Cloudflare, AWS",
      },
      {
        h: "Quality",
        p: "Lighthouse, Playwright, Vitest, A11y & performance budgets",
      },
    ].map((skill, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 25 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{
          y: -6,
          scale: 1.03,
          boxShadow: "0px 0px 30px 0px rgba(139,92,246,0.25)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 14 }}
        className="rounded-2xl border border-white/10 p-5 bg-white/[.04] backdrop-blur-xl cursor-default"
      >
        <h3 className="font-semibold text-lg">{skill.h}</h3>
        <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
          {skill.p}
        </p>
      </motion.div>
    ))}
  </motion.div>
</Section>


      {/* CONTACT */}
      {/* CONTACT */}
<Section
  id="contact"
  title="Contact"
  subtitle="Let’s build something great together."
>
  <div className="grid md:grid-cols-2 gap-8">
    
    {/* CONTACT FORM */}
    <motion.form
      action="https://formspree.io/f/xyzlglwy"
      method="POST"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 p-6 bg-white/[.04] backdrop-blur-xl"
    >
      {[
        { label: "Name", type: "text", name: "name", placeholder: "Your name" },
        {
          label: "Email",
          type: "email",
          name: "email",
          placeholder: "you@example.com",
        },
      ].map((field, i) => (
        <motion.label
          key={i}
          className="grid gap-2 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
        >
          <span>{field.label}</span>
          <motion.input
            whileFocus={{
              borderColor: "rgba(139,92,246,1)",
              boxShadow: "0px 0px 12px rgba(139,92,246,0.25)",
            }}
            type={field.type}
            name={field.name}
            required
            className="border border-white/10 rounded-xl px-4 py-2 bg-black/40 outline-none transition-all"
            placeholder={field.placeholder}
          />
        </motion.label>
      ))}

      {/* MESSAGE */}
      <motion.label
        className="grid gap-2 text-sm mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span>Message</span>
        <motion.textarea
          whileFocus={{
            borderColor: "rgba(139,92,246,1)",
            boxShadow: "0px 0px 12px rgba(139,92,246,0.25)",
          }}
          name="message"
          required
          rows={4}
          className="border border-white/10 rounded-xl px-4 py-2 bg-black/40 outline-none transition-all"
          placeholder="Tell me about your project"
        />
      </motion.label>

      {/* BUTTON */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        className="mt-6 px-5 py-2.5 rounded-xl bg-white text-black font-medium"
      >
        Send
      </motion.button>
    </motion.form>

    {/* DETAILS CARD */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 p-6 bg-white/[.04] backdrop-blur-xl"
    >
      <h3 className="font-semibold text-lg">Details</h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-400">
        <li>Based in Bengaluru • Open to remote</li>
        <li>Response time: under 24 hours</li>
        <li>Preferred stack: MERN Stack</li>
      </ul>
    </motion.div>
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
