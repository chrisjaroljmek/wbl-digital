import React from "react";
import PropTypes from "prop-types";

import config from "./colors.jsx";

const Stories = {
  title: "Tailwind/Colors",
};

export default Stories;

console.log(config);

const Color = (props) => (
  <div className="inline-block text-center text-xs">
    <div
      style={{ width: 60, height: 100, background: props.value }}
      className={`bg-${props.name} mb-0.5 ${
        props.value.toLowerCase() === "#ffffff" && "border border-grey-300"
      }`}
    />
    <div>{props.shade}</div>
  </div>
);

Color.propTypes = {
  name: PropTypes.string,
  shade: PropTypes.string,
  value: PropTypes.string,
};

export const Colors = () => {
  return (
    <div className="divide-y divide-grey-50 bg-white p-4 text-ui-800">
      {Object.keys(config.colors).map((color) => {
        return (
          <div key={color} className="flex py-2">
            <p style={{ width: 120 }}>{color}</p>
            <div>
              {typeof config.colors[color] === "string" && (
                <Color name={color} value={config.colors[color]} />
              )}
              {typeof config.colors[color] !== "string" &&
                Object.keys(config.colors[color]).map((shade) => (
                  <Color
                    key={shade}
                    name={`${color}-${shade}`}
                    shade={shade}
                    value={config.colors[color][shade]}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Gradients = () => {
  const gradients = [
    "gradient-primary",
    "gradient-secondary",
    "gradient-tertiary",
  ];

  return (
    <div className="divide-y divide-grey-50 bg-white p-4 text-ui-800">
      <div className="bg-gradient-primary bg-gradient-secondary bg-gradient-tertiary hidden">
        Secretly load the classes here so there are included in bundle
      </div>
      {gradients.map((gradient) => {
        return (
          <div key={gradient} className="flex py-2">
            <p style={{ width: 120 }}>.bg-{gradient}</p>
            <div>
              <Color name={gradient} value={gradient} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
