import { SponsorFooter } from "./foot";
import { MainFooter } from "./footer";

export function FooterSection() {
  return (
    <footer id="footer" className="bg-white h-[66vh]">
      <MainFooter />
      <SponsorFooter />
    </footer>
  );
}