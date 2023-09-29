import { useEffect, useState } from "react";

import classnames from "classnames";

import { ColorToggle } from "./components/ColorToggle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileNav } from "./components/MobileNav";
import { Scroll } from "./components/Scroll";
import { Section } from "./components/Section";
import { Testimonial } from "./components/Testimonial";

import { WhatWeDo } from "./containers/WhatWeDo";

import "./assets/fonts/inter.ttf";
import "./App.css";

import companyOne from "./assets/images/101.svg";
import companyTwo from "./assets/images/circleart.svg";
import companyThree from "./assets/images/munchfit.svg";

import logo from "./assets/images/wbl.png";

import close from "./assets/icons/close.svg";
import closeBlack from "./assets/icons/close-black.svg";
import envelope from "./assets/icons/envelope.svg";
import mobileMenu from "./assets/icons/menu.svg";
import mobileMenuBlack from "./assets/icons/menu-black.svg";

import logoOne from "./assets/logos/biofoods.png";
import logoTwo from "./assets/logos/circle_light.png";
import logoTwoDark from "./assets/logos/circle_dark.png";
import logoThree from "./assets/logos/munchfit_light.png";
import logoThreeDark from "./assets/logos/munchfit_black.png";
import logoFour from "./assets/logos/riviere_light.png";
import logoFourDark from "./assets/logos/riviere_black_276.png";
import logoFive from "./assets/logos/godminster.png";

const companies = [
  {
    name: "Munch Fit",
    description: "Food Delivery",
    img: companyThree,
  },
  {
    name: "Circle Art",
    description: "East African Art",
    img: companyTwo,
  },
  { name: "101 Ways", description: "Climate Sector", img: companyOne },
];

