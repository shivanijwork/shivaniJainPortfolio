import { Github, Linkedin, Mail } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/shivanijwork",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivani-jain13/",
    icon: Linkedin,
  },
  {
    labelKey: "accessibility.emailShivani",
    href: "mailto:shivanijwork@gmail.com",
    icon: Mail,
  },
];

export default function SocialLinks() {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, labelKey, href, icon: Icon }) => {
        const isEmail = href.startsWith("mailto:");
        const ariaLabel = labelKey ? t(labelKey) : label;

        return (
          <a
            key={label || labelKey}
            href={href}
            aria-label={ariaLabel}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noreferrer"}
            className="liquid-glass rounded-full p-3 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6] md:p-4"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
