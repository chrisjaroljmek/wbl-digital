import { useState } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {clients.map(({ image, name, type }, index) => {
        return <ClientCard image={image} name={name} type={type} key={index} />;
      })}
    </>
  );
}
