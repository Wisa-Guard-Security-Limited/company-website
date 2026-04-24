import React from "react";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import Navbar from "@/components/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-16">
        <HeroSection />
        <ContactForm />
        <MapSection />
      </div>
    </>
  );
};

export default ContactUs;
