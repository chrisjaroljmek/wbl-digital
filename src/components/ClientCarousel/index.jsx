import { useState, useEffect, useRef } from "react";

import { ClientCard } from "../ClientCard";

import companyOne from "../../assets/images/101.svg";
import companyTwo from "../../assets/images/circleart.svg";
import companyThree from "../../assets/images/munchfit.svg";
import companyFour from "../../assets/images/biofoods.svg";
import companyFive from "../../assets/images/kikili.svg";
import companySix from "../../assets/images/theoaklondon.svg";

const clients = [
  { image: companyOne, name: "101 Ways" },
  { image: companyTwo, name: "Circle Art" },
  { image: companyThree, name: "MunchFit" },
  { image: companyFour, name: "Biofoods" },
  { image: companyFive, name: "Kikili Beach" },
  { image: companySix, name: "The Oak London" },
];

export function ClientCarousel() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            className="w-10 h-full z-10 p-0 m-0 transition-all ease-in-out duration-300"
            onClick={movePrev}
          >
            Prev
          </button>
          <button
            className="w-10 h-full z-10 p-0 m-0 transition-all ease-in-out duration-300"
            onClick={moveNext}
          >
            Next
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {clients.map(({ image, name, type }, index) => (
            <div
              key={index}
              className="carousel-item relative w-64 h-64 snap-start"
            >
              <ClientCard image={image} name={name} type={type} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
