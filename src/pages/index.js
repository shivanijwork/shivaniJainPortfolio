import Head from "next/head";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import PortfolioHero from "@/components/PortfolioHero";
import ResearchSection from "@/components/research/ResearchSection";
import WorkSection from "@/components/work/WorkSection";
import useLanguage from "@/hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta
          name="description"
          content={t("meta.description")}
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
