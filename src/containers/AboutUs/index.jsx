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
          "display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue  rounded-full",
          size === "sm" && "h-[18vw] w-[18vw]",
          size === "md" && "h-[24vw] w-[24vw]",
          size === "lg" && "h-[30vw] w-[30vw]"
        )}
      >
        <div
          className={classnames(
            darkMode === true && "bg-black rounded-full",
            darkMode === false && "bg-white  rounded-full",
            size === "sm" && "h-[17.3vw] w-[17.3vw]",
            size === "md" && "h-[23.3vw] w-[23.3vw]",
            size === "lg" && "h-[29.3vw] w-[29.3vw]"
          )}
        ></div>
      </div>
      <div className="absolute top-[10vw] left-[17vw]">
        <p className="text-[4vw] font-semibold leading-[4.5vw] w-[44vw] drop-shadow-xl">
          {title}
        </p>
        <p className="text-[2.8vw] leading-[3.5vw] ml-[9vw] mt-[1.5vw] text-grey w-[50vw]">
          {description}
        </p>
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
