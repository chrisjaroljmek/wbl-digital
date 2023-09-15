import PropTypes from "prop-types";
import classnames from "classnames";

import logo from "../../assets/images/wbl.png";

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
        darkMode ? "bg-dark-bg" : "bg-light-bg",

        className
      )}
    >
      <div
        className={classnames(
          "flex items-center transition-opacity duration-1000 ease-in-out",
          currentSection === "1" && "opacity-0",
          currentSection !== "1" && "opacity-1 cursor-pointer"
        )}
        onClick={() => scrollToSection("1")}
      >
        <img alt="logo" src={logo} />
      </div>

      <div>
        {buttons.map(({ sectionId, label, color }, index) => (
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
          className={classnames(
            "uppercase border-red rounded-full",
            darkMode
              ? "text-dark-text border-red"
              : "text-light-text border-red"
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
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
