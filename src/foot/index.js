import { SponsorFooter } from "./foot";
import { MainFooter } from "./footer";

export function FooterSection() {
  return (
    <footer id="footer" className="bg-gray-100 footer-area">
      <MainFooter />
      <SponsorFooter />
    </footer>
  );
}