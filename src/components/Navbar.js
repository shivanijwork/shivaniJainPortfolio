import { ArrowUpRight } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import LanguageSelector from "@/components/LanguageSelector";
import useLanguage from "@/hooks/useLanguage";

const navLinks = [
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.work", href: "#work" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="relative z-20 px-4 py-5 md:px-6 md:py-6">
      <div className="navbar-shell liquid-glass mx-auto flex container items-center justify-between rounded-full px-5 py-3 md:px-6">
        <a
          href="#hero"
          aria-label={t("accessibility.home")}
          className="group flex min-w-0 items-center gap-2"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff4f91,#ff9fc6)] text-xs font-bold text-white shadow-[0_0_24px_rgba(255,79,145,0.22)]">
            SJ
          </span>
          <span className="hidden text-base font-semibold text-white min-[390px]:block md:text-lg">
            Shivani Jain
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
            >
              {t(link.labelKey)}
              <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-[#ff4f91] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSelector />
          <a
            href="/Shivani-Jain-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6] sm:inline-flex"
          >
            {t("nav.resume")}
          </a>
          <LiquidButton
            href="#contact"
            className="gap-2 px-4 py-2 text-sm text-white hover:shadow-[0_0_25px_rgba(255,79,145,0.12),inset_0_1px_1px_rgba(255,255,255,0.12)] md:px-6"
          >
            <span>{t("nav.talk")}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </LiquidButton>
        </div>
      </div>
    </nav>
  );
}
