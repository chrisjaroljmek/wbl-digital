import PropTypes from "prop-types";
import classnames from "classnames";

import logo from "../../assets/images/wbl.png";

export function MobileNav({ menu, setMenu, scrollTo, darkMode }) {
  return (
    <div
      className={classnames(
        "h-screen z-40 w-full fixed pl-6",
        darkMode ? "bg-dark-bg" : "bg-light-bg"
      )}
    >
      <img
        onClick={() => {
          scrollTo("1");
          setMenu(!menu);
        }}
        className="w-36 absolute pt-6"
        src={logo}
        alt="WBL"
      />
      <div className="flex flex-col justify-center h-screen text-4xl space-y-8 font-semibold">
        <p
          onClick={() => {
            scrollTo("2");
            setMenu(!menu);
          }}
        >
          About Us
        </p>
        <p
          onClick={() => {
            scrollTo("3");
            setMenu(!menu);
          }}
        >
          What We Do
        </p>
        <p
          onClick={() => {
            scrollTo("4");
            setMenu(!menu);
          }}
        >
          Our Clients
        </p>
        <p
          onClick={() => {
            scrollTo("5");
            setMenu(!menu);
          }}
        >
          Contact Us
        </p>
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
