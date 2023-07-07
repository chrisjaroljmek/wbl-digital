import classnames from "classnames";

export function Shape(props) {
  const { shape, className, color } = props;
  return (
    <div
      className={classnames(
        "border-2",
        shape === "circle" && "h-12 w-12 rounded-full",
        shape === "square" && "h-12 w-12",
        shape === "diamond" && "h-12 w-12 transform rotate-45",
        className
      )}
    ></div>
  );
}
