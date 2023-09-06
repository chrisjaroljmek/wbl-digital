import PropTypes from "prop-types";
import classnames from "classnames";

import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode, className } = props;

  return (
    <div className={classnames("flex flex-col justify-end", className)}>
      <div className="transform -rotate-90 uppercase">Scroll</div>
      <img src={darkMode ? arrow : blackArrow} alt="arrow" />
    </div>
  );
}

Scroll.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
