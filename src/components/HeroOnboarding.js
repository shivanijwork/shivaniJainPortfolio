import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

export default function HeroOnboarding({ isExiting, videoReady }) {
  const { language, languages, preferenceStatus, setLanguage } = useLanguage();
  const firstButtonRef = useRef(null);
  const needsSelection = preferenceStatus === "new";
  const isRestoring = ["unresolved", "restored"].includes(preferenceStatus);

  useEffect(() => {
    if (needsSelection) firstButtonRef.current?.focus();
  }, [needsSelection]);

  return (
    <div
      className={`hero-opening absolute inset-0 z-50 grid place-items-center px-5 py-10 ${isExiting ? "is-exiting" : ""}`}
    >
      <div className="hero-opening-veil absolute inset-0" />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-opening-title"
        aria-describedby="hero-opening-description"
        className="hero-opening-card liquid-glass relative w-full max-w-lg rounded-[2rem] px-6 py-8 text-center sm:px-10 sm:py-10"
      >
        {needsSelection ? (
          <>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#ff9fc6]">
              Welcome
            </p>
            <h2
              id="hero-opening-title"
              className="text-4xl leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Choose your language
            </h2>
            <p id="hero-opening-description" className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/60 sm:text-base">
              Let&apos;s personalize your experience before we begin.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Choose your preferred language">
              {languages.map((item, index) => {
                const isSelected = item.code === language && preferenceStatus === "selected";
                return (
                  <button
                    key={item.code}
                    ref={index === 0 ? firstButtonRef : undefined}
                    type="button"
                    lang={item.code}
                    aria-pressed={isSelected}
                    aria-label={`Continue in ${item.name}`}
                    onClick={() => setLanguage(item.code)}
                    className={`hero-language-button liquid-glass flex min-h-16 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm text-white/78 ${isSelected ? "is-selected" : ""}`}
                  >
                    <span className="text-lg" aria-hidden="true">{item.flag}</span>
                    <span>{item.nativeName}</span>
                    {isSelected && <Check size={14} className="text-[#ff9fc6]" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div role="status" aria-live="polite" className="py-4">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#ff9fc6]">
              Welcome back
            </p>
            <h2
              id="hero-opening-title"
              className="text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Preparing your experience<span className="opening-ellipsis" aria-hidden="true">...</span>
            </h2>
            <p id="hero-opening-description" className="mt-3 text-sm text-white/50">
              {isRestoring || !videoReady ? "One moment — the opening scene is almost ready." : "Your experience is ready."}
            </p>
            <div className="opening-glow mx-auto mt-7 h-px w-28" aria-hidden="true" />
          </div>
        )}
      </section>
    </div>
  );
}
