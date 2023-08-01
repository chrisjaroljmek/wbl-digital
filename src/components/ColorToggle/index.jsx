import PropTypes from "prop-types";
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
      className={classnames(
        "flex space-x-[1vw] cursor-pointer p-2 drop-shadow-sm rounded-full",
        darkMode ? "bg-dark-bg" : "bg-light-bg",
        className
      )}
      onClick={onColorToggle}
    >
      <img
        className={classnames("h-[3vw]", darkMode && "opacity-40")}
        src={sun}
        alt="light"
      />
      <img
        className={classnames("h-[3vw]", !darkMode && "opacity-40")}
        src={moon}
        alt="dark"
      />
    </div>
  );
}

ColorToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  className: PropTypes.string,
};
