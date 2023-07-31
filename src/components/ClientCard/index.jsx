import PropTypes from "prop-types";
import classnames from "classnames";

export function ClientCard(props) {
  const { image, name, className } = props;

  return (
    <div className={classnames("relative", className)}>
      <img className="w-48 object-cover" src={image} alt={name} />
    </div>
  );
}

ClientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
