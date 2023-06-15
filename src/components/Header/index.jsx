export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed flex items-center justify-end space-x-16 p-4 w-full">
      <button className="uppercase" onClick={() => scrollToSection("aboutUs")}>
        About Us
      </button>
      <button className="uppercase" onClick={() => scrollToSection("whatWeDo")}>
        What We Do
      </button>
      <button
        className="uppercase"
        onClick={() => scrollToSection("ourClients")}
      >
        Our Clients
      </button>
      <button
        className="border-4 border-red-500 px-8 py-4 rounded-full uppercase"
        onClick={() => scrollToSection("getInTouch")}
      >
        Get In Touch
      </button>
    </header>
  );
}
