import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

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

  console.log("currentSection", currentSection);

  return (
    <div>
      <Header />
      <section id="1" className="h-screen">
        <Logo size="xl" />
      </section>
      <section id="2" className="h-screen">
        <h2>About us</h2>
      </section>
      <section id="3" className="h-screen">
        <h2>What we do</h2>
      </section>
      <section id="4" className="h-screen">
        <h2>Our clients</h2>
      </section>
      <section id="5" className="h-screen">
        <h2>Get in touch</h2>
      </section>
    </div>
  );
}
