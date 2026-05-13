'use client';

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "AI Chatbot Platform (RAG-Based)",
    description:
      "Multi-tenant chatbot using RAG — OpenAI + Pinecone + Firecrawl.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI",
      "Pinecone",
      "Firecrawl",
    ],
    href: "https://thequickassist.co",
  },
  {
    title: "Real Estate CRM Platform",
    description:
      "Multi-role CRM for real estate agencies with real-time agent communication.",
    tech: ["Node.js", "Next.js", "PostgreSQL", "WebSockets", "Prisma ORM"],
    highlight: "30% improvement in agent response time",
  },
  {
    title: "E-commerce Auto Parts Store",
    description:
      "High-performance automotive e-commerce with SEO automation.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    href: "https://autoadsales.com",
  },
  {
    title: "Mango Chairs E-commerce",
    description:
      "Full-stack furniture store — led end-to-end delivery and CI/CD deployment.",
    tech: ["Node.js", "Express.js", "Next.js", "CI/CD Pipelines"],
    href: "https://mangochairs.com",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work across AI, SaaS, e-commerce, and operations
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-border bg-surface p-7 shadow-[0_16px_60px_rgba(2,6,23,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(26,86,219,0.18)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <span className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Featured
                </span>
              </div>

              <p className="mt-5 text-base leading-8 text-muted">
                {project.description}
              </p>

              {project.highlight ? (
                <p className="mt-4 text-sm font-medium text-accent">
                  {project.highlight}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-medium text-white transition group-hover:bg-[#1648b6]"
                  >
                    Live URL
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/80 px-5 py-3 text-sm font-medium text-muted">
                    <Lock size={16} />
                    Private Deployment
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
