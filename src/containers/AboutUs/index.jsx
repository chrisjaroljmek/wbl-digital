import PropTypes from "prop-types";
import classnames from "classnames";

export function AboutUs(props) {
  const { title, description, darkMode, size, flip, className } = props;

  return (
    <div
      className={classnames(
        "flex relative mb-48",
        size === "lg" && "ml-8",
        flip && "justify-end",
        className
      )}
    >
      <div
        className={classnames(
          "display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue  rounded-full",
          size === "sm" && "w-24 h-24",
          size === "md" && "w-48 h-48",
          size === "lg" && "w-48 h-48"
        )}
      >
        <div
          className={classnames(
            darkMode === true && "bg-black rounded-full",
            darkMode === false && "bg-white rounded-full",
            size === "sm" && "w-[88px] h-[88px]",
            size === "md" && "w-[184px] h-[184px]",
            size === "lg" && "w-[184px] h-[184px]"
          )}
        ></div>
      </div>
      <div className="absolute left-16 top-20">
        <p className="font-semibold text-3xl w-[280px] mb-2">{title}</p>
        <p className="ml-4 text-grey text-base w-[260px]">{description}</p>
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
