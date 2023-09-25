import PropTypes from "prop-types";
import classnames from "classnames";

import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode, className } = props;

  return (
    <div
      className={classnames(
        "fixed bottom-4 right-0 flex flex-col items-center justify-center h-56",
        className
      )}
    >
      <div className="transform -rotate-90 uppercase w-fit mb-8">Scroll</div>
      <img className="w-4" src={darkMode ? arrow : blackArrow} alt="arrow" />
    </div>
  );
}

Scroll.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
