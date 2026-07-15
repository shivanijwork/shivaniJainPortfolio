import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Products"
          title="Case studies with real product depth."
          description="Selected builds that combine product workflows, backend logic, admin experiences, and polished frontend delivery."
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-pink-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-pink-200/35 md:grid-cols-[0.9fr_1.1fr] md:p-8"
            >
              <div className="relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-[#140914] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(244,114,182,0.3),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.16),transparent_32%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-100">
                      {project.type}
                    </span>
                    <span className="text-5xl font-semibold text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Live product</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">{project.name}</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-lg leading-8 text-zinc-200">{project.description}</p>
                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-zinc-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full bg-pink-300 px-5 py-3 text-sm font-bold text-[#150812] transition hover:-translate-y-1 hover:bg-pink-200"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
