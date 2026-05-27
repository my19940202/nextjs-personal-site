"use client";

import ProjectModal from "@/components/personal/ProjectModal";
import ThemeToggle from "@/components/personal/ThemeToggle";
import {
  homeContent,
  NavId,
  navItems,
  Project2B,
  projects2B,
  projects2C,
  skillTags,
  socialLinks,
} from "@/config/personal";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function PlaceholderImage({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const inner = (
    <div
      className={cn(
        "ps-placeholder",
        onClick && "ps-placeholder-interactive",
        className
      )}
    >
      <span className="text-3xl">🖼</span>
      <span className="px-3 text-center text-xs">{label}</span>
    </div>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="w-full text-left">
        {inner}
      </button>
    );
  }

  return inner;
}

function ProjectCard2B({
  project,
  onOpen,
}: {
  project: Project2B;
  onOpen: (p: Project2B) => void;
}) {
  return (
    <article className={cn("ps-card ps-card-hover group flex flex-col gap-5 sm:flex-row")}>
      <div className="sm:h-[120px] sm:w-[120px] sm:shrink-0">
        {project.images ? (
          <Image
            src={project.images}
            alt={project.title}
            width={120}
            height={120}
            className="rounded-lg"
          />
        ) : (
          <PlaceholderImage label="项目封面占位" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h4 className="ps-text-title text-lg font-semibold">{project.title}</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="ps-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="ps-text-body text-sm leading-relaxed">{project.description}</p>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="ps-text-accent mt-auto w-fit text-sm underline-offset-4 hover:underline"
        >
          查看示例截图 →
        </button>
      </div>
    </article>
  );
}

function ProjectCard2C({ project }: { project: (typeof projects2C)[number] }) {
  return (
    <article className={cn("ps-card ps-card-hover group flex flex-col gap-5 sm:flex-row")}>
      <div className="sm:h-[120px] sm:w-[120px] sm:shrink-0">
        {project.images ? (
          <Image
            src={project.images}
            alt={project.title}
            width={120}
            height={120}
            className="rounded-lg"
          />
        ) : (
          <PlaceholderImage label="项目封面占位" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <h4 className="ps-text-title text-lg font-semibold">{project.title}</h4>
            {project.tags.map((tag) => (
              <span key={tag} className="ps-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="ps-text-body text-sm leading-relaxed">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-link"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function PersonalHome() {
  const [activeSection, setActiveSection] = useState<NavId>("home");
  const [modalProject, setModalProject] = useState<Project2B | null>(null);
  const sectionRefs = useRef<Record<NavId, HTMLElement | null>>({
    home: null,
    projects: null,
    social: null,
  });

  const scrollToSection = useCallback((id: NavId) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id as NavId);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    navItems.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="personal-site ps-page mx-auto flex min-h-screen w-full flex-col gap-8 px-4 py-8 md:flex-row md:gap-12 md:px-8 md:py-12">
      <aside className="md:sticky md:top-12 md:h-fit md:w-52 md:shrink-0">
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="/avatar.jpg"
            alt="xibobo"
            width={80}
            height={80}
            className="rounded-full border-radius-full"
          />
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-1 md:overflow-visible md:pb-0">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition",
                activeSection === id ? "ps-nav-active" : "ps-nav-item"
              )}
            >
              <span className="w-5 text-center text-xs opacity-70">{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-4 text-center">
          <ThemeToggle />
        </div>
      </aside>

      <div className="min-w-0 flex-1 space-y-20">
        <div className="mx-auto max-w-6xl">
          <section
            id="home"
            ref={(el) => {
              sectionRefs.current.home = el;
            }}
            className="scroll-mt-8"
          >
            <p className="ps-text-muted mb-2 text-sm">{homeContent.greeting}</p>
            <h1 className="ps-text-title mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              I&apos;m <span>{homeContent.name}</span>
              <span className="ps-text-muted"> ({homeContent.alias})</span>
            </h1>
            <p className="ps-text-body mb-6 mt-4 max-w-2xl text-base leading-relaxed">
              {homeContent.intro}
            </p>

            <ul className="mb-8 space-y-2">
              {homeContent.highlights.map((item) => (
                <li key={item} className="ps-text-body flex gap-2 text-sm leading-relaxed">
                  <span className="ps-bullet mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {homeContent.services.map((s) => (
                <div key={s.title} className="ps-card-sm">
                  <h3 className="ps-text-heading mb-2 text-sm font-semibold">{s.title}</h3>
                  <p className="ps-text-muted text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <h2 className="ps-text-heading py-4 text-xl font-semibold">工作经历</h2>
            <div className="space-y-4">
              {homeContent.experience.map((exp) => (
                <div key={exp.company} className="ps-card">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="ps-text-title font-semibold">{exp.company}</h3>
                    <span className="ps-text-subtle text-xs">{exp.period}</span>
                  </div>
                  <p className="ps-text-body mb-1 text-sm">{exp.role}</p>
                  <p className="ps-text-muted text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-mt-8">
            <h2 className="ps-text-heading py-4 text-xl font-semibold">技能与实践</h2>
            <p className="ps-text-muted mb-4 text-sm">点击标签查看相关教程或分享</p>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((skill) => (
                <Link
                  key={skill.href}
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-tag-link group"
                >
                  {skill.label}
                  <ExternalLink className="h-3 w-3 opacity-0 transition group-hover:opacity-70" />
                </Link>
              ))}
            </div>
          </section>

          <section
            id="projects"
            ref={(el) => {
              sectionRefs.current.projects = el;
            }}
            className="scroll-mt-8"
          >
            <h2 className="ps-text-title py-4 text-2xl font-bold">Projects</h2>
            <p className="ps-text-muted mb-8 text-sm">过往尝试与落地的项目记录</p>

            <h3 className="ps-text-muted pb-4 text font-semibold uppercase tracking-wider">
              2B
            </h3>
            <div className="mb-10 space-y-4">
              {projects2B.map((project) => (
                <ProjectCard2B
                  key={project.id}
                  project={project}
                  onOpen={setModalProject}
                />
              ))}
            </div>

            <h3 className="ps-text-muted pb-4 text font-semibold uppercase tracking-wider">
              2C
            </h3>
            <div className="space-y-4">
              {projects2C.map((project) => (
                <ProjectCard2C key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section
            id="social"
            ref={(el) => {
              sectionRefs.current.social = el;
            }}
            className="scroll-mt-8 pb-12"
          >
            <h2 className="ps-text-title py-4 text-2xl font-bold">Social Media</h2>
            <p className="ps-text-muted mb-8 text-sm">欢迎在各平台关注我</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-card ps-card-hover group flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <p className="ps-text-heading font-medium group-hover:text-zinc-900 dark:group-hover:text-white">
                      {link.name}
                    </p>
                    <p className="ps-text-muted text-sm">{link.handle}</p>
                  </div>
                  <ExternalLink className="ps-social-icon h-4 w-4" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}
