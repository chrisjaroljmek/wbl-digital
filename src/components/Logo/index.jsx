import PropTypes from "prop-types";
import classnames from "classnames";

import logo from "../../assets/images/wbl.png";

export function Logo(props) {
  const { className } = props;

  return <img alt="logo" className={classnames(className)} src={logo} />;
}

Logo.propTypes = {
  className: PropTypes.string,
};
