import { useEffect, useState } from "react";

import classnames from "classnames";

import { Logo } from "./components/Logo";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { Shape } from "./components/Shape";

import { Interface } from "./containers/Interface";

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
        darkMode
          ? "bg-dark-black text-dark-white"
          : "bg-light-white text-light-black"
      )}
    >
      <Interface
        currentSection={currentSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Section id="1">
        <div className="flex items-center justify-center h-full">
          <Logo className="w-4/12 mr-[1.5vw]" />
          <div className="flex flex-col justify-center h-full space-y-[1vw] text-[2.5vw] leading-none tracking-wide whitespace-nowrap pt-[4.5vw]">
            <div className="flex items-end">
              Engaging web experiences
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-green mb-[0.4vw] ml-[0.2vw]"></span>
            </div>
            <div className="flex items-end">
              <span>Purposeful digital solutions</span>
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-darkBlue mb-[0.4vw] ml-[0.2vw]"></span>
            </div>
            <div className="flex items-end">
              <span>Empowering web design</span>
              <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-red mb-[0.4vw] ml-[0.2vw]"></span>
            </div>
          </div>
        </div>
      </Section>
      <Section id="2" className="pt-[124px]">
        <div className="border border-red relative">
          <SectionHeader
            className="absolute top-[100px] left-[100px]"
            text="We produce websites and style brands."
          />
          <SectionHeader
            className="absolute top-0 left-0"
            sub
            text="We think of a brand as a promise and deliver digital brand experiences that users can believe in."
          />
          <Shape className="absolute top-0 left-0 h-96 w-96" shape="square" />
        </div>
        {/* <div>
          <SectionHeader text="We produce websites and style brands." />
          <SectionHeader
            sub
            text="We think of a brand as a promise and deliver digital brand experiences that users can believe in."
          />
          <Shape shape="circle" />
        </div>
        <div>
          <SectionHeader text="We add purpose." />
          <SectionHeader
            sub
            text="We think of a brand as a promise and deliver digital brand experiences that users can believe in."
          />
          <Shape shape="diamond" />
        </div> */}
      </Section>
      <Section id="3" title="What We Do" className="pt-[124px]" />
      <Section id="4" title="Our Clients" className="pt-[124px]" />
      <Section id="5" title="Get In Touch" className="pt-[124px]" />
    </div>
  );
}
