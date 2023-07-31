import { useState } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

export function Skill(props) {
  const { color, title, description, className } = props;
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={classnames("border-t border-grey w-full", className)}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex my-16 mx-8"
      >
        <div className="mr-8">
          <p className="relative drop-shadow-xl text-[4vw] leading-none whitespace-nowrap z-50">
            {title}
          </p>
          <div
            className={classnames(
              "mt-1",
              hover && color === "blue" && "bg-darkBlue",
              hover && color === "green" && "bg-green",
              hover && color === "red" && "bg-red",
              !hover && "bg-grey"
            )}
            style={{
              height: "0.125rem",
              transition: "transform 0.5s ease",
              transformOrigin: "bottom",
              transform: `scaleY(${hover ? 8 : 1})`,
            }}
          ></div>
        </div>
        <p className="text-[2.8vw] text-grey leading-none">{description}</p>
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};
