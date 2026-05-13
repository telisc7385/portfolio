"use client";

import { motion, useInView } from "framer-motion";
import { AtSign, Link2, Mail } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] border border-border bg-surface p-8 text-center shadow-[0_20px_80px_rgba(2,6,23,0.1)] backdrop-blur sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Open to full-time backend and full-stack engineering opportunities,
            especially products involving scalable systems, AI tooling, and
            strong developer experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:telisuchit7385@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1648b6]"
            >
              <Mail size={17} />
              telisuchit7385@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/suchit-teli-221046260"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              <Link2 size={17} />
              LinkedIn
            </a>
          </div>

          <form
            action="mailto:telisuchit7385@gmail.com"
            method="POST"
            encType="text/plain"
            className="mt-10 grid gap-4 text-left"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-muted">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-muted">
              Message
              <textarea
                name="message"
                rows={6}
                required
                className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1648b6]"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted sm:flex-row">
          <span>© 2026 Suchit Teli ·</span>
          <a
            href="mailto:telisuchit7385@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-accent"
          >
            <AtSign size={15} />
            telisuchit7385@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/suchit-teli-221046260"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-accent"
          >
            <Link2 size={15} />
            LinkedIn
          </a>
        </footer>
      </motion.div>
    </section>
  );
}
