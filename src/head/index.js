import { redirectTo } from "@reach/router";

import { FooterSection } from "../foot";
import { TestimonialsSection } from "../home/testimonials";
import { HeadHero } from "./homeHero";
import { SubscribeMe } from "../home";

export function HeaderSection() {
  const params = new URL(document.location.href);
  const searchParams = new URLSearchParams(params.hash);

  let recovery_token = searchParams.get("#recovery_token");

  console.log(recovery_token);

  if ( recovery_token !== (undefined || null) ) {
    return redirectTo(`/account/recover-account?recovery_token=${recovery_token.slice(1,)}`)
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
