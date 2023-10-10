import PropTypes from "prop-types";
import classNames from "classnames";

import { FadeIn } from "../FadeIn";

export function Testimonial({ name, quote, company, darkMode }) {
  return (
    <FadeIn>
      <div
        className={classNames(
          "p-8 lg:p-14 rounded-2xl space-y-4",
          darkMode ? "border-white border-2" : "border-black border-4 "
        )}
      >
        <p className="text-lg lg:text-2xl">"{quote}"</p>
        <div>
          <p className="text-sm mb-1 lg:mb-0 lg:text-xl">{name}</p>
          <p className="text-xs font-semibold lg:text-base">{company}</p>
        </div>
      </div>
    </FadeIn>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
