import PropTypes from "prop-types";
import classnames from "classnames";

export function SectionHeader(props) {
  const { text, className } = props;
  return <div className={classnames(className)}>{text}</div>;
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
