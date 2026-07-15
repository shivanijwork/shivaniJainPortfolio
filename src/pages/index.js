import Head from "next/head";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import PortfolioHero from "@/components/PortfolioHero";
import ResearchSection from "@/components/research/ResearchSection";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivani Jain | Software / Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Shivani Jain, a Software / Full Stack Developer building production-level products across healthcare, sports, finance, AI, ML, research, and prize-draw platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black">
        <PortfolioHero />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </>
  );
}
