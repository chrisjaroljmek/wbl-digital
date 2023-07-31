import { useEffect, useState } from "react";

import classnames from "classnames";

import { Clients } from "./components/Clients";
import { ColorToggle } from "./components/ColorToggle";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";

import { AboutUs } from "./containers/AboutUs";
import { SubmissionForm } from "./containers/SubmissionForm";
import { WhatWeDo } from "./containers/WhatWeDo";

import companyOne from "./assets/images/101.svg";
import companyTwo from "./assets/images/circleart.svg";
import companyThree from "./assets/images/munchfit.svg";

import "./assets/fonts/inter.ttf";
import "./App.css";

const clients = [
  { image: companyOne, name: "101 Ways", type: "Climate Sector Campaign" },
  { image: companyTwo, name: "Circle Art", type: "East Africa Art Gallery" },
  { image: companyThree, name: "MunchFit", type: "Food Delivery E-Commerce" },
];

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
      <Section id="4" className="pt-[124px]">
        {clients.map(({ image, name, type }, index) => {
          return <Clients image={image} name={name} type={type} key={index} />;
        })}
      </Section>
      <Section id="5" className="flex justify-center pt-[124px] h-screen">
        <div className="mr-24">
          <p className="text-[4vw] font-semibold leading-[4.5vw]  drop-shadow-xl">
            Get in touch.
          </p>
          <p className="text-[2.8vw] leading-[3.5vw] mt-[1.5vw] text-grey ">
            hello@wbldigital.io
          </p>
        </div>
        <SubmissionForm className="relative z-50 max-w-[500px]" />
      </Section>
    </div>
  );
}
