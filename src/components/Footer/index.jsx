import { Logo } from "../Logo";

export function Footer() {
  return (
    <div className="flex items-center m-8 text-grey">
      <Logo className="w-[8vw]" />
      <div className="mt-3 space-x-8">
        <span className="ml-8">© 2023 WBL</span>
        <span className="cursor-pointer hover:opacity-80">Contact Us</span>
        <span className="cursor-pointer hover:opacity-80">Privacy Policy</span>
      </div>
    </div>
  );
}
