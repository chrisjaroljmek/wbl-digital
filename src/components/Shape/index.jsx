import PropTypes from "prop-types";
import classnames from "classnames";

export function Shape(props) {
  const { shape, className } = props;
  return (
    <div
      className={classnames(
        "display flex items-center justify-center",
        shape === "circle" &&
          "bg-gradient-to-tr from-dark-darkBlue to-dark-blue h-[20vw] w-[20vw] rounded-full",
        shape === "square" &&
          "h-[28vw] w-[24vw] bg-gradient-to-tr from-dark-green to-yellow-500",
        shape === "diamond" && "h-12 w-12 transform rotate-45",
        className
      )}
    >
      <div
        className={classnames(
          shape === "square" && "h-[27.3vw] w-[23.3vw] bg-dark-black",
          shape === "circle" &&
            "bg-dark-black h-[19.3vw] w-[19.3vw] rounded-full"
        )}
      ></div>
    </div>
  );
}

Shape.propTypes = {
  shape: PropTypes.oneOf(["circle", "square", "diamond"]).isRequired,
  className: PropTypes.string,
};
