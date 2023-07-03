import { useEffect, useState } from "react";

import { Dot } from "./components/Dot";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { Shape } from "./components/Shape";

import "./App.css";

export function App() {
  // declare state variable with an initial value of an empty string
  const [currentSection, setCurrentSection] = useState("");

  // define useEffect to run after the component is rendered for the first time
  useEffect(() => {
    // declare an event handler to be executed whenever the scroll event is triggered
    const onScroll = () => {
      // retrieve all the section elements from the DOM
      const sections = document.querySelectorAll("section");
      // initialise an empty string variable that will store the id of the current section
      let current = "";

      // iterate over each section
      sections.forEach((section) => {
        // retrieve the distance between the top of the section and the top of the nearest positioned ancestor element
        const sectionTop = section.offsetTop;
        // retrieve the height of the section element
        const sectionHeight = section.offsetHeight;
        // retrieve the current scroll position of the window
        const scrollPosition = window.scrollY;

        // check if the scroll position is greater than or equal to the top position of the section minus one-fifth of its height
        // determines if a section is in the viewport
        if (scrollPosition >= sectionTop - sectionHeight / 5) {
          // if true, sets the current variable to the id of the current section
          current = section.id;
        }
      });

      // updates the state variable currentSection with the current variable and triggers a re-render of the component
      setCurrentSection(current);
    };

    // adds an event listener to the scroll event of the window that calls onScroll
    window.addEventListener("scroll", onScroll);

    // cleanup function that removes the event listener when the component is unmounted or the effect is cleaned up
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Header currentSection={currentSection} />
      <Section id="1">
        <div className="flex items-center justify-center h-full">
          <Logo size="xl" />
          <div className="flex flex-col text-6xl pt-24 space-y-2 font-light tracking-wider">
            <div className="flex items-end">
              <span>Purposeful products</span>
              <Dot color="green" />
            </div>
            <div className="flex items-end">
              <span>Lorem ipsum</span>
              <Dot color="blue" />
            </div>
            <div className="flex items-end">
              <span>Web designs</span>
              <Dot color="red" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="2">
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
      <Section id="3" title="What We Do" />
      <Section id="4" title="Our Clients" />
      <Section id="5" title="Get In Touch" />
    </div>
  );
}
