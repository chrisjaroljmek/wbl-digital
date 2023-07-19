import classnames from "classnames";

export function Shape(props) {
  const { shape, className } = props;
  return (
    <div
      className={classnames(
        "border-4",
        shape === "circle" && "h-12 w-12 rounded-full",
        shape === "square" && "h-[28vw] w-[24vw]",
        shape === "diamond" && "h-12 w-12 transform rotate-45",
        className
      )}
    ></div>
  );
}
