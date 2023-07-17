import PropTypes from "prop-types";
import classnames from "classnames";

export function Section(props) {
  const { id, title, children, className } = props;

  return (
    <section id={id} className={classnames(className)}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
