'use client';

import { motion, useInView } from "framer-motion";
import {
  BrainCircuit,
  Database,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Redis",
      "WebSockets",
    ],
  },
  {
    title: "AI / GenAI",
    icon: BrainCircuit,
    items: [
      "RAG Architecture",
      "OpenAI APIs",
      "Embeddings",
      "Pinecone",
      "Firecrawl",
      "Semantic Search",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "Git/GitHub",
      "CI/CD",
      "Postman",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Production-ready across product, platform, and AI layers
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Focused on shipping performant frontends, resilient APIs, and
            retrieval-powered systems with clean developer workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full rounded-[2rem] border border-border bg-surface p-7 shadow-[0_16px_60px_rgba(2,6,23,0.08)] backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap content-start gap-3 overflow-visible">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
