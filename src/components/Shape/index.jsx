import classnames from "classnames";

export function Shape(props) {
  const { shape, className, color } = props;
  return (
    <div
      className={classnames(
        "border-2",
        shape === "circle" && "h-12 w-12 ",
        className
      )}
    ></div>
  );
}
