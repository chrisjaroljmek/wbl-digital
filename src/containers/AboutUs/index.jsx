import PropTypes from "prop-types";
import classnames from "classnames";

import { Shape } from "../../components/Shape";

export function AboutUs(props) {
  const { title, description, shape, className } = props;

  return (
    <div className={classnames("flex w-8/12 relative", className)}>
      <Shape className="w-full" shape={shape} />
      <div className="absolute top-[10vw] left-[17.5vw]">
        <p className="text-[54px] font-semibold leading-none w-[40vw]">
          {title}
        </p>
        <p className="ml-[8vw] mt-[1vw] text-4xl text-grey w-[44vw]">
          {description}
        </p>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(["circle", "square", "diamond"]).isRequired,
  className: PropTypes.string,
};
