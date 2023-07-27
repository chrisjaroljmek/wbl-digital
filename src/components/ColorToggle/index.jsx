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
        "h-[3vw] flex space-x-[0.6vw] cursor-pointer",
        className
      )}
      onClick={onColorToggle}
    >
      <img src={sun} alt="light" />
      <img src={moon} alt="dark" />
    </div>
  );
}

ColorToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  className: PropTypes.string,
};
