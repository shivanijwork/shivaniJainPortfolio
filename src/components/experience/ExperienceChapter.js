import { useEffect, useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

export default function ExperienceChapter({ item, index }) {
  const { t } = useLanguage();
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
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
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="experience-reveal liquid-glass group rounded-2xl px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-6 lg:px-7"
      style={{ transitionDelay: `${index * 160}ms` }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-8">
        <div>
          <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
            <span className="text-[#ff9fc6]">{t("experience.chapter", { number: item.chapter })}</span>
            <span className="h-px w-10 bg-gradient-to-r from-[#ff4f91] to-transparent" />
          </div>

          <h3
            className="mb-3 text-3xl leading-none text-white sm:text-4xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {item.company}
          </h3>

          <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
            <span className="rounded-full bg-white/[0.045] px-3 py-1.5 text-white/72">
              {item.role}
            </span>
            <span className="rounded-full border border-[#ff9fc6]/20 bg-[#ff4f91]/8 px-3 py-1.5 text-[#ffd3e4]">
              {item.duration}
            </span>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/58">
            {item.lesson}
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/72">
            <Sparkles size={16} className="text-[#ff9fc6]" aria-hidden="true" />
            <span>{t("experience.carried")}</span>
          </div>

          <ul className="mb-5 space-y-2.5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-white/66">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#ff9fc6]"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/52 transition-colors group-hover:text-white/68"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
