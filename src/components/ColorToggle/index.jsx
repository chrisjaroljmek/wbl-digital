import classnames from "classnames";

import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";

export function ColorToggle(props) {
  const { className } = props;

  return (
    <div className={classnames("flex space-x-2", className)}>
      <img className="h-12" src={sun} alt="light" />
      <img className="h-12" src={moon} alt="dark" />
    </div>
  );
}
