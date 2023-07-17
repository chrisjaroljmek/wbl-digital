import { ColorToggle } from "../../components/ColorToggle";
import { Header } from "../../components/Header";
import { Scroll } from "../../components/Scroll";

export function Interface(props) {
  const { currentSection, darkMode, setDarkMode } = props;

  return (
    <div className="flex flex-col fixed w-full justify-between h-screen z-50">
      <Header currentSection={currentSection} darkMode={darkMode} />
      <div className="flex justify-between items-end">
        <ColorToggle
          className="m-6"
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Scroll darkMode={darkMode} />
      </div>
    </div>
  );
}