export function App() {
  const [currentSection, setCurrentSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark-bg");
    } else {
      document.body.classList.remove("bg-dark-bg");
    }
  }, [darkMode]);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={classnames(
        "relative",
        darkMode
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text arial"
      )}
    >
      <Header
        className="hidden lg:flex fixed top-0 z-50"
        currentSection={currentSection}
        darkMode={darkMode}
      />
      <button
        className="fixed top-0 right-0 z-50 lg:hidden"
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <img
            className="w-12 mr-1 mt-1"
            src={darkMode ? close : closeBlack}
            alt="Close"
          />
        ) : (
          <img
            className="w-12 mr-1 mt-1"
            src={darkMode ? mobileMenu : mobileMenuBlack}
            alt="Menu"
          />
        )}
      </button>
      {menu && (
        <MobileNav
          menu={menu}
          setMenu={setMenu}
          scrollTo={scrollToSection}
          darkMode={darkMode}
        />
      )}
      <div className="flex justify-between items-end fixed bottom-0 w-full z-30">
        <ColorToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <button className="lg:hidden" onClick={() => scrollToSection("5")}>
          <img className="w-12 mr-1" src={envelope} alt="Contact us" />
        </button>
      </div>
      <Scroll
        className="hidden lg:flex"
        darkMode={darkMode}
        currentSection={currentSection}
      />
      <Section id="1" className="h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row">
          <img
            className="w-80 lg:w-[400px] mb-6 lg:mb-0 lg:mr-8"
            src={logo}
            alt="WBL"
          />
          <div className="lg:flex lg:flex-col lg:justify-end lg:space-y-2">
            <div className="flex items-end">
              <span
                className={classnames(
                  "text-2xl lg:text-4xl",
                  !darkMode && "font-semibold tracking-wide"
                )}
              >
                Engaging web experiences
              </span>
              <div className="bg-green h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
            <div className="flex items-end">
              <span
                className={classnames(
                  "text-2xl lg:text-4xl",
                  !darkMode && "font-semibold tracking-wide"
                )}
              >
                Purposeful digital solutions
              </span>
              <div className="bg-darkBlue h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
            <div className="flex items-end">
              <span
                className={classnames(
                  "text-2xl lg:text-4xl",
                  !darkMode && "font-semibold tracking-wide"
                )}
              >
                Empowering web design
              </span>
              <div className="bg-red h-2 w-2 rounded-full mb-1.5 ml-1"></div>
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="flex flex-col items-center lg:items-start lg:px-64 pt-24 lg:pt-28"
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
        <div className="lg:flex lg:justify-end lg:w-full ml-36 lg:ml-0 relative mb-32 lg:mb-48">
          <div className="w-36 h-36 lg:w-64 lg:h-64 flex items-center justify-center bg-gradient-to-tr from-red to-orange rounded-full">
            <div
              className={classnames(
                "h-[136px] lg:h-[248px] w-[136px] lg:w-[248px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div
            className={classnames(
              "absolute top-4 lg:top-20 right-12 w-[300px] text-right lg:text-left drop-shadow-2xl",
              darkMode ? "lg:right-[260px]" : "lg:right-[320px]"
            )}
          >
            <p className="font-semibold text-3xl lg:text-5xl lg:w-[600px]">
              We are creatives, coders and strategists.
            </p>
            <p className="text-grey text-3xl mt-2 ml-48 lg:ml-0 hidden lg:block lg:w-[400px]">
              We cross disciplines and cross borders. We are your team.
            </p>
          </div>
        </div>
        <div className="flex relative mb-32 lg:mb-36 mr-32 lg:mr-0">
          <div className="w-24 h-24 lg:w-48 lg:h-48 flex items-center justify-center bg-gradient-to-tr from-green to-yellow rounded-full">
            <div
              className={classnames(
                "h-[88px] w-[88px] lg:h-[184px] lg:w-[184px]",
                darkMode === true && "bg-black rounded-full",
                darkMode === false && "bg-white rounded-full"
              )}
            ></div>
          </div>
          <div className="absolute top-8 lg:top-16 lg:mt-2 left-6 lg:left-20">
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
      <Section id="3" className="mb-48 lg:mt-28 lg:pt-28 lg:mb-16">
        <WhatWeDo darkMode={darkMode} />
      </Section>
      <Section
        id="4"
        className="flex flex-col lg:block items-center p-12 lg:px-64 lg:pt-28"
      >
        <p className="font-semibold text-3xl lg:text-5xl text-right w-full mb-8 lg:mb-12">
          Our clients.
        </p>
        {/* Munch Fit */}
        <div className="relative h-[455px] w-[280px] lg:h-[572px] lg:w-[440px] mb-12">
          <div className="lg:flex items-center bottom-0 lg:bottom-auto lg:top-0 whitespace-nowrap absolute right-0 w-64 lg:w-96 object-cover">
            <img
              className="shadow-2xl relative z-30"
              src={companies[0].img}
              alt={companies[0].name}
            />
            <div className="mt-4 lg:mt-0 lg:ml-12">
              <p className="text-5xl font-semibold">{companies[0].name}</p>
              <p className="text-2xl">{companies[0].description}</p>
            </div>
          </div>
          <div className="absolute lg:bottom-0 flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue w-[256px] h-[340px] lg:h-[510px] lg:w-96">
            <div
              className={classnames(
                "w-[248px] lg:w-[376px] h-[332px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
        {/* 101 Ways */}
        <div className="relative h-[455px] lg:h-[572px] w-[280px] lg:w-full mb-12">
          <div className="absolute bottom-0 lg:right-80 lg:flex items-center w-64 lg:w-96 whitespace-nowrap object-cover">
            <div className="hidden lg:block lg:mr-12">
              <p className="text-5xl font-semibold">{companies[2].name}</p>
              <p className="text-2xl">{companies[2].description}</p>
            </div>
            <img
              className="shadow-2xl relative z-30"
              src={companies[2].img}
              alt={companies[2].name}
            />
            <div className="mt-4 lg:hidden lg:mr-12 text-right">
              <p className="text-4xl font-semibold">{companies[2].name}</p>
              <p className="text-2xl">{companies[2].description}</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex items-center justify-center h-[340px] lg:h-[510px] w-[256px] lg:w-96 bg-gradient-to-tr from-red to-orange">
            <div
              className={classnames(
                "w-[248px] lg:w-[376px] h-[332px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
        {/* New Circle Art */}
        <div className="relative h-[455px] w-[280px] lg:h-[572px] lg:w-[440px]">
          <div className="lg:flex items-center bottom-0 lg:bottom-0 whitespace-nowrap absolute right-0 w-64 lg:w-96 object-cover">
            <img
              className="shadow-2xl relative z-30"
              src={companies[1].img}
              alt={companies[1].name}
            />
            <div className="mt-4 lg:ml-12">
              <p className="text-5xl font-semibold">{companies[1].name}</p>
              <p className="text-2xl">{companies[1].description}</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex items-center justify-center bg-gradient-to-tr from-green to-yellow w-[256px] h-[340px] lg:h-[510px] lg:w-96">
            <div
              className={classnames(
                "w-[248px] lg:w-[376px] h-[332px] lg:h-[502px]",
                darkMode === true && "bg-black",
                darkMode === false && "bg-white"
              )}
            ></div>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col justify-center items-center h-screen px-16 lg:px-64">
        <div className="space-y-4 lg:space-y-10">
          <img
            className="w-80 lg:w-[400px] mb-6 lg:mb-0 lg:mr-8"
            src={logo}
            alt="WBL"
          />
          <p className="font-semibold text-3xl lg:text-5xl">
            Specialist Creatives, Tech Professionals, Web Producers, and UX
            Designers.
          </p>
          <p className="text-grey text-xl lg:text-3xl">
            We are WBL. We bring rich, international experience to the art of
            web design
          </p>
        </div>
      </Section>
      <Section className="space-y-4 lg:px-64">
        <Testimonial
          name="Gacheri Ndumba, Well Made Strategy"
          quote="We hired WBL to handle our networks webpage redesign. He not only delivered a sleek new site but also masterfully navigated the needs and interests of 70+ organisations. The after service and support once we began using the website was beyond excellent."
        />
        <Testimonial
          name="Sir George Hollingbery, Arndilly Fishing"
          quote="Fantastic Christian. Thanks for all the effort …We could do more on it and tbh, we won’t improve it a lot."
        />
        <Testimonial
          name="Spencer Skinner, Active Partners"
          quote="WBL provides a one-stop-shop for those seeking a stylish/brand driven online presence. It is rare to find such a good grasp of brand, visual design, copy and commercial nous for the rates they charge. Great value."
        />
        <Testimonial
          name="Andrew Martin, Ajar Technology"
          quote="Everyone is extremely impressed with the quality of our brand and marketing collateral and website. I feel very comfortable pitching at the highest level with pride and confidence in our story which you have shaped and moulded and enabled us to communicate."
        />
        <Testimonial
          name="Thuy Do, Chloe Mansfield Fund"
          quote="The final product is fantastic – which is a reflection of the hard work and skill that has been invested. I am really excited to launch it!"
        />
      </Section>
      <Section
        className="flex flex-col justify-around items-start h-screen px-16 lg:px-64"
        id="5"
      >
        <div>
          <p className="font-semibold text-5xl mb-8">Get in touch.</p>
          <div className="space-y-4">
            <p className="text-grey text-3xl">hello@wbldigital.io</p>
            <p className="text-grey text-3xl">+44 7815 786 048</p>
            <p className="text-grey text-3xl">
              WBL Soho Works 2 Television Centre Building 101 Wood Lane London
              W12 7FR
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-x-8 lg:grid-cols-5 lg:grid-rows-1 items-center place-items-center justify-center w-full">
          <img className="w-fit h-24" src={logoOne} />
          <img
            className="w-fit max-h-24"
            src={darkMode ? logoTwo : logoTwoDark}
          />
          <img
            className="w-fit max-h-20"
            src={darkMode ? logoThree : logoThreeDark}
          />
          <img
            className="w-fit max-h-20"
            src={darkMode ? logoFour : logoFourDark}
          />
          <img className="w-fit max-h-20" src={logoFive} />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
