import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";

export function ColorToggle() {
  return (
    <div className="flex">
      <img src={sun} alt="light" />
      <img src={moon} alt="dark" />
    </div>
  );
}
