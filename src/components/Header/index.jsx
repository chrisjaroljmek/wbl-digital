import PropTypes from "prop-types";
import classnames from "classnames";

import { Logo } from "../Logo";

export function Header(props) {
  const { currentSection, className } = props;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const Button = (props) => {
    const { label, color, currentSection, sectionId } = props;

    return (
      <button
        className={classnames(
          "uppercase hover:underline underline-offset-8",
          currentSection === sectionId && `text-${color} underline`
        )}
        onClick={() => scrollToSection(sectionId)}
      >
        {label}
      </button>
    );
  };

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
        <Logo size="md" />
      </div>

      <div className="space-x-20 text-xl text-white">
        <Button
          label="About Us"
          color="green"
          sectionId="2"
          currentSection={currentSection}
        />
        <Button
          label="What We Do"
          color="blue"
          sectionId="3"
          currentSection={currentSection}
        />
        <Button
          label="Our Clients"
          color="orange"
          sectionId="4"
          currentSection={currentSection}
        />
        <button
          className="text-white uppercase border-4 border-red px-12 py-5 rounded-full"
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
