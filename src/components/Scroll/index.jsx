import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

export function Scroll(props) {
  const { darkMode } = props;

  return (
    <div className="flex flex-col justify-between mb-6 h-[300px]">
      <div className="transform -rotate-90 uppercase">Scroll</div>
      <img
        className="h-[240px]"
        src={darkMode ? arrow : blackArrow}
        alt="arrow"
      />
    </div>
  );
}
