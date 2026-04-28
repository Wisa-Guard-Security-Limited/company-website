import React from "react";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import Navbar from "@/components/Navbar";
import { contactPageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const ContactUs = async () => {
    const page = await client.fetch(contactPageQuery);
    const sections = page?.sections || [];

  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-16">

         {sections.map((section) => {
          switch (section._type) {
            case "hero":
              return <HeroSection key={section._key} hero={section} />;

              case "contactMessage":
                return  <ContactForm key={section._key} />

            default:
              return null;
          }
        })}
           <MapSection /> 
      </div>
    </> 
  );
};

export default ContactUs;
