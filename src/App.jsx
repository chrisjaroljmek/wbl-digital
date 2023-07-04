import { useEffect, useState } from "react";

import { Dot } from "./components/Dot";
import { Logo } from "./components/Logo";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { Shape } from "./components/Shape";

import { Interface } from "./containers/Interface";

import "./App.css";

export function App() {
  const [currentSection, setCurrentSection] = useState("");

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
    <div>
      <Interface />
      <Section id="1">
        <div className="flex items-center justify-center h-full pb-8">
          <Logo size="xl" />
          <div className="flex flex-col text-6xl pt-28 space-y-4 tracking-wide ml-4">
            <div className="flex items-end">
              <span>Engaging web experiences</span>
              <Dot color="green" />
            </div>
            <div className="flex items-end">
              <span>Purposeful digital solutions</span>
              <Dot color="blue" />
            </div>
            <div className="flex items-end">
              <span>Empowering web design</span>
              <Dot color="red" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="2" className="pt-[124px]">
        <SectionHeader text="We produce websites and style brands." />
        <SectionHeader text="We add purpose." />
        <SectionHeader
          sub
          text="We think of a brand as a promise and deliver digital brand experiences that users can believe in."
        />
        <SectionHeader
          sub
          text="We think of a brand as a promise and deliver digital brand experiences that users can believe in."
        />
        <Shape shape="circle" />
      </Section>
      <Section id="3" title="What We Do" className="pt-[124px]" />
      <Section id="4" title="Our Clients" className="pt-[124px]" />
      <Section id="5" title="Get In Touch" className="pt-[124px]" />
    </div>
  );
}
