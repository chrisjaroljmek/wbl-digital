import PropTypes from "prop-types";
import classnames from "classnames";

export function Section(props) {
  const { id, children, className } = props;

  return (
    <section id={id} className={classnames(className)}>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
