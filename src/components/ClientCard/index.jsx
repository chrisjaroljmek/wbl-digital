import PropTypes from "prop-types";

export function ClientCard(props) {
  const { image, name, className } = props;

  return (
    <div className={className}>
      <img
        className="object-cover max-w-[300px] pr-10"
        src={image}
        alt={name}
      />
    </div>
  );
}

ClientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
