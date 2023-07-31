import PropTypes from "prop-types";
import classnames from "classnames";

export function AboutUs(props) {
  const { title, description, darkMode, className } = props;

  return (
    <div className={classnames("flex w-8/12 relative mb-48", className)}>
      <div className="display flex items-center justify-center bg-gradient-to-tr from-darkBlue to-blue h-[20vw] w-[20vw] rounded-full">
        <div
          className={classnames(
            darkMode === true && "bg-black h-[19.3vw] w-[19.3vw] rounded-full",
            darkMode === false && "bg-white h-[19.3vw] w-[19.3vw] rounded-full"
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
  className: PropTypes.string,
};
