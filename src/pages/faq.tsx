import React from "react";
import {
  PrivateLayout,
  SEO,
  FaqWrapper,
  FaqHero,
  FaqAccordion,
} from "@components";

const FAQ = () => {
  return (
    <>
      <SEO />
      <PrivateLayout>
        <FaqWrapper>
          <FaqHero />

          <section className="faq-content pt-0  w-100">
            <FaqAccordion
              title="Create unique, complex passwords, for each account and device."
              content="You may think that big businesses with more endpoints are more vulnerable than small businesses. Or, businesses with attractive data, like financial services companies or those in the healthcare industry, would be easy targets. That’s not always the case—of course, they hold an incredible amount of data, but it’s like trying to rob the Federal Reserve gold vault versus robbing a regular Joe on the street. Bigger businesses or those that handle sensitive data typically have the technology, regulations, and processes to protect themselves from cyberattacks."
            />
            <FaqAccordion
              title="What types of businesses are most at risk for a cyberattack?"
              content="You may think that big businesses with more endpoints are more vulnerable than small businesses. Or, businesses with attractive data, like financial services companies or those in the healthcare industry, would be easy targets. That’s not always the case—of course, they hold an incredible amount of data, but it’s like trying to rob the Federal Reserve gold vault versus robbing a regular Joe on the street. Bigger businesses or those that handle sensitive data typically have the technology, regulations, and processes to protect themselves from cyberattacks."
            />
          </section>
        </FaqWrapper>
      </PrivateLayout>
    </>
  );
};
export default FAQ;
