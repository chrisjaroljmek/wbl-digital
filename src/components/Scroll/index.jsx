import arrow from "../../assets/icons/arrow.svg";

export function Scroll() {
  return (
    <div className="flex flex-col justify-between mb-6 h-[300px]">
      <div className="transform -rotate-90 uppercase">Scroll</div>
      <img className="h-[240px]" src={arrow} alt="arrow" />
    </div>
  );
}
