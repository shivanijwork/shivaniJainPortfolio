import EnergyBackground from "@/components/work/EnergyBackground";
import ProjectShowcase from "@/components/work/ProjectShowcase";
import projects from "@/data/projects.json";
import useLanguage from "@/hooks/useLanguage";

export default function WorkSection() {
  const { t } = useLanguage();
  const localizedProjects = projects.map((project, index) => ({
    ...project,
    ...t("work.projects")[index],
  }));
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-10 lg:py-32"
    >
      <EnergyBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              {t("work.eyebrow")}
            </p>
            <h2 className="max-w-3xl text-5xl leading-[0.95] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("work.title")}{" "}
              <span
                className="italic text-[#ffd3e4]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {t("work.emphasis")}
              </span>
            </h2>
          </div>

          <div className="liquid-glass rounded-3xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-white/50">
                {t("work.count")}
              </span>
              <span
                className="text-5xl italic text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {String(localizedProjects.length).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/62">
              {t("work.intro")}
            </p>
          </div>
        </div>

        <div className="space-y-14 lg:space-y-20">
          {localizedProjects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
