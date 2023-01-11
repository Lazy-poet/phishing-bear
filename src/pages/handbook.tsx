import React, { useState } from "react";
import type { NextPage } from "next";
import {
  PrivateLayout,
  LinkButton,
  SEO,
  HandbookWrapper,
  Section1,
  Section2,
  SectionWrapper,
  StyledParagraphText,
  Tabs,
  addSpace,
} from "@components";

import { useCustomStyletron } from "../styles/custom-styles";

const Handbook: NextPage = () => {
  const [css, theme] = useCustomStyletron();
  const [activeTab, setActiveTab] = useState("phishing");

  return (
    <>
      <SEO />
      <PrivateLayout headerTheme="dark">
        <HandbookWrapper style={{ backgroundColor: theme.colors.dark }}>
          <SectionWrapper
            overrides={{
              background:
                "url(/assets/images/about-hero.svg) no-repeat 100% 100%/cover",
              color: "#ff",
              width: "100%",
              padding: "100px 10px 20px",
            }}
          >
            <div
              className={css({
                [theme.mediaQuery.xsmall]: {
                  padding: "50px 0",
                },
              })}
            >
              <StyledParagraphText
                overrides={{
                  ...theme.typography.font(26, 700),
                  maxWidth: "400px",
                  margin: "0 auto 20px",
                  textAlign: "center",

                  [theme.mediaQuery.small]: {
                    ...theme.typography.font(30, 700),
                    maxWidth: "700px",
                  },
                  [theme.mediaQuery.medium]: {
                    ...theme.typography.font(34, 700),
                    maxWidth: "700px",
                  },
                }}
              >
                Cyber security handbook
              </StyledParagraphText>
              <StyledParagraphText
                overrides={{
                  ...theme.typography.font(12, 400),
                  maxWidth: "300px",
                  margin: "0 auto 20px",
                  textAlign: "center",
                  [theme.mediaQuery.small]: {
                    maxWidth: "400px",

                    ...theme.typography.font(14, 400),
                  },
                  [theme.mediaQuery.medium]: {
                    maxWidth: "500px",
                  },
                }}
              >
                With 75% of organisations globally experiencing a phishing
                attack in 2021 it is time to harden your human firewall.
              </StyledParagraphText>
              {addSpace("vert", "50px")}
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </SectionWrapper>
          <Section2 activeTab={activeTab} />
          <Section1 />
        </HandbookWrapper>
      </PrivateLayout>
    </>
  );
};
export default Handbook;
