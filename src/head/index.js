import { FooterSection } from "../foot";
import { TestimonialsSection } from "../home/testimonials";
import { HeadHero } from "./homeHero";
import { SubscribeMe } from "../home";
import { history } from "../_components/history";

export function HeaderSection() {
  const params = new URL(document.location.href);
  const searchParams = new URLSearchParams(params.hash);

  let recovery_token = searchParams.get("#recovery_token");

  if ( recovery_token !== (undefined || null) ) {
    history.navigate(`/account/recover-account?recovery_token=${recovery_token.slice(0,-1)}`)
  }

  return (
    <>
    <header className="header-area">
      <HeadHero />
    </header>
    <TestimonialsSection />
    <SubscribeMe />
    <FooterSection />
    </>
  );
}
