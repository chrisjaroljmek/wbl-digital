import PropTypes from "prop-types";
import classNames from "classnames";

import { FadeIn } from "../FadeIn";

import openQuote from "../../assets/icons/openQuote.svg";
import closeQuote from "../../assets/icons/closeQuote.svg";

export function Testimonial({ name, quote, company, darkMode }) {
  return (
    <FadeIn>
      <div
        className={classNames(
          "p-8 lg:p-14 rounded-2xl space-y-4",
          darkMode ? "border-white border-2" : "border-black border-4 "
        )}
      >
        <blockquote className="text-lg lg:text-2xl">
          <img
            className="lg:inline h-4 lg:h-6 mb-2 lg:mb-0 lg:mr-2 lg:translate-y-[-8px]"
            src={openQuote}
          />
          <span>{quote}</span>
          <img
            className="lg:inline h-4 lg:h-6 mt-2 lg:mt-0 lg:ml-2 "
            src={closeQuote}
          />
        </blockquote>
        <figcaption>
          <p className="text-sm lg:text-xl">{name}</p>
          <cite className="text-xs font-semibold lg:text-base">{company}</cite>
        </figcaption>
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
