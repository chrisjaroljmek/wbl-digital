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

import "./index.css";

export function ClientGallery() {
  const [isHovered, setIsHovered] = useState(false);
  const speed = 25000;

  const onHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`w-full overflow-hidden ${isHovered ? "enlarge" : ""}`}>
      <div
        className={`flex ${isHovered ? "enlarge" : ""}`}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        <section
          className={`section ${isHovered ? "stopScroll" : ""}`}
          style={{ "--speed": `${speed}ms` }}
        >
          {clients.map(({ image, name, type }, index) => (
            <ClientCard
              key={index}
              image={image}
              name={name}
              type={type}
              isHovered={isHovered}
            />
          ))}
        </section>
        <section
          className={`section ${isHovered ? "stopScroll" : ""}`}
          style={{ "--speed": `${speed}ms` }}
        >
          {clients.map(({ image, name, type }, index) => (
            <ClientCard key={index} image={image} name={name} type={type} />
          ))}
        </section>
      </div>
    </div>
  );
}
