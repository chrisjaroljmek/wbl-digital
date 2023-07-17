import PropTypes from "prop-types";
import classnames from "classnames";

import { Logo } from "../Logo";

export function Header(props) {
  const { currentSection, className } = props;

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
        "flex items-center justify-between w-full bg-black p-6",
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
      <div className="space-x-[4vw] text-[1vw] text-white">
        {buttons.map(({ sectionId, label, color }) => (
          <button
            key={index}
            className={classnames(
              "uppercase hover:underline underline-offset-8",
              currentSection === sectionId && `text-${color} underline`
            )}
            onClick={() => scrollToSection(sectionId)}
          >
            {label}
          </button>
        ))}
        <button
          className="text-white uppercase border-[0.3vw] border-red px-[2.8vw] py-[1.2vw] rounded-full"
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
