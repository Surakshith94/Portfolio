"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Section({
  id, title, subtitle, children
}: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .1 }}
            className="text-zinc-400 mt-3"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
