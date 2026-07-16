import { useEffect, useRef } from "react";
import { BookOpen, Layers3, Lightbulb, Sparkles } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

const philosophyCards = [
  Lightbulb, BookOpen, Layers3, Sparkles,
];

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
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
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-10 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-16 h-72 w-72 rounded-full bg-[#ff4f91]/12 blur-3xl" />
        <div className="absolute right-[-10%] bottom-20 h-80 w-80 rounded-full bg-[#4fb8ff]/10 blur-3xl" />
        <div className="about-soft-ring absolute right-[10%] top-28 hidden h-96 w-96 rounded-full border border-[#ff9fc6]/10 lg:block" />
      </div>

      <div ref={sectionRef} className="about-reveal relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              {t("about.eyebrow")}
            </p>
            <h2 className="mb-6 max-w-4xl text-5xl leading-[0.95] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("about.title")}{" "}
              <span
                className="italic text-[#ffd3e4]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {t("about.emphasis")}
              </span>
            </h2>

            <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-white/64 md:text-base">
              {t("about.paragraphs").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="liquid-glass rounded-[32px] p-5 sm:p-6">
            <div className="relative aspect-square overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_45%,rgba(255,79,145,0.18),transparent_34%),radial-gradient(circle_at_72%_72%,rgba(79,184,255,0.14),transparent_32%)]">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-[#ff9fc6]/12" />
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-4 text-center">
                <p
                  className="text-2xl italic leading-none text-white"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {t("about.build")}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/40">
                  {t("about.loop")}
                </p>
              </div>

              {t("about.steps").map((step, index) => (
                <div
                  key={step}
                  className={`approach-node approach-node-${index} liquid-glass rounded-full px-3 py-2 text-xs font-medium text-white/72`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {t("about.cards").map(({ title, description }, index) => {
            const Icon = philosophyCards[index];
            return (
            <article
              key={title}
              className="about-card liquid-glass rounded-[26px] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.025] hover:shadow-[0_0_32px_rgba(255,79,145,0.1)] sm:p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 grid size-11 place-items-center rounded-full bg-white/[0.045] text-[#ff9fc6]">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/58">
                {description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
