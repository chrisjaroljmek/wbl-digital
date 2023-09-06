import logo from "../../assets/images/wbl.png";

export function Footer() {
  return (
    <div className="flex items-center m-8 text-grey">
      <img alt="logo" src={logo} />
      <div className="mt-3 space-x-8">
        <span className="ml-8">© 2023 WBL</span>
        <span className="cursor-pointer hover:opacity-80">Contact Us</span>
        <span className="cursor-pointer hover:opacity-80">Privacy Policy</span>
      </div>
    </div>
  );
}
