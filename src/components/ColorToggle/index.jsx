import PropTypes from "prop-types";
import classnames from "classnames";

import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";

export function ColorToggle(props) {
  const { setDarkMode, className } = props;

  return (
    <div
      className={classnames(
        "cursor-pointer p-2 drop-shadow-sm rounded-full",
        className
      )}
    >
      <img
        className="mb-2"
        src={sun}
        alt="Sun"
        onClick={() => setDarkMode(false)}
      />
      <img src={moon} alt="Moon" onClick={() => setDarkMode(true)} />
    </div>
  );
}

ColorToggle.propTypes = {
  setDarkMode: PropTypes.func.isRequired,
  className: PropTypes.string,
};
