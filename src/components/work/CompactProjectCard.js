import { useState } from "react";
import Image from "next/image";
import { Github, Sparkles } from "lucide-react";

function ProjectFallback({ project }) {
  return (
    <div className="relative flex h-full min-h-48 flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(255,79,145,0.2),transparent_34%),radial-gradient(circle_at_84%_82%,rgba(79,184,255,0.14),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-5">
      <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-16 right-10 size-48 rounded-full border border-[#ff9fc6]/10" />
      <Sparkles size={20} className="relative text-[#ff9fc6]" aria-hidden="true" />
      <div className="relative">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
          {project.projectType}
        </p>
        <p className="text-2xl leading-none text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
          {project.title}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.capabilities.slice(0, 3).map((capability) => (
            <span key={capability} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/58">
              {capability}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CompactProjectCard({ project }) {
  const [hasImage, setHasImage] = useState(Boolean(project.image));

  return (
    <article className="liquid-glass group flex min-w-0 flex-col overflow-hidden rounded-2xl">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#0c0d0f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ff9fc6]"
      >
        {hasImage ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            onError={() => setHasImage(false)}
            className="object-contain"
          />
        ) : (
          <ProjectFallback project={project} />
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </a>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
          <span className="text-[#ff9fc6]">{project.number}</span>
          <span className="h-px w-6 bg-gradient-to-r from-[#ff4f91] to-transparent" />
          <span>{project.projectType}</span>
        </div>
        {project.badge && (
          <span className="mb-3 w-fit rounded-full border border-[#ff9fc6]/20 bg-[#ff4f91]/10 px-3 py-1 text-xs font-medium text-[#ffd3e4]">
            {project.badge}
          </span>
        )}
        <h3 className="mb-3 text-3xl leading-none text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-white/62">{project.summary}</p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.capabilities.map((capability) => (
            <span key={capability} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-white/62">
              {capability}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
        >
          <Github size={16} aria-hidden="true" />
          View on GitHub
        </a>
      </div>
    </article>
  );
}
