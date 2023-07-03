import PropTypes from "prop-types";
import classnames from "classnames";

export function Header(props) {
  const { currentSection } = props;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const Button = (props) => {
    const { label, color, sectionId } = props;
    console.log(color);
    console.log(sectionId, "sectionId");
    console.log(currentSection, "currentSection");
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
    <header className="fixed text-white flex items-center justify-end space-x-16 w-full">
      <Button label="About Us" color="green" sectionId="2" />
      <Button label="What We Do" color="blue" sectionId="3" />
      <Button label="Our Clients" color="orange" sectionId="4" />
      <button
        className="text-white uppercase border-4 border-red px-8 py-4 rounded-full"
        onClick={() => scrollToSection("5")}
      >
        Get in touch
      </button>
    </header>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
};
