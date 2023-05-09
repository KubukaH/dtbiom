import { AppContext } from "./_components";
// import { FooterSection } from "./foot";
import { SponsorFooter } from "./foot/foot";
import { ImagedFoot } from "./foot/imaged";
import { HeaderSection } from "./head";
import { TestimonialsSection } from "./home/testimonials";

export function App() {
  return (
    <AppContext>
      <HeaderSection />
      <TestimonialsSection />
      <ImagedFoot />
      <SponsorFooter />
    </AppContext>
  );
}
