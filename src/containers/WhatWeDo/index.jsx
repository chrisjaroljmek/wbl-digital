import { Skill } from "../../components/Skill";

export function WhatWeDo() {
  return (
    <div className="w-full px-8">
      <Skill
        color="blue"
        title="Design"
        description="Cutting-edge design is what we offer. In today's super busy webspace, standing out with a strong visual identity is essential. Design is communication. We design. We animate. We employ AI to create options faster."
      />
      <Skill
        color="green"
        title="Experience creation"
        description="UX puts people first. Developing a logical flow for narrative or customer journeys means a functional and engaging experience for users, whether it’s a product, information or entertainment offering. We want people to enjoy their visit."
      />
      <Skill
        color="red"
        title="Tech build"
        description="We love to code from the ground up. React is our go-to platform. But sometimes the best solution is a low-code CMS. We are experts in WordPress, Wix, Shopify, Squarespace. We match the tech to your web product."
      />
      <Skill
        color="red"
        title="Iterate and optimise"
        description="The web landscape is constantly developing in response to the way users interact. At wbl we iterate to upgrade, improve and enhance. People want to engage seamlessly and effortlessly with your brand online. We strive to deliver that experience."
      />
    </div>
  );
}
