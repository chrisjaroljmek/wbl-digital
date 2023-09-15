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
    <div
      className={classnames(
        "border-t border-grey w-full border-opacity-40",
        className
      )}
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="my-16 mx-8"
      >
        <div className="mr-8 mb-8 w-fit">
          <p className="relative drop-shadow-xl leading-none whitespace-nowrap z-20 text-3xl lg:text-5xl">
            {title}
          </p>
          <div
            className={classnames(
              "mt-1 w-full",
              hover && color === "blue" && "bg-darkBlue",
              hover && color === "green" && "bg-green",
              hover && color === "red" && "bg-red",
              hover && color === "orange" && "bg-orange",
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
        <p className="text-grey leading-1 text-xl lg:text-3xl">{description}</p>
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};
