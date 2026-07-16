import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import Navbar from "@/components/Navbar";
import LiquidButton from "@/components/LiquidButton";
import SocialLinks from "@/components/SocialLinks";
import useLanguage from "@/hooks/useLanguage";
import HeroOnboarding from "@/components/HeroOnboarding";

const videoSource =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

export default function PortfolioHero() {
  const { preferenceStatus, t } = useLanguage();
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);
  const fadingOutRef = useRef(false);
  const [videoReady, setVideoReady] = useState(false);
  const [openingHidden, setOpeningHidden] = useState(false);
  const languageReady = ["restored", "selected"].includes(preferenceStatus);
  const readyToReveal = videoReady && languageReady;

  const cancelFade = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const fadeTo = useCallback(
    (targetOpacity, duration = 500) => {
      const video = videoRef.current;
      if (!video) return;

      cancelFade();

      const startOpacity = Number.parseFloat(video.style.opacity || "0");
      const startedAt = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        video.style.opacity = String(
          startOpacity + (targetOpacity - startOpacity) * eased,
        );

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [cancelFade],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.style.opacity = "0";

    const handleCanPlay = () => {
      setVideoReady(true);
      fadingOutRef.current = false;
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || fadingOutRef.current) return;

      if (video.duration - video.currentTime <= 0.55) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      cancelFade();
      video.style.opacity = "0";

      window.setTimeout(() => {
        if (!videoRef.current) return;

        video.currentTime = 0;
        fadingOutRef.current = false;
        const playPromise = video.play();

        if (playPromise) {
          playPromise.catch(() => {});
        }

        fadeTo(1, 500);
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelFade();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [cancelFade, fadeTo]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      setVideoReady(true);
      fadeTo(1, 500);
    }
  }, [fadeTo]);

  useEffect(() => {
    if (!readyToReveal || openingHidden) return undefined;

    const timeout = window.setTimeout(() => setOpeningHidden(true), 850);
    return () => window.clearTimeout(timeout);
  }, [openingHidden, readyToReveal]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWorkCategory = (category) => {
    window.dispatchEvent(new CustomEvent("work-category-change", { detail: category }));
    scrollToWork();
  };

  const expertiseCategories = ["production", "research", "research"];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      {!openingHidden && (
        <HeroOnboarding isExiting={readyToReveal} videoReady={videoReady} />
      )}
      <div
        className={`hero-stage contents ${readyToReveal ? "is-revealed" : ""}`}
        inert={!readyToReveal ? "" : undefined}
        aria-hidden={!readyToReveal}
      >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full translate-y-[17%] object-cover opacity-0"
        src={videoSource}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {t("hero.videoFallback")}
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(255,79,145,0.16),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(255,159,198,0.08),transparent_28%)]" />

      <Navbar />

      <div className="relative z-10 mt-4 flex flex-1 flex-col items-center justify-center px-5 py-8 text-center sm:mt-6 md:-translate-y-[6%] md:px-6 md:py-10">
        <div className="liquid-glass mb-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/80 md:mb-5 md:text-sm">
          <span className="status-dot size-2 rounded-full bg-[#ff4f91]" />
          <span>{t("hero.status")}</span>
        </div>

        <h1
          className="mx-auto mb-5 max-w-5xl text-4xl leading-[0.98] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {t("hero.greeting")}
          <br />
          {t("hero.line2")}
          <br />
          {t("hero.line3")}{" "}
          <span className="italic text-[#ffd3e4]">{t("hero.emphasis")}</span>
        </h1>

        <p className="mb-6 max-w-2xl px-2 text-sm leading-relaxed text-white/65 md:px-4 md:text-base">
          {t("hero.description")}
        </p>

        <div className="liquid-glass pink-glow flex w-full max-w-xl items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 md:pl-6">
          <div className="flex min-w-0 items-center gap-3 text-left">
            <BriefcaseBusiness
              size={18}
              className="shrink-0 text-[#ff9fc6]"
              aria-hidden="true"
            />
            <span className="truncate text-sm text-white/75">
              {t("hero.explore")}
            </span>
          </div>
          <button
            type="button"
            onClick={scrollToWork}
            aria-label={t("hero.scrollLabel")}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
          >
            <ArrowDown size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {t("hero.expertise").map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => openWorkCategory(expertiseCategories[index])}
              className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/65 transition-colors hover:bg-white/5 hover:text-[#ffd3e4] sm:px-4 sm:py-2"
            >
              {item}
            </button>
          ))}
        </div>

        <LiquidButton
          href="#about"
          className="mt-4 px-6 py-2.5 text-sm text-white md:px-7"
        >
          {t("hero.approach")}
        </LiquidButton>
      </div>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 px-6 pb-5 md:flex-row md:px-8 md:pb-6">
        <p className="hidden text-xs text-white/45 sm:block md:text-sm">
          {/* Based in Jaipur, India ·  */}
          {t("hero.footer")}
        </p>
        <SocialLinks />
      </footer>
      </div>
    </section>
  );
}
