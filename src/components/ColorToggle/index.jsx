import classnames from "classnames";

import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";

export function ColorToggle(props) {
  const { darkMode, setDarkMode, className } = props;

  const onColorToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={classnames("flex space-x-2", className)}
      onClick={onColorToggle}
    >
      <img className="h-12 cursor-pointer" src={sun} alt="light" />
      <img className="h-12 cursor-pointer" src={moon} alt="dark" />
    </div>
  );
}
