import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Email Shivani Jain",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, href, icon: Icon }) => {
        const isEmail = href.startsWith("mailto:");

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
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
