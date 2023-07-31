import PropTypes from "prop-types";
import classnames from "classnames";

import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode, className } = props;

  return (
    <div
      className={classnames(
        "flex flex-col justify-end mb-[2vw] h-[16vw]",
        className
      )}
    >
      <div className="transform -rotate-90 translate-y-[-2.4vw] uppercase text-[1vw]">
        Scroll
      </div>
      <img
        className="h-[12vw]"
        src={darkMode ? arrow : blackArrow}
        alt="arrow"
      />
    </div>
  );
}

Scroll.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
