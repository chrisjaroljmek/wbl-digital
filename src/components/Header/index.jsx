export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed text-white">
      <button onClick={() => scrollToSection("2")}>About us</button>
      <button onClick={() => scrollToSection("3")}>What we do</button>
      <button onClick={() => scrollToSection("4")}>Our clients</button>
      <button onClick={() => scrollToSection("5")}>Get in touch</button>
    </header>
  );
}
