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

export default function ResearchSection() {
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
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-10 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-[#4fb8ff]/10 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-[#ff4f91]/14 blur-3xl" />
        <div className="research-signal absolute left-1/2 top-16 hidden h-[70%] w-[68%] -translate-x-1/2 rounded-full border border-[#ff9fc6]/10 lg:block" />
      </div>

      <div ref={sectionRef} className="research-reveal relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              {research.eyebrow}
            </p>
            <h2
              className="max-w-3xl text-5xl leading-[0.95] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Award-winning thinking, beyond the code.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/62 md:text-base lg:ml-auto">
            Research taught me how to slow down, study a domain deeply, and
            understand technology as a force that changes real-world systems.
          </p>
        </div>

        <div className="liquid-glass overflow-hidden rounded-[32px]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] border-b border-white/8 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(255,79,145,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(79,184,255,0.12),transparent_32%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="pink-glow mb-8 inline-flex items-center gap-2 rounded-full bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd3e4]">
                    <Award size={15} aria-hidden="true" />
                    {research.award}
                  </div>

                  <h3
                    className="mb-5 text-4xl leading-none text-white sm:text-5xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {research.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-relaxed text-white/64 md:text-base">
                    {research.subtitle}
                  </p>
                </div>

                <div className="liquid-glass rounded-[22px] p-2">
                  <div className="relative aspect-[1.55/1] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(255,211,228,0.12),rgba(255,255,255,0.025))]">
                    {hasCertificate ? (
                      <Image
                        src={research.certificateImage}
                        alt={research.certificateAlt}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        onError={() => setHasCertificate(false)}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                        <Award className="mb-3 text-[#ff9fc6]" size={28} aria-hidden="true" />
                        <p className="text-sm font-semibold text-white/78">
                          Certificate image ready to add
                        </p>
                        <p className="mt-1 text-xs text-white/42">
                          Save it as public/research/icrtac-2023-certificate.webp
                        </p>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/12" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <Sparkles className="mb-3 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">Recognition</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">Best Paper</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <BookOpenText className="mb-3 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">Publication</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">IEEE Xplore</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <FileText className="mb-3 text-[#ff9fc6]" size={18} aria-hidden="true" />
                    <p className="text-xs text-white/44">Document ID</p>
                    <p className="mt-1 text-sm font-semibold text-white/82">{research.documentId}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-7">
                <p className="mb-2 text-sm font-semibold text-[#ffd3e4]">
                  {research.conference}
                </p>
                <p className="text-sm leading-relaxed text-white/58">
                  {research.publication} &middot; {research.role}
                </p>
              </div>

              <div className="mb-7 rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
                  My Contribution
                </p>
                <p className="text-sm leading-relaxed text-white/66">
                  {research.contribution}
                </p>
              </div>

              <ul className="mb-7 space-y-3">
                {research.highlights.map((highlight) => (
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

              <div className="mb-8 flex flex-wrap gap-2">
                {research.themes.map((theme) => (
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
                View paper on IEEE Xplore
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
