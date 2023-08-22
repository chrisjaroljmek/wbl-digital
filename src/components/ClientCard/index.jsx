import PropTypes from "prop-types";
import classnames from "classnames";

export function ClientCard(props) {
  const { image, name, className } = props;

  return (
    <div class={classnames("relative cursor-pointer", className)}>
      <div class="absolute inset-0">
        <div class="w-full h-full transition duration-300 ease-in-out bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100"></div>
      </div>
      <img
        className="object-cover max-w-[300px] mr-20"
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
