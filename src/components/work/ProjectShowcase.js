import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
} from "lucide-react";

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectImage({ project }) {
  const [hasImage, setHasImage] = useState(Boolean(project.image));

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title} live product`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
    >
      <div className="liquid-glass overflow-hidden rounded-[22px] p-2 shadow-[0_26px_80px_rgba(0,0,0,0.34)]">
        <div className="flex items-center justify-between border-b border-white/8 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff6b91]" />
            <span className="size-2.5 rounded-full bg-[#ffd166]" />
            <span className="size-2.5 rounded-full bg-[#45d483]" />
          </div>
          <span className="max-w-[58%] truncate text-[11px] font-medium text-white/42">
            {getDomain(project.link)}
          </span>
          <ExternalLink size={14} className="text-white/48" aria-hidden="true" />
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,79,145,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))]">
          {hasImage ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              onError={() => setHasImage(false)}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center">
              <Layers3 className="text-[#ff9fc6]" size={34} aria-hidden="true" />
              <p
                className="text-3xl italic text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.title}
              </p>
              <span className="text-xs uppercase tracking-[0.28em] text-white/40">
                Preview coming soon
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/12" />
        </div>
      </div>
    </a>
  );
}

export default function ProjectShowcase({ project, reverse = false }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const element = rowRef.current;
    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={rowRef}
      className={`project-reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&_.project-media]:order-2" : ""
      }`}
    >
      <div className="project-media">
        <ProjectImage project={project} />
      </div>

      <div className="liquid-glass rounded-[28px] px-5 py-6 sm:px-7 sm:py-8 lg:px-9">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
          <span className="text-[#ff9fc6]">{project.number}</span>
          <span className="h-px w-8 bg-gradient-to-r from-[#ff4f91] to-transparent" />
          <span>{project.industry}</span>
        </div>

        <p className="mb-3 text-sm font-medium text-[#ffd3e4]/80">
          {project.category}
        </p>

        <h3
          className="mb-4 text-4xl leading-none text-white sm:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {project.title}
        </h3>

        <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/64 md:text-base">
          {project.summary}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/68"
            >
              {capability}
            </span>
          ))}
        </div>

        <ul className="mb-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-white/70">
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#ff9fc6]"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mb-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/42">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="pink-glow inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
        >
          Visit live product
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
