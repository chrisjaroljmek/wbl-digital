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
  return (
    <>
      <div className="relative overflow-hidden">
        {clients.map(({ image, name, type }, index) => (
          <div key={index}>
            <ClientCard image={image} name={name} type={type} />
          </div>
        ))}
      </div>
      <div className="flex justify-between absolute top left w-full h-full">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </>
  );
}
