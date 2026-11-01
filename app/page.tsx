"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  MicVocal,
} from "lucide-react";

import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { TerminalWindow } from "@/components/terminal-window";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const reveal = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const mediumPosts = [
  { title: "I Stopped Writing Controllers. Now I Write Specs - and an AI Agent Builds the API.", date: "Aug 2026", topic: "Spec-driven development", href: "https://medium.com/@ahraval11/i-stopped-writing-controllers-now-i-write-specs-and-an-ai-agent-builds-the-api-b0b1c8996bfc" },
  { title: "The Prompt Frameworks That Will 10x Your AI Results (With Real Examples)", date: "May 2026", topic: "Prompt engineering", href: "https://medium.com/@ahraval11/the-prompt-frameworks-that-will-10x-your-ai-results-with-real-examples-db940fbf89aa" },
  { title: "JWT Authentication & RBAC in Spring Boot - A Clean Architecture with Real Request Flow", date: "Dec 2025", topic: "Backend security", href: "https://medium.com/@ahraval11/jwt-authentication-rbac-in-spring-boot-a-clean-architecture-with-real-request-flow-88adfb3aa846" },
  { title: "Master JUnit Testing in Spring Boot: Parameterized Tests, JSONAssert & Logs", date: "Aug 2025", topic: "Testing", href: "https://medium.com/@ahraval11/master-junit-testing-in-spring-boot-parameterized-tests-jsonassert-logs-81bbd9c11cef" },
  { title: "The Only Spring Boot CRUD REST API Guide You'll Ever Need", date: "Aug 2025", topic: "REST APIs", href: "https://medium.com/@ahraval11/the-only-spring-boot-crud-rest-api-guide-youll-ever-need-with-dao-dto-mapper-h2-database-a8a471a2291d" },
];

const certifications = [
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft Learn", image: "/images/az-204.svg", href: "https://learn.microsoft.com/api/credentials/share/en-us/AneriRaval-8360/E3B79415D02E3E41?sharingId=9DA31BB50D81026C" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft Learn", image: "/images/az-900.svg", href: "https://learn.microsoft.com/api/credentials/share/en-us/AneriRaval-8360/2B3EC1AE91905C13?sharingId=9DA31BB50D81026C" },
  { name: "GitHub Actions", issuer: "Microsoft Learn", image: "/images/gh-200.svg", href: "https://learn.microsoft.com/api/credentials/share/en-us/AneriRaval-8360/276FBED86A66778A?sharingId=9DA31BB50D81026C" },
  { name: "GitHub Certified: Agentic AI Developer", issuer: "Microsoft Learn", image: "/images/gh-600.svg", href: "https://learn.microsoft.com/api/credentials/share/en-us/AneriRaval-8360/2BB650E18FD9AE10?sharingId=9DA31BB50D81026C" },
  { name: "Claude Certified Associate - Foundations", issuer: "Credly", image: "/images/ccaof.png", href: "https://www.credly.com/badges/2e40a7f9-2e60-4d92-b815-79af50426328/linked_in_profile" },
  { name: "Claude Certified Developer - Foundations", issuer: "Credly", image: "/images/ccdvf.png", href: "https://www.credly.com/badges/f9252412-419c-4b3e-a764-c67764f78903/linked_in_profile" },
];

