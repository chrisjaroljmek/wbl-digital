import classnames from "classnames";

import { Shape } from "../../components/Shape";

export function AboutUs(props) {
  const { className } = props;

  return (
    <div className={classnames("border border-red flex w-8/12", className)}>
      <Shape className="w-full" shape="square" />
      <div>
        <p className="text-[54px] font-semibold">
          We produce websites and style brands.
        </p>
        <p className="text-4xl text-grey">
          We think of a brand as a promise and deliver digital brand experiences
          that users can believe in.
        </p>
      </div>
    </div>
  );
}
