import PropTypes from "prop-types";
import classnames from "classnames";

import { Logo } from "../Logo";

export function Header(props) {
  const { currentSection, darkMode, className } = props;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { sectionId: "2", label: "About Us", color: "green" },
    { sectionId: "3", label: "What We Do", color: "blue" },
    { sectionId: "4", label: "Our Clients", color: "orange" },
  ];

  return (
    <header
      className={classnames(
        "flex items-center justify-between w-full p-6",
        darkMode ? "bg-dark-black" : "bg-light-white",
        className
      )}
    >
      <div
        className={classnames(
          "w-[120px] h-[60px] flex items-center transition-opacity duration-1000 ease-in-out",
          currentSection === "1" && "opacity-0",
          currentSection !== "1" && "opacity-1 cursor-pointer"
        )}
        onClick={() => scrollToSection("1")}
      >
        <Logo className="w-[8vw] pb-2" />
      </div>

      <div
        className={classnames(
          "space-x-[4vw] text-[1vw]",
          darkMode ? "text-dark-white" : "text-light-black"
        )}
      >
        {buttons.map(({ sectionId, label, color }, index) => (
          <button
            key={index}
            className={classnames(
              "uppercase hover:underline underline-offset-8",
              currentSection === sectionId &&
                `text-${darkMode ? "dark" : "light"}-${color} underline`
            )}
            onClick={() => scrollToSection(sectionId)}
          >
            {label}
          </button>
        ))}
        <button
          className={classnames(
            "uppercase border-[0.3vw] border-red px-[2.8vw] py-[1.2vw] rounded-full",
            darkMode
              ? "text-dark-white border-dark-red"
              : "text-light-black border-light-red"
          )}
          onClick={() => scrollToSection("5")}
        >
          Get in touch
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
  className: PropTypes.string,
};
