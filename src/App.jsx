import { useEffect, useState } from "react";

import classnames from "classnames";

import { ColorToggle } from "./components/ColorToggle";
import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";

import { AboutUs } from "./containers/AboutUs";
import { WhatWeDo } from "./containers/WhatWeDo";

import "./assets/fonts/inter.ttf";
import "./App.css";

import logo from "./assets/images/wbl.png";
import envelope from "./assets/icons/envelope.svg";

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
      {/* <Header
        className="fixed top-0 z-40"
        currentSection={currentSection}
        darkMode={darkMode}
      /> */}
      <div className="flex justify-between fixed bottom-0 w-full z-40">
        <ColorToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <button className="lg:hidden">
          <img className="w-12 mr-1" src={envelope} alt="Contact us" />
        </button>
      </div>
      <Scroll className="hidden lg:block" darkMode={darkMode} />
      <Section id="1" className="h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row">
          <img
            className="w-80 lg:w-[400px] mb-6 lg:mb-0 lg:mr-8"
            src={logo}
            alt="WBL"
          />
          <div className="lg:flex lg:flex-col lg:justify-end lg:space-y-2">
            <div className="flex items-end">
              <span className="text-2xl lg:text-4xl">
                Engaging web experiences
              </span>
              <div className="bg-green h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
            <div className="flex items-end">
              <span className="text-2xl lg:text-4xl">
                Purposeful digital solutions
              </span>
              <div className="bg-darkBlue h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
            <div className="flex items-end">
              <span className="text-2xl lg:text-4xl">
                Empowering web design
              </span>
              <div className="bg-red h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="2">
        <AboutUs
          size="lg"
          title="We produce websites and style brands."
          description="We think of a brand as a promise and deliver digital brand experiences
            that users can believe in"
          darkMode={darkMode}
        />
      </Section>
      <Section id="3" className="pt-[124px]">
        <WhatWeDo />
      </Section>
      <Section id="4" className="h-screen"></Section>
      <Section className="flex flex-col justify-center items-center h-screen">
        <div className="space-y-8 w-3/4">
          <img alt="logo" className="w-1/3" src={logo} />
          <p className="font-semibold drop-shadow-xl">
            Specialist Creatives, Tech Professionals, Web Producers, and UX
            Designers.
          </p>
          <p className="text-grey">
            We are WBL. We bring rich, international experience to the art of
            web design
          </p>
        </div>
      </Section>
      <Section id="5" className="pt-[124px] h-screen"></Section>
      {/* <Footer /> */}
    </div>
  );
}
