import { useRef } from "react";
import './App.scss';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Pricing from './pages/pricing/Pricing';
import Hero from "./pages/hero/Hero";

function App () {
  const refToAboutComponent = useRef<HTMLInputElement>(null);
  const refToPricingComponent = useRef<HTMLInputElement>(null);
  const refToContactComponent = useRef<HTMLInputElement>(null);

  return (
    <>
      <Navbar refToOtherComponent={{ refToAboutComponent, refToPricingComponent, refToContactComponent }}/>
      <Hero />
      <About ref={refToAboutComponent}/>
      <Pricing ref={refToPricingComponent}/>
      <Contact ref={refToContactComponent}/>
    </>
  )
}

export default App
