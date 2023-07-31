import PropTypes from "prop-types";
import classnames from "classnames";

import { Shape } from "../../components/Shape";

export function AboutUs(props) {
  const { title, description, shape, darkMode, className } = props;

  return (
    <div className={classnames("flex w-8/12 relative mb-48", className)}>
      <Shape shape={shape} darkMode={darkMode} />
      <div className="absolute top-[10vw] left-[17vw]">
        <p className="text-[4vw] font-semibold leading-[4.5vw] w-[44vw] drop-shadow-xl">
          {title}
        </p>
        <p className="text-[2.8vw] leading-[3.5vw] ml-[9vw] mt-[1.5vw] text-grey w-[50vw]">
          {description}
        </p>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(["circle", "square"]).isRequired,
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
