import PropTypes from "prop-types";
import classnames from "classnames";

export function SectionHeader(props) {
  const { text, className, sub } = props;
  return (
    <div
      className={classnames(
        sub ? "text-4xl text-grey" : "text-[54px] font-semibold",
        className
      )}
    >
      {text}
    </div>
  );
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  sub: PropTypes.bool,
};
