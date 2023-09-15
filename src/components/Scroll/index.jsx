import PropTypes from "prop-types";
import classnames from "classnames";

import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode, className } = props;

  return (
    <div
      className={classnames(
        "fixed bottom-3 right-0 flex flex-col justify-between items-center w-10 h-52",
        className
      )}
    >
      <div className="transform -rotate-90 uppercase">Scroll</div>
      <img className="w-4" src={darkMode ? arrow : blackArrow} alt="arrow" />
    </div>
  );
}

Scroll.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
