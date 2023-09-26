import PropTypes from "prop-types";
import classnames from "classnames";

import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode, currentSection, className } = props;

  return currentSection !== "5" ? (
    <div
      className={classnames(
        "fixed bottom-4 right-0 flex flex-col items-center justify-center h-56",
        className
      )}
    >
      <div className="transform -rotate-90 uppercase w-fit mb-8">Scroll</div>
      <img className="w-4" src={darkMode ? arrow : blackArrow} alt="arrow" />
    </div>
  ) : (
    <div
      className={classnames(
        "fixed flex flex-col bottom-16 right-0 h-56 items-center justify-between w-16",
        className
      )}
    >
      <img
        className="transform -rotate-180 w-4"
        src={darkMode ? arrow : blackArrow}
        alt="arrow"
      />
      <div className="transform -rotate-90 uppercase whitespace-nowrap">
        Back to top
      </div>
    </div>
  );
}

Scroll.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  currentSection: PropTypes.string.isRequired,
  className: PropTypes.string,
};
