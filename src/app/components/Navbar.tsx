"use client";
import { motion } from "framer-motion";

const Item = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="text-sm md:text-base text-zinc-300 hover:text-white transition">
    {label}
  </a>
);

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="backdrop-blur border border-white/10 bg-white/5 rounded-2xl px-6 py-3 flex items-center justify-between"
        >
          <a href="#home" className="font-bold tracking-tight text-white">Surakshith.dev</a>
          <div className="flex items-center gap-6">
            <Item href="#home" label="Home" />
            <Item href="#projects" label="Projects" />
            <Item href="#skills" label="Skills" />
            <Item href="#contact" label="Contact" />
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
