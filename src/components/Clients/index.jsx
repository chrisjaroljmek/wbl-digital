import PropTypes from "prop-types";
import classnames from "classnames";

export function Clients(props) {
  const { image, name, type, className } = props;

  return (
    <div className={classnames("relative", className)}>
      <img className="w-48 object-cover" src={image} alt={name} />
      <div className="h-[256px] w-48 border border-red top-[24px] left-[24px] absolute"></div>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}

Clients.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
