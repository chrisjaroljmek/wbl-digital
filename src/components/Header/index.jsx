export function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed text-white flex items-center justify-end space-x-16 w-full">
      <button
        className="text-green uppercase hover:underline underline-offset-8"
        onClick={() => scrollToSection("2")}
      >
        About us
      </button>
      <button
        className="text-blue uppercase hover:underline underline-offset-8"
        onClick={() => scrollToSection("3")}
      >
        What we do
      </button>
      <button
        className="text-orange uppercase hover:underline underline-offset-8"
        onClick={() => scrollToSection("4")}
      >
        Our clients
      </button>
      <button
        className="text-white uppercase border-4 border-red px-8 py-4 rounded-full"
        onClick={() => scrollToSection("5")}
      >
        Get in touch
      </button>
    </header>
  );
}
