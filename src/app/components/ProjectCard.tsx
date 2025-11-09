"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({
  title, blurb, tags, live, repo
}: { title: string; blurb: string; tags: string[]; live?: string; repo?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .4 }}
      className="rounded-2xl border border-white/10 bg-white/[.04] hover:bg-white/[.06] transition p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          {repo && (
            <a href={repo} target="_blank" className="p-2 rounded-xl hover:bg-white/10" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" className="p-2 rounded-xl hover:bg-white/10" aria-label="Live">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-400 mt-2">{blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
