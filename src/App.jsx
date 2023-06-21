import "./App.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <section id="1" className="bg-blue-500 h-screen">
        <h2>Landing Page</h2>
      </section>
      <section id="2" className="bg-green-500 h-screen">
        <h2>About us</h2>
      </section>
      <section id="3" className="bg-red-500 h-screen">
        <h2>What we do</h2>
      </section>
      <section id="4" className="bg-purple-500 h-screen">
        <h2>Our clients</h2>
      </section>
      <section id="5" className="bg-yellow-500 h-screen">
        <h2>Get in touch</h2>
      </section>
    </div>
  );
}
