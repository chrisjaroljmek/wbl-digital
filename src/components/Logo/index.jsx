import logo from "../../assets/wbl.png";

export function Logo(props) {
  const { size } = props;
  let imageSize;

  switch (size) {
    case "xs":
      imageSize = "w-8 h-8";
      break;
    case "sm":
      imageSize = "w-12 h-12";
      break;
    case "md":
      imageSize = "w-16 h-16";
      break;
    case "lg":
      imageSize = "w-20 h-20";
      break;
    case "xl":
      imageSize = "w-[768px]";
      break;
    default:
      imageSize = "w-16 h-16";
  }
  return <img alt="logo" className={imageSize} src={logo} />;
}
