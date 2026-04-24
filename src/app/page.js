import HeroSection from "./home-page/HeroSection";
import WhyUsSection from "./home-page/WhyUsSection";
import OurServiceSection from "./home-page/OurServiceSection";
import AboutLocation from "./home-page/AboutLocation";
import CtaSection from "./home-page/CtaSection";
import Navbar from "@/components/Navbar";
import { homePageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
// --- QUERY ---

export default async function Home() {
  const page = await client.fetch(homePageQuery);
  const sections = page?.sections || [];

  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-18">
        {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;

            case "whyChooseUs":
              return <WhyUsSection key={section._key} data={section} />;

            case "servicesSection":
              return <OurServiceSection key={section._key} data={section} />;

            case "aboutLocationSection":
              return <AboutLocation key={section._key} data={section} />;

            case "ctaSection":
              return <CtaSection key={section._key} data={section} />;

            default:
              return null;
          }
        })}
      </div>
    </>
  );
}
