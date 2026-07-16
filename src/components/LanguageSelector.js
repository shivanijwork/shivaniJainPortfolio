import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

export default function LanguageSelector() {
  const { language, languages, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedIndex = languages.findIndex((item) => item.code === language);
  const currentLanguage = languages[selectedIndex];

  useEffect(() => {
    if (!isOpen) return undefined;
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => optionRefs.current[selectedIndex]?.focus());
  };

  const selectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
    requestAnimationFrame(() => rootRef.current?.querySelector("button")?.focus());
  };

  const handleKeyDown = (event) => {
    if (!isOpen && ["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      openMenu();
      return;
    }
    if (!isOpen) return;
    const focusedIndex = optionRefs.current.indexOf(document.activeElement);
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      rootRef.current?.querySelector("button")?.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      optionRefs.current[(focusedIndex + direction + languages.length) % languages.length]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      optionRefs.current[event.key === "Home" ? 0 : languages.length - 1]?.focus();
    }
  };

  return (
    <div ref={rootRef} className="relative z-30" onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-label={t("language.selectorLabel")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
        className="liquid-glass flex h-9 items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-white/78 transition-all duration-300 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9fc6] sm:h-10 sm:gap-2 sm:px-3"
      >
        <Languages size={15} className="text-[#ff9fc6]" aria-hidden="true" />
        <span className="hidden lg:inline">{currentLanguage.name}</span>
        <span className="lg:hidden" aria-hidden="true">{currentLanguage.flag}</span>
        <ChevronDown size={13} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <div
        role="listbox"
        aria-label={t("language.menuLabel")}
        className={`language-menu liquid-glass absolute right-0 top-[calc(100%+0.65rem)] min-w-44 rounded-2xl p-2 transition-all duration-200 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        {languages.map((item, index) => (
          <button
            key={item.code}
            ref={(element) => { optionRefs.current[index] = element; }}
            type="button"
            role="option"
            aria-selected={item.code === language}
            tabIndex={isOpen && item.code === language ? 0 : -1}
            onClick={() => selectLanguage(item.code)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/72 transition-colors hover:bg-white/[0.07] hover:text-white focus-visible:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff9fc6]"
          >
            <span className="text-base" aria-hidden="true">{item.flag}</span>
            <span className="flex-1">{item.nativeName}</span>
            {item.code === language && <Check size={14} className="text-[#ff9fc6]" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
