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

import "./index.css";

export function ClientGallery() {
  const speed = 25000;

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <div className="flex absolute">
        <section className="section" style={{ "--speed": `${speed}ms` }}>
          {clients.map(({ image, name, type }, index) => (
            <ClientCard key={index} image={image} name={name} type={type} />
          ))}
        </section>
        <section className="section" style={{ "--speed": `${speed}ms` }}>
          {clients.map(({ image, name, type }, index) => (
            <ClientCard key={index} image={image} name={name} type={type} />
          ))}
        </section>
      </div>
    </div>
  );
}
