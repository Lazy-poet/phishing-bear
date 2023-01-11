import React from "react";
import type { NextPage } from "next";
import {
  PublicLayout,
  SEO,
  PlatformWrapper,
  PlatformHero,
  PlatformBanners,
  StyledButton,
} from "@components";
import { useCustomStyletron } from "../styles/custom-styles";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  const [css, theme] = useCustomStyletron();
  return (
    <>
      <PublicLayout headerTheme="light">
        <div
          className={css({
            padding: "100px 20px",
            display: "flex",
            gap: "30px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            [theme.mediaQuery.small]: {
              padding: "150px 100px 100px",
            },
          })}
        >
          {" "}
          <img
            src="/assets/images/404.svg"
            style={{ maxWidth: "100%", height: "auto" }}
          />
         <Link href="/">
              <StyledButton
                small
                overrides={{
                  background: "transparent",
                  color: theme.colors.dark,
                  border: `2px solid ${theme.colors.dark}`,
                  height: "fit-content",
                  padding: "10px 30px",
                  borderRadius: "25px",
                  ...theme.typography.font(14, 600),
                }}
              >
                Back to main page
              </StyledButton>
         </Link>
        </div>
      </PublicLayout>
    </>
  );
};
export default ErrorPage;
