import "./App.css";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <div>
      <Header />
      <section id="1" className="h-screen">
        <Logo size="xl" />
      </section>
      <section id="2" className="h-screen">
        <h2>About us</h2>
      </section>
      <section id="3" className="h-screen">
        <h2>What we do</h2>
      </section>
      <section id="4" className="h-screen">
        <h2>Our clients</h2>
      </section>
      <section id="5" className="h-screen">
        <h2>Get in touch</h2>
      </section>
    </div>
  );
}
