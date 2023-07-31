import { useState } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

export function Skill(props) {
  const { title, description, className } = props;
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames("border-t border-grey w-full", className)}
    >
      <div className="flex my-16 mx-8">
        <div className="mr-8">
          <p className="text-[4vw] leading-none whitespace-nowrap">{title}</p>
          <div
            className={classnames(
              "h-[2px] mt-0.5 bg-grey",
              hover && "h-[20px]"
            )}
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
