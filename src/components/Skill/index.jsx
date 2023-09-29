import { useState } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

export function Skill(props) {
  const { color, title, description, darkMode, className } = props;
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
        "border-t w-full border-opacity-40",
        darkMode ? "border-grey" : "border-black",
        className
      )}
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="my-16 mx-8"
      >
        <div className="mr-8 mb-8 w-fit">
          {darkMode ? (
            <>
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
            </>
          ) : (
            <p
              className={classnames(
                "relative pb-2 font-black whitespace-nowrap z-20 text-3xl lg:text-6xl bg-gradient-to-br text-transparent bg-clip-text",
                color === "blue" && "from-red to-darkBlue",
                color === "green" && "from-red to-yellow",
                color === "red" && "from-blue to-green",
                color === "orange" && "from-orange to-red"
              )}
            >
              {title}
            </p>
          )}
        </div>
        <p
          className={classnames(
            "leading-1 text-xl lg:text-3xl",
            darkMode ? "text-grey" : "text-black"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

Skill.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
