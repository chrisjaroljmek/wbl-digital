import classnames from "classnames";

export function Shape(props) {
  const { shape, className } = props;
  return (
    <div
      className={classnames(
        "display flex items-center justify-center",
        shape === "circle" && "h-12 w-12 rounded-full",
        shape === "square" &&
          "h-[28vw] w-[24vw] bg-gradient-to-tr from-dark-green to-yellow-500",
        shape === "diamond" && "h-12 w-12 transform rotate-45",
        className
      )}
    >
      <div
        className={classnames(
          shape === "square" && "h-[27.3vw] w-[23.3vw] bg-dark-black"
        )}
      ></div>
    </div>
  );
}
