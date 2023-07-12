import classnames from "classnames";

import { Shape } from "../../components/Shape";

export function AboutUs(props) {
  const { className } = props;

  return (
    <div className={classnames("flex w-8/12 relative", className)}>
      <Shape className="w-full" shape="square" />
      <div className="absolute top-[10vw] left-[17.5vw]">
        <p className="text-[54px] font-semibold leading-none w-[40vw]">
          We produce websites and style brands.
        </p>
        <p className="ml-[8vw] mt-[1vw] text-4xl text-grey w-[44vw]">
          We think of a brand as a promise and deliver digital brand experiences
          that users can believe in.
        </p>
      </div>
    </div>
  );
}
