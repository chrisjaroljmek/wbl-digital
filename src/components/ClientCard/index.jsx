import PropTypes from "prop-types";
import classnames from "classnames";

export function ClientCard(props) {
  const { image, name, className } = props;

  return (
    <div
      className={classnames(
        "relative hover:after:absolute hover:after:inset-0 hover:after:bg-gradient-to-t hover:after:from-transparent hover:after:to-black",
        className
      )}
    >
      <img
        className="object-cover max-w-[300px] mr-10"
        src={image}
        alt={name}
      />
      <div className="absolute top-0 z-10 flex">{name}</div>
    </div>
  );
}

ClientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
