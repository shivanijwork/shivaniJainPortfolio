import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bot, BrainCircuit, BriefcaseBusiness } from "lucide-react";
import CompactProjectCard from "@/components/work/CompactProjectCard";
import EnergyBackground from "@/components/work/EnergyBackground";
import ProjectShowcase from "@/components/work/ProjectShowcase";
import projects from "@/data/projects.json";
import useLanguage from "@/hooks/useLanguage";

const tabs = [
  { id: "production", label: "Production", icon: BriefcaseBusiness },
  { id: "ai", label: "AI & Automation", icon: Bot },
  { id: "research", label: "ML & Research", icon: BrainCircuit },
];

const categoryIntros = {
  production: "Production software built around real business needs, reliable systems, and polished user experiences.",
  ai: "Practical AI automation that turns repetitive creative work into efficient, reusable workflows.",
  research: "Machine learning explorations grounded in real datasets, careful evaluation, and useful outcomes.",
};

export default function WorkSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("production");
  const [displayedCategory, setDisplayedCategory] = useState("production");
  const [isExiting, setIsExiting] = useState(false);
  const transitionRef = useRef(null);
  const resizeRef = useRef(null);
  const panelShellRef = useRef(null);
  const panelContentRef = useRef(null);

  const localizedProjects = useMemo(() => {
    const localizedById = Object.fromEntries(
      projects
        .filter((project) => project.category === "production")
        .map((project, index) => [project.id, t("work.projects")[index] || {}]),
    );

    return projects.map((project) => {
      if (project.category !== "production") return project;
      const localized = localizedById[project.id];
      return {
        ...project,
        ...localized,
        projectType: localized.category || project.projectType,
        category: project.category,
      };
    });
  }, [t]);

  const visibleProjects = localizedProjects.filter(
    (project) => project.category === displayedCategory,
  );

  const selectCategory = useCallback((category) => {
    if (!tabs.some((tab) => tab.id === category)) return;

    setActiveCategory(category);
    window.clearTimeout(transitionRef.current);
    window.clearTimeout(resizeRef.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedCategory(category);
      setIsExiting(false);
      return;
    }

    const shell = panelShellRef.current;
    const content = panelContentRef.current;
    if (shell && content) {
      shell.style.height = `${content.offsetHeight}px`;
      shell.style.overflow = "hidden";
    }

    setIsExiting(true);
    transitionRef.current = window.setTimeout(() => {
      setDisplayedCategory(category);
      setIsExiting(false);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (!panelShellRef.current || !panelContentRef.current) return;
          panelShellRef.current.style.height = `${panelContentRef.current.offsetHeight}px`;
          resizeRef.current = window.setTimeout(() => {
            if (!panelShellRef.current) return;
            panelShellRef.current.style.height = "auto";
            panelShellRef.current.style.overflow = "visible";
          }, 460);
        });
      });
    }, 180);
  }, []);

  useEffect(() => {
    const handleCategoryRequest = (event) => {
      selectCategory(event.detail);
    };

    window.addEventListener("work-category-change", handleCategoryRequest);
    return () => {
      window.removeEventListener("work-category-change", handleCategoryRequest);
      window.clearTimeout(transitionRef.current);
      window.clearTimeout(resizeRef.current);
    };
  }, [selectCategory]);

  const handleKeyDown = (event, currentIndex) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = currentIndex;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    selectCategory(tabs[nextIndex].id);
    document.getElementById(`work-tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <section id="work" className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <EnergyBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              {t("work.eyebrow")}
            </p>
            <h2 className="max-w-3xl text-4xl leading-[0.98] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("work.title")} <span className="italic text-[#ffd3e4]" style={{ fontFamily: "'Instrument Serif', serif" }}>{t("work.emphasis")}</span>
            </h2>
          </div>

          <div className="liquid-glass rounded-2xl p-4 sm:p-5">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-white/50">Projects in view</span>
              <span className="text-4xl italic text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {String(visibleProjects.length).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/62">{categoryIntros[displayedCategory]}</p>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Project categories"
          className="liquid-glass mb-8 grid grid-cols-3 gap-1 rounded-2xl p-1.5 sm:mx-auto sm:w-fit sm:min-w-[34rem]"
        >
          {tabs.map(({ id, label, icon: Icon }, index) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                id={`work-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="work-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectCategory(id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-2 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                  isActive
                    ? "pink-glow bg-white/[0.075] text-white shadow-[0_0_24px_rgba(255,79,145,0.14)]"
                    : "text-white/48 hover:bg-white/[0.035] hover:text-white/78"
                }`}
              >
                <Icon size={16} className={isActive ? "text-[#ff9fc6]" : ""} aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div
          ref={panelShellRef}
          id="work-panel"
          role="tabpanel"
          aria-labelledby={`work-tab-${activeCategory}`}
          aria-live="polite"
          className="work-panel-shell"
        >
          <div ref={panelContentRef} key={displayedCategory} className={`work-tab-panel ${isExiting ? "is-exiting" : ""}`}>
            {displayedCategory === "production" ? (
              <div className="space-y-10 sm:space-y-12 lg:space-y-14">
                {visibleProjects.map((project, index) => (
                  <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />
                ))}
              </div>
            ) : (
              <div className={`grid gap-4 ${visibleProjects.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-3xl"}`}>
                {visibleProjects.map((project) => (
                  <CompactProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