export default function Home() {
  return (
    <div id="top" className="page-shell text-zinc-100">
      <SiteHeader />

      <main>
        <section
          id="work"
          className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <motion.div {...reveal} className="min-w-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sky-300/80 sm:text-[0.7rem] sm:tracking-[0.34em]">
                {profile.positioning}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-50 min-[360px]:text-5xl sm:text-6xl sm:tracking-[-0.07em] lg:text-7xl">
                {profile.name.toUpperCase()}
              </h1>
              <p className="mt-4 text-base font-medium uppercase tracking-[0.12em] text-zinc-300 sm:text-xl sm:tracking-[0.18em]">
                {profile.title}
              </p>
              <p className="mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
                &ldquo;{profile.heroStatement}&rdquo;
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Applied AI · GenAI integration · Backend engineering · Machine learning · Research
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#systems" className="inline-flex w-full items-center justify-center gap-2 border border-sky-400/40 bg-sky-400/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15 sm:w-auto sm:px-5 sm:tracking-[0.2em]">
                  View pinned work <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/Aneri_Raval_Resume.pdf" download="aneri_raval_resume.pdf" className="inline-flex w-full items-center justify-center gap-2 border border-sky-400/40 bg-sky-400/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15 sm:w-auto sm:px-5 sm:tracking-[0.2em]">
                  <Download className="h-4 w-4" /> Download resume
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-white/20 sm:w-auto sm:px-5 sm:tracking-[0.2em]">
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
                <a href={profile.medium} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-white/20 sm:w-auto sm:px-5 sm:tracking-[0.2em]">
                  <BookOpen className="h-4 w-4" /> Read on Medium
                </a>
              </div>
            </motion.div>
            <motion.div {...reveal} className="min-w-0 lg:justify-self-end">
              <TerminalWindow />
            </motion.div>
          </div>
        </section>

        <motion.section id="about" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="01 - Engineering profile" title="Turning AI exploration into practical software." />
          <div className="profile-pill-group mt-8 flex flex-wrap gap-3 text-sm font-medium">
            {["AI", "MACHINE LEARNING", "GENAI", "BACKEND", "RESEARCH"].map((label) => (
              <span key={label} className="profile-pill rounded-full border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] sm:text-[0.68rem] sm:tracking-[0.22em]">{label}</span>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="profile-copy space-y-5 text-lg leading-8">
              <p>{profile.engineerSummary}</p>
              <p>Alongside product work, I write about AI architectures, API integration, and practical deployment strategies for developers building reliable, high-performance services.</p>
            </div>
            <div className="profile-panel rounded border p-5 sm:p-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sky-300/80 sm:text-[0.7rem] sm:tracking-[0.28em]">Engineering lens</p>
              <ul className="mt-5 space-y-4 text-sm leading-6">
                <li><span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Applied AI</span><p className="mt-1">Integrating GenAI models into web and mobile applications.</p></li>
                <li><span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Backend</span><p className="mt-1">APIs, authentication, service integration, and scalable application design.</p></li>
                <li><span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Research</span><p className="mt-1">Machine learning, data analysis, remote sensing, and computer vision explorations.</p></li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="02 - Experience" title="Applied AI and software-engineering work." />
          <div className="mt-10 space-y-8">{experience.map((item) => <ExperienceCard key={item.company} item={item} />)}</div>
        </motion.section>

        <motion.section id="systems" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="03 - Selected projects" title="Applied AI and machine-learning work from GitHub." />
          <div className="mt-10 space-y-6">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </motion.section>

        <motion.section id="stack" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="04 - Technical stack" title="Tools and topics represented across the work." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="min-w-0 rounded border border-white/10 bg-zinc-950/40 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-sky-300/80 sm:tracking-[0.24em]">{group.title}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-zinc-200 sm:tracking-[0.12em]">{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="writing" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="05 - Technical writing" title="Ideas, patterns, and practical engineering notes." />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {mediumPosts.map((post, index) => (
              <a key={post.href} href={post.href} target="_blank" rel="noreferrer" className={"group rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40 hover:bg-zinc-950/70 " + (index === 0 ? "lg:col-span-2 sm:p-8" : "")}>
                <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sky-300/80"><span>{index === 0 ? "Latest article" : post.topic}</span><span className="text-zinc-500">{post.date}</span></div>
                <h3 className={"mt-4 font-semibold tracking-[-0.03em] text-zinc-50 transition-colors group-hover:text-sky-200 " + (index === 0 ? "max-w-4xl text-2xl sm:text-3xl" : "text-lg sm:text-xl")}>{post.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 group-hover:text-sky-300">Read article <ExternalLink className="h-3.5 w-3.5" /></span>
              </a>
            ))}
          </div>
          <a href={profile.medium} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-sky-300 hover:text-sky-200">View all articles on Medium <ExternalLink className="h-3.5 w-3.5" /></a>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="06 - Talks / community" title="Sharing the work beyond the codebase." />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <a href="https://www.youtube.com/watch?si=E3nmSZkuPS4TEYmk&v=4E0MfvIZvWs&feature=youtu.be" target="_blank" rel="noreferrer" className="group rounded border border-sky-400/30 bg-sky-400/[0.06] p-6 transition-colors hover:border-sky-300/60 hover:bg-sky-400/[0.1] sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sky-300">Featured video</p><h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-3xl">Watch the YouTube session</h3><p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">A recorded session for developers exploring modern AI and software engineering.</p><span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-sky-200">Open on YouTube <ExternalLink className="h-3.5 w-3.5" /></span>
            </a>
            <div className="grid gap-5">
              <a href={profile.sessionize} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><MicVocal className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-zinc-500">Sessionize</p><h3 className="mt-2 text-lg font-semibold text-zinc-50">Speaker profile</h3></a>
              <a href={profile.medium} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><BookOpen className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-zinc-500">Medium</p><h3 className="mt-2 text-lg font-semibold text-zinc-50">Technical writing</h3></a>
            </div>
          </div>
        </motion.section>

        <motion.section id="research" {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="07 - Research direction" title="Adaptive memory for LLM-based AI agents." />
          <div className="mt-10 rounded border border-white/10 bg-zinc-950/40 p-6 sm:p-8">
            <p className="max-w-4xl text-base leading-7 text-zinc-300">I am interested in the memory layer of AI agents: helping them retain useful experience, learn over long-term interactions, and adapt beyond a single context window. The focus is on adaptive memory rather than static storage alone.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5"><p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-300/80">Memory types</p><p className="mt-3 text-sm leading-6 text-zinc-300">Episodic experiences, semantic knowledge, and procedural task memory.</p></div>
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5"><p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-300/80">Memory lifecycle</p><p className="mt-3 text-sm leading-6 text-zinc-300">What to retain, retrieve, revise, and selectively forget.</p></div>
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5"><p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-300/80">Reliable agents</p><p className="mt-3 text-sm leading-6 text-zinc-300">Continual learning, efficient retrieval, evaluation, privacy, and security.</p></div>
            </div>
            <p className="mt-8 border-l-2 border-sky-400/50 pl-5 text-base leading-7 text-zinc-200">The long-term goal is to develop agent-memory architectures that learn from experience, revise outdated knowledge, avoid irrelevant memory, and become more reliable over time.</p>
          </div>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="08 - Certifications" title="Verified learning across cloud, AI, and developer tools." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <a key={cert.name} href={cert.href} target="_blank" rel="noreferrer" aria-label={`Verify ${cert.name} on ${cert.issuer}`} className="group rounded border border-white/10 bg-zinc-950/25 p-5 transition-colors hover:border-sky-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                <div className="flex h-28 items-center justify-center rounded border border-white/10 bg-white/[0.03] p-3">
                  <Image src={cert.image} alt="" width={112} height={112} className="h-full w-auto object-contain" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-6 text-zinc-50 transition-colors group-hover:text-sky-200">{cert.name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors group-hover:text-sky-300">
                  Verify on {cert.issuer} <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" {...reveal} className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="09 - Contact" title="Connect with Me." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><GitBranch className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">GitHub</p><p className="mt-2 text-zinc-100">AneriRaval11</p></a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><BriefcaseBusiness className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">LinkedIn</p><p className="mt-2 text-zinc-100">Aneri Raval</p></a>
            <a href={profile.medium} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><BookOpen className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Medium</p><p className="mt-2 text-zinc-100">@ahraval11</p></a>
            <a href={profile.sessionize} target="_blank" rel="noreferrer" className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><MicVocal className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Sessionize</p><p className="mt-2 text-zinc-100">Speaker profile</p></a>
            <a href={"mailto:" + profile.email} className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"><Mail className="h-5 w-5 text-sky-300" /><p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Email</p><p className="mt-2 break-all text-zinc-100">{profile.email}</p></a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Aneri Raval - Software Engineer</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-200">GitHub <ExternalLink className="h-3.5 w-3.5" /></a>
            <a href={profile.medium} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-200">Medium <ExternalLink className="h-3.5 w-3.5" /></a>
            <a href={profile.sessionize} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-200">Sessionize <ExternalLink className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
