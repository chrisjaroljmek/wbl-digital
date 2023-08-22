import { useEffect, useState } from "react";

import classnames from "classnames";

import { ClientGallery } from "./components/ClientGallery";
import { ColorToggle } from "./components/ColorToggle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";

import { AboutUs } from "./containers/AboutUs";
import { SubmissionForm } from "./containers/SubmissionForm";
import { WhatWeDo } from "./containers/WhatWeDo";

import "./assets/fonts/inter.ttf";
import "./App.css";

export function App() {
  const [currentSection, setCurrentSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - sectionHeight / 5) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={classnames(
        "relative",
        darkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      )}
    >
      <Header
        className="fixed top-0 z-40"
        currentSection={currentSection}
        darkMode={darkMode}
      />
      <ColorToggle
        className="fixed bottom-0 m-[2vw] w-fit z-40"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Scroll className="fixed bottom-0 right-0 z-40" darkMode={darkMode} />
      <Section id="1" className="h-screen">
        <div className="flex items-center justify-center h-full">
          <Logo className="w-4/12 mr-[1.5vw]" />
          <div className="flex flex-col justify-center h-full space-y-[1vw] text-[2.5vw] leading-none tracking-wide whitespace-nowrap pt-[4.5vw]">
            <div className="flex items-end">
              Engaging web experiences
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-green mb-[0.3vw] ml-[0.4vw]"></span>
            </div>
            <div className="flex items-end">
              <span>Purposeful digital solutions</span>
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-darkBlue mb-[0.3vw] ml-[0.4vw]"></span>
            </div>
            <div className="flex items-end">
              <span>Empowering web design</span>
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-red mb-[0.3vw] ml-[0.4vw]"></span>
            </div>
          </div>
        </div>
      </Section>
      <Section id="2" className="pt-[124px]">
        <div className="flex flex-col items-center">
          <AboutUs
            size="lg"
            title="We produce websites and style brands."
            description="We think of a brand as a promise and deliver digital brand experiences
            that users can believe in"
            darkMode={darkMode}
          />
          <AboutUs
            flip
            size="md"
            title="We add purpose."
            description="We think of a brand as a promise and deliver digital brand experiences"
            darkMode={darkMode}
          />
          <AboutUs
            size="sm"
            title="We add purpose."
            description="We think of a brand as a promise and deliver digital brand experiences"
            darkMode={darkMode}
          />
        </div>
      </Section>
      <Section id="3" className="pt-[124px]">
        <WhatWeDo />
      </Section>
      <Section id="4" className="h-screen pt-[124px]">
        <ClientGallery />
      </Section>
      <Section className="flex flex-col justify-center items-center h-screen">
        <div className="space-y-8 w-3/4">
          <Logo className="w-1/3" />
          <p className="text-[4vw] font-semibold leading-[4.4vw] drop-shadow-xl">
            Specialist Creatives, Tech Professionals, Web Producers, and UX
            Designers.
          </p>
          <p className="text-[2.8vw] leading-[3.4vw] text-grey">
            We are WBL. We bring rich, international experience to the art of
            web design
          </p>
        </div>
      </Section>
      <Section id="5" className="pt-[124px] h-screen">
        <SubmissionForm className="relative z-50" />
      </Section>
      <Footer />
    </div>
  );
}
