import { useEffect, useState } from "react";

import classnames from "classnames";

import { Clients } from "./components/Clients";
import { ColorToggle } from "./components/ColorToggle";
import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";

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
      <div className="flex justify-between items-end fixed bottom-0 w-full z-40">
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
        <div className="flex relative mb-48">
          <div className="w-48 h-48 display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue rounded-full">
            <div
              className={classnames(
                "w-[184px] h-[184px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute">
            <p className="font-semibold text-3xl">
              We produce websites and style brands.
            </p>
            <p className="text-grey text-base">
              We think of a brand as a promise. We create digital brand
              experiences for users to believe in.
            </p>
          </div>
        </div>
        <div className="flex justify-end relative mb-48">
          <div className="w-36 h-36 display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue rounded-full">
            <div
              className={classnames(
                "h-[136px] w-[136px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute">
            <p className="font-semibold text-3xl">We add purpose.</p>
            <p className="text-grey text-base">
              We gel strategy with creativity. Our web products display form and
              deliver function.
            </p>
          </div>
        </div>
        <div className="flex relative mb-48">
          <div className="w-24 h-24 display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue rounded-full">
            <div
              className={classnames(
                "h-[88px] w-[88px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute">
            <p className="font-semibold text-3xl">
              We are creatives, coders and strategists.
            </p>
            <p className="ml-4 text-grey text-base">
              We cross disciplines and cross borders. We are your team.
            </p>
          </div>
        </div>
      </Section>
      <Section id="3">
        <WhatWeDo />
      </Section>
      <Section id="4">
        <Clients />
      </Section>
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
      <Section id="5">Contact Us</Section>
      <Footer />
    </div>
  );
}
