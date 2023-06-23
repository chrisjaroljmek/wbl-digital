import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

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

  console.log("currentSection", currentSection);

  return (
    <div>
      <Header />
      <section id="1" className="bg-black h-screen">
        <h2 className="text-white">Landing Page</h2>
        <Logo size="xl" />
      </section>
      <section id="2" className="bg-black h-screen">
        <h2 className="text-white">About us</h2>
      </section>
      <section id="3" className="bg-black h-screen">
        <h2 className="text-white">What we do</h2>
      </section>
      <section id="4" className="bg-black h-screen">
        <h2 className="text-white">Our clients</h2>
      </section>
      <section id="5" className="bg-black h-screen">
        <h2 className="text-white">Get in touch</h2>
      </section>
    </div>
  );
}
