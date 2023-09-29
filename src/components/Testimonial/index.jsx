import PropTypes from "prop-types";

export function Testimonial({ name, quote }) {
  return (
    <div className="border-4 border-white p-16 rounded-2xl space-y-4">
      <p className="text-2xl">"{quote}"</p>
      <p>{name}</p>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
