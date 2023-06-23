import "./App.css";

import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Section } from "./components/Section";

export function App() {
  return (
    <div>
      <Header />
      <Section id="1" title="Landing Page">
        <Logo size="xl" />
      </Section>
      <Section id="2" title="About Us" />
      <Section id="3" title="What We Do" />
      <Section id="4" title="Our Clients" />
      <Section id="5" title="Get In Touch" />
    </div>
  );
}
