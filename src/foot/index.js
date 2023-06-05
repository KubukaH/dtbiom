import { SponsorFooter } from "./foot";
import { MainFooter } from "./footer";

export function FooterSection() {
  return (
    <footer id="footer" className="bg-white h-1/2">
      <MainFooter />
      <SponsorFooter />
    </footer>
  );
}