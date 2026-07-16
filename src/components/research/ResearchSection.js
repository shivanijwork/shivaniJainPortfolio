import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BookOpenText,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";
import research from "@/data/research.json";
import useLanguage from "@/hooks/useLanguage";

export default function ResearchSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [hasCertificate, setHasCertificate] = useState(Boolean(research.certificateImage));

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
      id="research"
      className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-[#4fb8ff]/10 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-[#ff4f91]/14 blur-3xl" />
        <div className="research-signal absolute left-1/2 top-16 hidden h-[70%] w-[68%] -translate-x-1/2 rounded-full border border-[#ff9fc6]/10 lg:block" />
      </div>

      <div ref={sectionRef} className="research-reveal relative z-10 mx-auto max-w-6xl">
        <div className="mb-9 grid gap-5 lg:mb-10 lg:grid-cols-[0.8fr_1fr] lg:items-end lg:gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              {t("research.eyebrow")}
            </p>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {t("research.heading")}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/62 md:text-base lg:ml-auto">
            {t("research.intro")}
          </p>
        </div>

        <div className="liquid-glass overflow-hidden rounded-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative border-b border-white/8 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(255,79,145,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(79,184,255,0.12),transparent_32%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                <div>
                  <div className="pink-glow mb-5 inline-flex items-center gap-2 rounded-full bg-white/[0.035] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd3e4]">
                    <Award size={15} aria-hidden="true" />
                    {t("research.award")}
                  </div>

                  <h3
                    className="mb-4 text-3xl leading-none text-white sm:text-4xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {t("research.title")}
                  </h3>

                  <p className="max-w-lg text-sm leading-relaxed text-white/64 md:text-base">
                    {t("research.subtitle")}
                  </p>
                </div>

                <div className="liquid-glass rounded-[22px] p-2">
                  <div className="relative aspect-[1.55/1] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(255,211,228,0.12),rgba(255,255,255,0.025))]">
                    {hasCertificate ? (
                      <Image
                        src={research.certificateImage}
                        alt={t("research.certificateAlt")}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        onError={() => setHasCertificate(false)}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                        <Award className="mb-3 text-[#ff9fc6]" size={28} aria-hidden="true" />
                        <p className="text-sm font-semibold text-white/78">
                          {t("research.certificateReady")}
                        </p>
                        <p className="mt-1 text-xs text-white/42">
                          {t("research.certificatePath")}
                        </p>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/12" />
                  </div>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3.5">
                    <Sparkles className="mb-2 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">{t("research.recognition")}</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">{t("research.bestPaper")}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3.5">
                    <BookOpenText className="mb-2 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">{t("research.publicationLabel")}</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">IEEE Xplore</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3.5">
                    <FileText className="mb-2 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">{t("research.documentId")}</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">{research.documentId}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7">
              <div className="mb-5">
                <p className="mb-2 text-sm font-semibold text-[#ffd3e4]">
                  {research.conference}
                </p>
                <p className="text-sm leading-relaxed text-white/58">
                  {t("research.publication")} &middot; {t("research.role")}
                </p>
              </div>

              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
                  {t("research.contributionLabel")}
                </p>
                <p className="text-sm leading-relaxed text-white/66">
                  {t("research.contribution")}
                </p>
              </div>

              <ul className="mb-5 space-y-2.5">
                {t("research.highlights").map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-white/68">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#ff9fc6]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {t("research.themes").map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/58"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <a
                href={research.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
              >
                {t("research.viewPaper")}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
