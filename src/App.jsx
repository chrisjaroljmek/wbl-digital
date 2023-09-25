import { useEffect, useState } from "react";

import classnames from "classnames";

import { ColorToggle } from "./components/ColorToggle";
import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";

import { WhatWeDo } from "./containers/WhatWeDo";

import "./assets/fonts/inter.ttf";
import "./App.css";

import companyOne from "./assets/images/101.svg";
import companyTwo from "./assets/images/circleart.svg";
import companyThree from "./assets/images/munchfit.svg";

import logo from "./assets/images/wbl.png";

import envelope from "./assets/icons/envelope.svg";

import logoOne from "./assets/logos/biofoods.png";
import logoTwo from "./assets/logos/circle_light.png";
import logoThree from "./assets/logos/munchfit_light.png";
import logoFour from "./assets/logos/riviere_light.png";
import logoFive from "./assets/logos/godminster.png";

const companies = [
  {
    name: "Munch Fit",
    description: "Food Delivery E-Commerce",
    img: companyThree,
  },
  {
    name: "Circle Art Gallery",
    description: "East African Art",
    img: companyTwo,
  },
  { name: "101 Ways", description: "Climate Sector Campaign", img: companyOne },
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
      {/* <Header
        className="hidden lg:block fixed top-0 z-40"
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
      <Section
        className="flex flex-col items-center lg:items-start lg:px-64"
        id="2"
      >
        <div className="flex relative mb-32 lg:mb-48">
          <div className="w-48 h-48 lg:w-80 lg:h-80 mr-32 lg:mr-0 flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue rounded-full">
            <div
              className={classnames(
                "w-[184px] lg:w-[312px] h-[184px] lg:h-[312px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute top-10 left-16 lg:top-28 lg:left-32">
            <p className="font-semibold text-3xl lg:text-5xl drop-shadow-2xl lg:w-[500px]">
              We produce websites and style brands.
            </p>
            <p className="text-grey text-3xl mt-2 ml-48 hidden lg:block min-w-[500px]">
              We think of a brand as a promise. We create digital brand
              experiences for users to believe in.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-end lg:w-full ml-32 lg:ml-0 relative mb-32 lg:mb-48">
          <div className="w-36 h-36 lg:w-64 lg:h-64 flex items-center justify-center bg-gradient-to-tr from-red to-orange rounded-full">
            <div
              className={classnames(
                "h-[136px] lg:h-[248px] w-[136px] lg:w-[248px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute top-4 right-12 lg:top-20 lg:right-[260px] w-[300px] text-right lg:text-left drop-shadow-2xl">
            <p className="font-semibold text-3xl lg:text-5xl lg:w-[600px]">
              We are creatives, coders and strategists.
            </p>
            <p className="text-grey text-3xl mt-2 ml-48 lg:ml-0 hidden lg:block lg:w-[400px]">
              We cross disciplines and cross borders. We are your team.
            </p>
          </div>
        </div>
        <div className="flex relative mb-32 lg:mb-64 mr-32 lg:mr-0">
          <div className="w-24 h-24 lg:w-48 lg:h-48 flex items-center justify-center bg-gradient-to-tr from-green to-yellow rounded-full">
            <div
              className={classnames(
                "h-[88px] w-[88px] lg:h-[184px] lg:w-[184px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute top-8 lg:top-16 lg:mt-2 left-12 lg:left-20">
            <p className="font-semibold text-3xl lg:text-5xl whitespace-nowrap">
              We add purpose.
            </p>
            <p className="text-grey text-3xl mt-2 ml-48 lg:ml-32 hidden lg:block w-[500px]">
              We gel strategy with creativity. Our web products display form and
              deliver function.
            </p>
          </div>
        </div>
      </Section>
      <Section id="3" className="mb-48">
        <WhatWeDo />
      </Section>
      <Section id="4" className="lg:px-40">
        <p className="font-semibold text-3xl lg:text-5xl text-right w-full">
          Our clients.
        </p>
        <div className="relative h-[572px] w-[440px] mb-12">
          <div className="flex items-center whitespace-nowrap absolute right-0 w-96 object-cover z-40 shadow-2xl">
            <img src={companies[0].img} alt={companies[0].name} />
            <div className="ml-12">
              <p className="text-4xl font-semibold">{companies[0].name}</p>
              <p className="text-2xl">{companies[0].description}</p>
            </div>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue h-[510px] w-96">
            <div
              className={classnames(
                "w-[184px] lg:w-[376px] h-[184px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
        <div className="relative h-[572px] w-full mb-12">
          <div className="flex items-center whitespace-nowrap absolute right-16 object-cover z-40 shadow-2xl">
            <div className="mr-12 text-right">
              <p className="text-4xl font-semibold">{companies[2].name}</p>
              <p className="text-2xl">{companies[2].description}</p>
            </div>
            <img
              className="w-96"
              src={companies[2].img}
              alt={companies[2].name}
            />
          </div>
          <div className="absolute bottom-0 right-0 flex items-center justify-center bg-gradient-to-tr from-red to-orange h-[510px] w-96">
            <div
              className={classnames(
                "w-[184px] lg:w-[376px] h-[184px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
        <div className="relative h-[572px] w-[440px] mb-12">
          <div className="flex items-center whitespace-nowrap absolute right-0 w-96 object-cover z-40 shadow-2xl">
            <img src={companies[1].img} alt={companies[1].name} />
            <div className="ml-12">
              <p className="text-4xl font-semibold">{companies[1].name}</p>
              <p className="text-2xl">{companies[1].description}</p>
            </div>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center bg-gradient-to-tr from-green to-yellow h-[510px] w-96">
            <div
              className={classnames(
                "w-[184px] lg:w-[376px] h-[184px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col justify-center items-center h-screen px-48">
        <div className="space-y-10">
          <img
            className="w-80 lg:w-[400px] mb-6 lg:mb-0 lg:mr-8"
            src={logo}
            alt="WBL"
          />
          <p className="font-semibold text-5xl">
            Specialist Creatives, Tech Professionals, Web Producers, and UX
            Designers.
          </p>
          <p className="text-grey text-3xl">
            We are WBL. We bring rich, international experience to the art of
            web design
          </p>
        </div>
      </Section>
      <Section
        className="flex flex-col justify-around items-start h-screen px-48"
        id="5"
      >
        <div>
          <p className="font-semibold text-5xl mb-8">Get in touch.</p>
          <div className="space-y-4">
            <p className="text-grey text-3xl">
              WBL Soho Works 2 Television Centre Building, 101 Wood Lane London
              W12 7FR
            </p>
            <p className="text-grey text-3xl">hello@wbldigital.io</p>
            <p className="text-grey text-3xl">+44 7815 786 048</p>
            <p className="text-grey text-3xl">wbldigital.io</p>
          </div>
        </div>
        {darkMode && (
          <div className="flex items-center justify-between w-full">
            <img className="h-24" src={logoOne} />
            <img className="max-h-24" src={logoTwo} />
            <img className="max-w-fit max-h-12" src={logoThree} />
            <img className="max-w-fit max-h-20" src={logoFour} />
            <img className="max-w-fit max-h-20" src={logoFive} />
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
}
