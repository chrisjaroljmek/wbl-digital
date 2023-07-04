import { ColorToggle } from "../../components/ColorToggle";
import { Header } from "../../components/Header";

export function Interface() {
  return (
    <div className="flex flex-col fixed w-full justify-between h-screen">
      <Header className="p-6" />
      <ColorToggle className="m-6" />
    </div>
  );
}
