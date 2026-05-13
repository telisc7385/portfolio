"use client";

import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Node.js Backend Developer",
    company: "Prominno Labs Pvt. Ltd.",
    duration: "Oct 2025–Present",
    points: [
      "Building TheQuickAssist — a live SaaS platform (100+ businesses) combining a RAG-based AI chatbot builder and WhatsApp CRM",
      "Integrated OpenAI APIs and Pinecone Vector DB for semantic search across multi-tenant knowledge bases",
      "Built Meta Business API integration for WhatsApp messaging, bulk campaign management, unified inbox, and workflow automation",
      "Implemented Firecrawl-based ingestion pipelines (crawl → chunk → embed → index) for automated knowledge base building",
      "Designed secure multi-tenant APIs for workspaces, chatbot owners, permissions, and isolated data environments",
    ],
  },
  {
    role: "Software Engineer",
    company: "Consociate Solutions Pvt. Ltd.",
    duration: "Jan 2024–Aug 2025",
    points: [
      "4+ full-stack production apps with Next.js, TypeScript, Prisma ORM, PostgreSQL",
      "~20% reduction in API response time through query optimisation",
      "Next.js SSR features, code splitting, lazy loading for performance",
      "Led code reviews, mentored juniors, managed CI/CD deployments",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building APIs, multi-tenant systems, and production-grade platforms
          </h2>
        </div>

        <div className="relative mt-12 space-y-8 border-l border-accent/30 pl-8 sm:pl-12">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -28 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative rounded-[2rem] border border-border bg-surface p-7 shadow-[0_16px_60px_rgba(2,6,23,0.08)] backdrop-blur"
            >
              <div className="absolute -left-[3.25rem] top-8 flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/30 bg-background text-accent shadow-lg sm:-left-[3.75rem]">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-base text-accent">
                    {experience.company}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-background/70 px-3.5 py-2 text-sm text-muted">
                  {experience.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted sm:text-base">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
