import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "shivani@example.com",
    href: "mailto:shivani@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
];

export default function ContactSection() {
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
      { threshold: 0.24, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-10 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#ff4f91]/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-[#4fb8ff]/10 blur-3xl" />
        <div className="contact-line absolute left-1/2 top-24 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff9fc6]/22 to-transparent lg:block" />
      </div>

      <div ref={sectionRef} className="contact-reveal relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
          Get In Touch
        </p>

        <h2
          className="mx-auto mb-6 max-w-3xl text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Let&apos;s build something{" "}
          <span className="italic text-[#ffd3e4]">worth remembering.</span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
          If you&apos;re building something meaningful and think I can help,
          I&apos;d love to hear about it. If it feels like the right fit for both
          of us, I&apos;ll be happy to continue the conversation.
        </p>

        <div className="liquid-glass mx-auto max-w-3xl rounded-[32px] p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const isEmail = href.startsWith("mailto:");

              return (
                <a
                  key={label}
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="group liquid-glass flex items-center justify-between gap-4 rounded-full px-4 py-3 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.035] hover:shadow-[0_0_28px_rgba(255,79,145,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6]"
                  aria-label={`${label}: ${value}`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/[0.055] text-[#ff9fc6]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-[0.18em] text-white/38">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-white/78">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-white/38 transition-colors group-hover:text-[#ffd3e4]"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-sm text-white/42">
          Thanks for taking the time to explore my work.
        </p>
      </div>
    </section>
  );
}
