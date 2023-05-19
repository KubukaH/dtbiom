import { FooterSection } from "../foot";
import { TestimonialsSection } from "../home/testimonials";
import { HeadHero } from "./homeHero";

export function HeaderSection() {
  return (
    <>
    <header className="header-area">
      <HeadHero />
    </header>
    <TestimonialsSection />
    <FooterSection />
    </>
  );
}
