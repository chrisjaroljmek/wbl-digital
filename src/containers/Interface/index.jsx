import { ColorToggle } from "../../components/ColorToggle";
import { Header } from "../../components/Header";
import { Scroll } from "../../components/Scroll";

export function Interface(props) {
  const { currentSection } = props;

  return (
    <div className="flex flex-col fixed w-full justify-between h-screen">
      <Header currentSection={currentSection} />
      <div className="flex justify-between items-end">
        <ColorToggle className="m-6" />
        <Scroll />
      </div>
    </div>
  );
}
