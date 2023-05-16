import { AppContext } from "./_components";
import { AlertPopper } from "./_components/alert";
import { FooterSection } from "./foot";
import { HeaderSection } from "./head";
import { TestimonialsSection } from "./home/testimonials";

export function App() {
  return (
    <AppContext>
      <HeaderSection />
      <TestimonialsSection />
      <FooterSection />
      <AlertPopper/>
    </AppContext>
  );
}
