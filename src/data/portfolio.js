export const navigation = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const industries = [
  "Healthcare",
  "Sports",
  "Prize-draw platforms",
  "Finance",
  "AI and ML",
  "Research",
];

export const projects = [
  {
    name: "Blue Halo Health",
    link: "https://blue-halo-health-next-js.vercel.app/",
    stack: ["React JS", "Next JS", "Node JS", "MongoDB"],
    type: "Healthcare SaaS",
    description:
      "Independently delivered a production-ready web application for an international healthcare client.",
    highlights: [
      "Built dynamic admin panels and configurable product modules.",
      "Implemented user management workflows and secure JWT authentication.",
      "Structured the app for production-level healthcare operations.",
    ],
  },
  {
    name: "All Sports Khelo",
    link: "https://fpask.vercel.app/",
    stack: ["React JS", "Next JS", "Node JS", "MySQL"],
    type: "Sports Platform",
    description:
      "Developed a large-scale sports tournament listing platform covering 12+ sports categories.",
    highlights: [
      "Built organiser dashboard for tournament creation and ticket pricing.",
      "Added participant tracking, result publishing, and category-led browsing.",
      "Designed workflows for both organisers and players at scale.",
    ],
  },
  {
    name: "Dream Car",
    link: "https://fp-dreamcar.vercel.app/",
    stack: ["Next.js", "Node.js", "PostgreSQL", "NeonDB"],
    type: "Prize-draw Commerce",
    description:
      "Built a multi-category prize-draw platform with advanced commerce, wallet, and compliance flows.",
    highlights: [
      "Created ticket cart, instant-win mechanics, gift cards, and currency switching.",
      "Integrated Stripe payments and wallet-led purchase flows.",
      "Implemented compliance questions and secure random draw logic for eligible tickets.",
    ],
  },
];

export const experience = [
  {
    role: "Software / Full Stack Developer",
    detail:
      "Built production-level web applications across healthcare, sports, prize-draw platforms, finance, AI, ML, and research domains.",
  },
  {
    role: "Product-focused Engineer",
    detail:
      "Owned user-facing dashboards, authentication flows, database-backed features, payment journeys, and admin tooling from concept to deployment.",
  },
  {
    role: "Problem Solver",
    detail:
      "Translate business needs into practical systems that are secure, maintainable, and clear for real users.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React JS", "Next.js", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "JWT Auth", "Admin Panels", "Payment Flows"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "NeonDB"],
  },
  {
    title: "Product Areas",
    skills: ["Healthcare", "Sports", "Finance", "AI / ML", "Research", "E-commerce"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "Let's build something useful",
    href: "mailto:shivanijwork@gmail.com?subject=Portfolio%20Inquiry",
  },
  {
    label: "Projects",
    value: "View live case studies",
    href: "#projects",
  },
];
