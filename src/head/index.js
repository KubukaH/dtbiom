import { HeadHero } from "./homeHero";
import { NavigationSection } from "./navigation";

export function HeaderSection() {
  return (
    <header className="header-area">
      <NavigationSection />
      <HeadHero />
    </header>
  );
}