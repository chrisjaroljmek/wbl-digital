import PropTypes from "prop-types";
import classnames from "classnames";

export function Skill(props) {
  const { title, description, className } = props;

  return (
    <div className={classnames("border-t border-dark-grey w-full", className)}>
      <div className="flex my-16 mx-8">
        <div className="mr-8">
          <p className="text-[4vw] leading-none whitespace-nowrap">{title}</p>
          <div className="h-[2px] mt-0.5 bg-dark-grey"></div>
        </div>
        <p className="text-[2.8vw] text-dark-grey leading-none">
          {description}
        </p>
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};
