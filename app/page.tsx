import Inventory from "./components/inventory/Inventory";
import Services from "./components/services/Services";
import { SocialLinks } from "./components/socialLinks/SocialLinks";
import { Contact } from "./components/contact/Contact";
import Home from "./components/home/Home";

export default function Pages() {
  return (
    <>
      <Home />
      <Inventory />
      <Services />
      <SocialLinks />
      <Contact />
    </>
  );
}
