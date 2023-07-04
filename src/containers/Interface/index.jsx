import { ColorToggle } from "../../components/ColorToggle";
import { Header } from "../../components/Header";
import { Scroll } from "../../components/Scroll";

export function Interface() {
  return (
    <div className="flex flex-col fixed w-full justify-between h-screen">
      <Header className="p-6" />
      <div className="flex justify-between items-end">
        <ColorToggle className="m-6" />
        <Scroll />
      </div>
    </div>
  );
}
