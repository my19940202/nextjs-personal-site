import Hero from "@/components/home/Hero";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function LangHome({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const langName = (lang && lang[0]) || defaultLocale;
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      {/* <SocialProof locale={dict.SocialProof} /> */}
      {/* display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* USP (Unique Selling Proposition) */}
      {/* <Feature id="Features" locale={dict.Feature} langName={langName} /> */}

      {/* Pricing */}
      {/* <Pricing id="Pricing" locale={dict.Pricing} langName={langName} /> */}

      {/* FAQ (Frequently Asked Questions) */}
      {/* <FAQ id="FAQ" locale={dict.FAQ} langName={langName} /> */}
    </>
  );
}

