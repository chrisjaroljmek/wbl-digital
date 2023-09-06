import PropTypes from "prop-types";
import classnames from "classnames";

export function AboutUs(props) {
  const { title, description, darkMode, size, flip, className } = props;

  return (
    <div
      className={classnames(
        "flex w-8/12 relative mb-48",
        flip && "justify-end",
        className
      )}
    >
      <div
        className={classnames(
          "display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue  rounded-full"
        )}
      >
        <div
          className={classnames(
            darkMode === true && "bg-black rounded-full",
            darkMode === false && "bg-white  rounded-full"
          )}
        ></div>
      </div>
      <div className="absolute">
        <p className="font-semibold drop-shadow-xl">{title}</p>
        <p className="text-grey">{description}</p>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  flip: PropTypes.bool,
  className: PropTypes.string,
};
