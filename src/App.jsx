import "./App.css";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <div>
      <Header />
      <section id="1" className="bg-black h-screen">
        <h2 className="text-white">Landing Page</h2>
        <Logo size="xl" />
      </section>
      <section id="2" className="bg-black h-screen">
        <h2 className="text-white">About us</h2>
      </section>
      <section id="3" className="bg-black h-screen">
        <h2 className="text-white">What we do</h2>
      </section>
      <section id="4" className="bg-black h-screen">
        <h2 className="text-white">Our clients</h2>
      </section>
      <section id="5" className="bg-black h-screen">
        <h2 className="text-white">Get in touch</h2>
      </section>
    </div>
  );
}
