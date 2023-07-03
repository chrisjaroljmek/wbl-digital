import PropTypes from "prop-types";
import classnames from "classnames";

export function Dot(props) {
  const { color, className } = props;

  return (
    <div
      className={classnames(
        "h-3 w-3 rounded-full  ml-[5px] mb-[5px]",
        color === "green" && "bg-green",
        color === "blue" && "bg-darkBlue",
        color === "red" && "bg-red",
        className
      )}
    />
  );
}

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};
