import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

export function App() {
  return (
    <div className="text-white bg-dark-500">
      <Header />
      <section className="h-screen">
        <h2>Landing Page</h2>
      </section>
      <section className="h-screen" id="aboutUs">
        <h2>About Us</h2>
      </section>
      <section className="h-screen" id="whatWeDo">
        <h2>What We Do</h2>
      </section>
      <section className="h-screen" id="ourClients">
        <h2>Our Clients</h2>
      </section>
      <section
        className="flex flex-col justify-between h-screen"
        id="getInTouch"
      >
        <h2>Get In Touch</h2>
        <Footer />
      </section>
    </div>
  );
}
