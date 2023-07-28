import PropTypes from "prop-types";
import classnames from "classnames";

export function Shape(props) {
  const { shape, darkMode, className } = props;
  return (
    <div
      className={classnames(
        "display flex items-center justify-center",
        shape === "circle" &&
          "bg-gradient-to-tr from-darkBlue to-blue h-[20vw] w-[20vw] rounded-full",
        shape === "square" &&
          "h-[28vw] w-[24vw] bg-gradient-to-tr from-green to-yellow-500",
        className
      )}
    >
      <div
        className={classnames(
          shape === "square" &&
            darkMode === true &&
            "h-[27.3vw] w-[23.3vw] bg-black",
          shape === "square" &&
            darkMode === false &&
            "h-[27.3vw] w-[23.3vw] bg-white",
          shape === "circle" &&
            darkMode === true &&
            "bg-black h-[19.3vw] w-[19.3vw] rounded-full",
          shape === "circle" &&
            darkMode === false &&
            "bg-white h-[19.3vw] w-[19.3vw] rounded-full"
        )}
      ></div>
    </div>
  );
}

Shape.propTypes = {
  shape: PropTypes.oneOf(["circle", "square", "diamond"]).isRequired,
  darkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
