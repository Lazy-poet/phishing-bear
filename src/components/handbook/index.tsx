import {
  StyledButton,
  StyledDarkParagraphText,
  StyledParagraphText,
} from "@components";
import Link from "next/link";
import { useState } from "react";
import { StyleObject } from "styletron-react";
import { customStyled, useCustomStyletron } from "../../styles/custom-styles";
import { PhishingTab } from "./tabs/phishing";
import { PasswordTab } from "./tabs/password";
import { IdentityTheftTab } from "./tabs/identity";
export const HandbookWrapper = customStyled("div", ({ $theme }) => ({
  gap: "20px",
  [$theme.mediaQuery.large]: {
    gap: "30px",
  },
  width: "100vw",
  margin: "0 auto",
  height: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "start",
  scrollSnapAlign: "start",
}));

export const InfoCard = () => {
  const [css, theme] = useCustomStyletron();

  return (
    <div
      className={css({
        width: "100%",
        [theme.mediaQuery.small]: {
          width: "fit-content",
          borderRadius: "30px",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          gap: "20px",
          width: "100%",
          height: "fit-content",
          overflowX: "scroll",
          alignItems: "start",
          justifyContent: "start",
          margin: "20px 0",
          [theme.mediaQuery.small]: {
            width: "fit-content",
            padding: 0,
          },
        })}
      >
        <InfoItem
          src="/assets/images/data-breach.svg"
          title="Largest Exposure"
          desc="Phishing is the Number 1 way hackers breach organisation's IT environment"
        />
        <InfoItem
          src="/assets/images/exposure.svg"
          title="Data Breaches"
          desc="90% of successful data breaches start with a Phishing attack"
        />
        <InfoItem
          src="/assets/images/ransomware.svg"
          title="Ransomware"
          desc="RansomwarePhishing is the top delivery vehicle for ransomware"
        />
        <InfoItem
          src="/assets/images/intelligence.svg"
          title="Human Intelligence"
          desc="HI and a organisational security culture is the best defence against Phishing"
        />
      </div>
    </div>
  );
};

export const InfoItem = ({ src, title, desc }) => {
  const [css, theme] = useCustomStyletron();

  return (
    <div
      className={
        css({
          height: "fit-content",
          minHeight: "200px",
          width: "220px",
          minWidth: "220px",
          borderRadius: "15px",
          backgroundColor: "rgba(184, 156, 197, 0.3)",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexFlow: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: "15px",
          padding: "20px",
          position: "relative",
          transition: "all .5s ease-in-out",
          boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
        }) + " info_item"
      }
    >
      <div
        className={css({
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: theme.colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .5s ease-in-out",
          //   [theme.mediaQuery.small]: {
          //     width: "60px",
          //     height: "60px",
          //     background: "none",
          //   },
        })}
      >
        {" "}
        <img
          src={src}
          className={css({
            width: "50%",
            height: "50%",
            transition: "all .3s ease-in-out",

            // [theme.mediaQuery.small]: {
            //   width: "60%",
            //   height: "50%",
            // },
          })}
        />
      </div>
      <StyledDarkParagraphText
        weight={600}
        size="14px"
        overrides={{
          color: "#fff",
          [theme.mediaQuery.small]: {
            // ...theme.typography.font(14, 600)
          },
        }}
      >
        {title}
      </StyledDarkParagraphText>
      <StyledDarkParagraphText
        weight={400}
        size="12px"
        overrides={{
          wordBreak: "break-word",
          color: "rgba(218, 195, 228, 1)",
          //   [theme.mediaQuery.small]: {
          //     transition: "all 0.3s ease-in-out",
          //     visibility: "hidden",
          //     opacity: 0,
          //     marginTop: "-100%",
          //     width: "100%",
          //     // ...theme.typography.font(14, 400)
          //   },
        }}
      >
        {desc}
      </StyledDarkParagraphText>
    </div>
  );
};
export const Section1 = () => {
  const [css, theme] = useCustomStyletron();
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "start",
        width: "100%",
        maxWidth: "1080px",
        padding: "0 20px",
        position: "relative",
        marginBottom: "100px",

        [theme.mediaQuery.small]: {
          // marginBottom: "200px",
          width: "fit-content",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          gap: "10px",
          width: "fit-content",
          alignItems: "start",
          [theme.mediaQuery.small]: {
            flex: 1,
          },
        })}
      >
        <StyledParagraphText size="15px" weight={500} color="#DAC3E4">
          Cyber Security Handbook
        </StyledParagraphText>
        <StyledParagraphText
          weight={600}
          overrides={{
            lineHeight: 1.4,
            fontSize: "26px",
            [theme.mediaQuery.small]: {
              fontSize: "30px",
            },
          }}
        >
          Phishing, the facts.
        </StyledParagraphText>
      </div>
      <InfoCard />
    </section>
  );
};

const section2Links = [
  {
    label: "phishing",
    svg: (fill: StyleObject["color"]) => (
      <svg
        width="21"
        height="21"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49976 26.9167C8.49976 27.2924 8.35049 27.6527 8.08479 27.9184C7.81909 28.1841 7.45872 28.3333 7.08296 28.3333C6.70721 28.3333 6.34684 28.1841 6.08113 27.9184C5.81543 27.6527 5.66616 27.2924 5.66616 26.9167C5.66616 26.5409 5.81543 26.1806 6.08113 25.9149C6.34684 25.6493 6.70721 25.5 7.08296 25.5C7.45872 25.5 7.81909 25.6493 8.08479 25.9149C8.35049 26.1806 8.49976 26.5409 8.49976 26.9167ZM33.6196 10.8021C33.3271 11.3891 32.8762 11.8826 32.3179 12.2268C31.7596 12.571 31.1161 12.7523 30.4602 12.75H24.0577C24.0293 14.2531 23.9684 15.6839 23.8465 17H24.3679C24.9383 16.9886 25.5043 17.1028 26.0256 17.3344C26.547 17.5661 27.011 17.9096 27.3848 18.3405C27.7586 18.7715 28.033 19.2793 28.1887 19.8282C28.3443 20.377 28.3773 20.9533 28.2854 21.5163C28.1241 22.6189 27.5728 23.6271 26.7316 24.358C25.8904 25.089 24.815 25.4941 23.7006 25.5H21.8177C19.2674 31.0094 11.3334 34 5.64774 34C4.87449 33.9973 4.10995 33.8365 3.40119 33.5273C2.69243 33.2182 2.05445 32.7673 1.52649 32.2023C0.998543 31.6374 0.591797 30.9704 0.331289 30.2424C0.0707822 29.5144 -0.0379747 28.7408 0.0117119 27.9692C0.087279 24.2033 1.05395 20.5088 2.83256 17.1884V16.4333C2.84164 13.8858 3.74126 11.4216 5.37569 9.46725C7.01012 7.51294 9.2765 6.19156 11.7825 5.73183C12.417 5.62348 13.0675 5.65522 13.6884 5.82481C14.3093 5.9944 14.8856 6.29775 15.3769 6.71358C15.8798 7.13607 16.2853 7.66237 16.5656 8.25635C16.8458 8.85033 16.9942 9.49793 17.0006 10.1547C18.3182 10.0328 19.7506 9.97192 21.251 9.94358V3.54167C21.251 2.88394 21.4341 2.2392 21.78 1.6797C22.1258 1.12021 22.6206 0.668051 23.2089 0.373905C23.7973 0.0797597 24.4559 -0.0447554 25.1111 0.0143124C25.7662 0.0733802 26.3919 0.313697 26.9182 0.708335C28.1889 1.63277 29.1053 2.96396 29.5152 4.48092C31.0352 4.89104 32.3687 5.80951 33.2938 7.08333C33.689 7.61137 33.9289 8.23927 33.9865 8.8963C34.0441 9.55332 33.917 10.2134 33.6196 10.8021ZM6.21163 13.5164C8.5998 11.9249 11.3215 10.9027 14.167 10.5287V10.2C14.167 9.94806 14.1118 9.69917 14.0053 9.47082C13.8989 9.24248 13.7437 9.04021 13.5507 8.87825C13.3783 8.72725 13.1743 8.61669 12.9537 8.55468C12.7331 8.49266 12.5014 8.48076 12.2755 8.51983C10.9187 8.75653 9.64652 9.34143 8.58358 10.2173C7.52063 11.0931 6.70332 12.2299 6.21163 13.5164ZM12.4427 30.0333C11.9566 27.9734 10.9059 26.0898 9.40857 24.5938C7.91123 23.0979 6.02651 22.0488 3.966 21.5645C3.32945 23.7118 2.94899 25.9267 2.83256 28.1633C2.80769 28.5642 2.86834 28.9658 3.01049 29.3414C3.15264 29.7171 3.37304 30.0582 3.65707 30.3422C3.9411 30.6262 4.28227 30.8466 4.65796 30.9888C5.03365 31.1309 5.43527 31.1915 5.83618 31.1667C8.0754 31.0512 10.293 30.6708 12.4427 30.0333ZM21.2396 12.7613C12.4002 12.9129 7.58309 14.552 5.08811 18.9408C7.47392 19.593 9.64856 20.8557 11.3976 22.6044C13.1467 24.353 14.4098 26.5273 15.0624 28.9128C19.4488 26.4152 21.088 21.5999 21.2396 12.7613ZM23.4725 19.8333C23.3142 20.7886 23.1038 21.7344 22.842 22.6667H23.7006C24.1345 22.6645 24.5533 22.507 24.8811 22.2227C25.2088 21.9384 25.4239 21.5461 25.4872 21.1168C25.5209 20.9553 25.5166 20.7882 25.4749 20.6286C25.4331 20.4691 25.355 20.3213 25.2466 20.197C25.1381 20.0726 25.0024 19.9751 24.8499 19.912C24.6975 19.8489 24.5325 19.822 24.3679 19.8333H23.4725ZM31.0269 8.76775C30.683 8.29939 30.2465 7.90677 29.7444 7.61431C29.2423 7.32185 28.6854 7.13581 28.1083 7.06775C27.8175 7.01903 27.5491 6.88078 27.3406 6.6723C27.1321 6.46381 26.9938 6.19546 26.9451 5.90467C26.8772 5.3276 26.6912 4.77069 26.3987 4.26861C26.1062 3.76654 25.7135 3.33005 25.2449 2.98633C25.138 2.90327 25.0095 2.85259 24.8747 2.84028C24.7398 2.82798 24.6043 2.85458 24.4841 2.91692C24.3639 2.97077 24.262 3.0586 24.191 3.1696C24.12 3.2806 24.083 3.40992 24.0846 3.54167V9.91667H30.4602C30.5915 9.92045 30.7211 9.88588 30.833 9.81719C30.945 9.74851 31.0345 9.64868 31.0906 9.52992C31.1541 9.4101 31.1818 9.27459 31.1705 9.13949C31.1592 9.00439 31.1094 8.87537 31.0269 8.76775Z"
          fill={fill}
        />
      </svg>
    ),
  },
  {
    label: "password",
    svg: (fill: StyleObject["color"]) => (
      <svg
        width="21"
        height="21"
        viewBox="0 0 39 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.8122 19.093C24.8122 19.5988 24.6257 20.0838 24.2936 20.4415C23.9615 20.7991 23.5111 21 23.0415 21H15.9585C15.4889 21 15.0385 20.7991 14.7064 20.4415C14.3743 20.0838 14.1878 19.5988 14.1878 19.093C14.1878 18.5873 14.3743 18.1022 14.7064 17.7446C15.0385 17.387 15.4889 17.1861 15.9585 17.1861H23.0415C23.5111 17.1861 23.9615 17.387 24.2936 17.7446C24.6257 18.1022 24.8122 18.5873 24.8122 19.093ZM24.2934 0.582173C23.9614 0.224673 23.511 0.0238404 23.0415 0.0238404C22.572 0.0238404 22.1216 0.224673 21.7896 0.582173L19.5 3.04787L17.2104 0.582173C17.0471 0.400039 16.8517 0.254762 16.6356 0.15482C16.4196 0.0548782 16.1872 0.00227228 15.9521 7.20012e-05C15.717 -0.00212828 15.4838 0.0461207 15.2662 0.142004C15.0486 0.237888 14.8509 0.379486 14.6846 0.558535C14.5184 0.737585 14.3869 0.950501 14.2979 1.18486C14.2088 1.41922 14.164 1.67033 14.1661 1.92353C14.1681 2.17674 14.217 2.42697 14.3098 2.65962C14.4026 2.89228 14.5375 3.1027 14.7066 3.27861L16.9962 5.74431L14.7066 8.21002C14.5375 8.38593 14.4026 8.59635 14.3098 8.82901C14.217 9.06166 14.1681 9.31189 14.1661 9.5651C14.164 9.8183 14.2088 10.0694 14.2979 10.3038C14.3869 10.5381 14.5184 10.751 14.6846 10.9301C14.8509 11.1091 15.0486 11.2507 15.2662 11.3466C15.4838 11.4425 15.717 11.4908 15.9521 11.4886C16.1872 11.4864 16.4196 11.4338 16.6356 11.3338C16.8517 11.2339 17.0471 11.0886 17.2104 10.9065L19.5 8.44076L21.7896 10.9065C22.1235 11.2538 22.5708 11.446 23.0351 11.4417C23.4994 11.4373 23.9435 11.2368 24.2718 10.8832C24.6002 10.5297 24.7864 10.0514 24.7904 9.55137C24.7945 9.05137 24.616 8.56967 24.2934 8.21002L22.0038 5.74431L24.2934 3.27861C24.6254 2.92101 24.8119 2.43605 24.8119 1.93039C24.8119 1.42474 24.6254 0.939781 24.2934 0.582173ZM37.2075 17.1861H30.1245C29.6549 17.1861 29.2045 17.387 28.8724 17.7446C28.5403 18.1022 28.3537 18.5873 28.3537 19.093C28.3537 19.5988 28.5403 20.0838 28.8724 20.4415C29.2045 20.7991 29.6549 21 30.1245 21H37.2075C37.6771 21 38.1275 20.7991 38.4596 20.4415C38.7917 20.0838 38.9782 19.5988 38.9782 19.093C38.9782 18.5873 38.7917 18.1022 38.4596 17.7446C38.1275 17.387 37.6771 17.1861 37.2075 17.1861ZM36.1698 5.74431L38.4594 3.27861C38.6285 3.1027 38.7634 2.89228 38.8562 2.65962C38.949 2.42697 38.9979 2.17674 38.9999 1.92353C39.002 1.67033 38.9572 1.41922 38.8681 1.18486C38.7791 0.950501 38.6476 0.737585 38.4814 0.558535C38.3151 0.379486 38.1174 0.237888 37.8998 0.142004C37.6822 0.0461207 37.449 -0.00212828 37.2139 7.20012e-05C36.9787 0.00227228 36.7464 0.0548782 36.5304 0.15482C36.3143 0.254762 36.1189 0.400039 35.9556 0.582173L33.666 3.04787L31.3764 0.582173C31.2131 0.400039 31.0177 0.254762 30.8016 0.15482C30.5856 0.0548782 30.3532 0.00227228 30.1181 7.20012e-05C29.883 -0.00212828 29.6498 0.0461207 29.4322 0.142004C29.2146 0.237888 29.0169 0.379486 28.8506 0.558535C28.6844 0.737585 28.5529 0.950501 28.4639 1.18486C28.3748 1.41922 28.33 1.67033 28.3321 1.92353C28.3341 2.17674 28.3829 2.42697 28.4758 2.65962C28.5686 2.89228 28.7035 3.1027 28.8726 3.27861L31.1622 5.74431L28.8726 8.21002C28.7035 8.38593 28.5686 8.59635 28.4758 8.82901C28.3829 9.06166 28.3341 9.31189 28.3321 9.5651C28.33 9.8183 28.3748 10.0694 28.4639 10.3038C28.5529 10.5381 28.6844 10.751 28.8506 10.9301C29.0169 11.1091 29.2146 11.2507 29.4322 11.3466C29.6498 11.4425 29.883 11.4908 30.1181 11.4886C30.3532 11.4864 30.5856 11.4338 30.8016 11.3338C31.0177 11.2339 31.2131 11.0886 31.3764 10.9065L33.666 8.44076L35.9556 10.9065C36.2895 11.2538 36.7368 11.446 37.2011 11.4417C37.6654 11.4373 38.1095 11.2368 38.4378 10.8832C38.7662 10.5297 38.9524 10.0514 38.9564 9.55137C38.9605 9.05137 38.782 8.56967 38.4594 8.21002L36.1698 5.74431ZM8.87551 17.1861H1.79251C1.32288 17.1861 0.87248 17.387 0.5404 17.7446C0.20832 18.1022 0.0217593 18.5873 0.0217593 19.093C0.0217593 19.5988 0.20832 20.0838 0.5404 20.4415C0.87248 20.7991 1.32288 21 1.79251 21H8.87551C9.34514 21 9.79553 20.7991 10.1276 20.4415C10.4597 20.0838 10.6463 19.5988 10.6463 19.093C10.6463 18.5873 10.4597 18.1022 10.1276 17.7446C9.79553 17.387 9.34514 17.1861 8.87551 17.1861ZM10.1274 0.582173C9.79536 0.224673 9.34504 0.0238404 8.87551 0.0238404C8.40597 0.0238404 7.95565 0.224673 7.62359 0.582173L5.33401 3.04787L3.04443 0.582173C2.88108 0.400039 2.68569 0.254762 2.46965 0.15482C2.25361 0.0548782 2.02125 0.00227228 1.78614 7.20012e-05C1.55102 -0.00212828 1.31785 0.0461207 1.10023 0.142004C0.882608 0.237888 0.684901 0.379486 0.51864 0.558535C0.35238 0.737585 0.220896 0.950501 0.131862 1.18486C0.0428268 1.41922 -0.00197626 1.67033 6.68577e-05 1.92353C0.00210998 2.17674 0.0509582 2.42697 0.143761 2.65962C0.236565 2.89228 0.371464 3.1027 0.540589 3.27861L2.83017 5.74431L0.540589 8.21002C0.371464 8.38593 0.236565 8.59635 0.143761 8.82901C0.0509582 9.06166 0.00210998 9.31189 6.68577e-05 9.5651C-0.00197626 9.8183 0.0428268 10.0694 0.131862 10.3038C0.220896 10.5381 0.35238 10.751 0.51864 10.9301C0.684901 11.1091 0.882608 11.2507 1.10023 11.3466C1.31785 11.4425 1.55102 11.4908 1.78614 11.4886C2.02125 11.4864 2.25361 11.4338 2.46965 11.3338C2.68569 11.2339 2.88108 11.0886 3.04443 10.9065L5.33401 8.44076L7.62359 10.9065C7.78693 11.0886 7.98232 11.2339 8.19836 11.3338C8.4144 11.4338 8.64676 11.4864 8.88188 11.4886C9.117 11.4908 9.35017 11.4425 9.56779 11.3466C9.78541 11.2507 9.98311 11.1091 10.1494 10.9301C10.3156 10.751 10.4471 10.5381 10.5362 10.3038C10.6252 10.0694 10.67 9.8183 10.6679 9.5651C10.6659 9.31189 10.6171 9.06166 10.5243 8.82901C10.4314 8.59635 10.2965 8.38593 10.1274 8.21002L7.83785 5.74431L10.1274 3.27861C10.4594 2.92101 10.6459 2.43605 10.6459 1.93039C10.6459 1.42474 10.4594 0.939781 10.1274 0.582173Z"
          fill={fill}
        />
      </svg>
    ),
  },
  {
    label: "identity theft",
    svg: (fill: StyleObject["fill"]) => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1667 4.66667H17.5V3.5C17.5 2.57174 17.1313 1.6815 16.4749 1.02513C15.8185 0.368749 14.9283 0 14 0C13.0717 0 12.1815 0.368749 11.5251 1.02513C10.8687 1.6815 10.5 2.57174 10.5 3.5V4.66667H5.83333C4.28681 4.66852 2.80415 5.2837 1.71059 6.37726C0.617029 7.47082 0.0018525 8.95347 0 10.5L0 22.1667C0.0018525 23.7132 0.617029 25.1959 1.71059 26.2894C2.80415 27.383 4.28681 27.9981 5.83333 28H22.1667C23.7132 27.9981 25.1959 27.383 26.2894 26.2894C27.383 25.1959 27.9981 23.7132 28 22.1667V10.5C27.9981 8.95347 27.383 7.47082 26.2894 6.37726C25.1959 5.2837 23.7132 4.66852 22.1667 4.66667ZM12.8333 3.5C12.8333 3.19058 12.9562 2.89383 13.175 2.67504C13.3938 2.45625 13.6906 2.33333 14 2.33333C14.3094 2.33333 14.6062 2.45625 14.825 2.67504C15.0437 2.89383 15.1667 3.19058 15.1667 3.5V5.83333C15.1667 6.14275 15.0437 6.4395 14.825 6.65829C14.6062 6.87708 14.3094 7 14 7C13.6906 7 13.3938 6.87708 13.175 6.65829C12.9562 6.4395 12.8333 6.14275 12.8333 5.83333V3.5ZM25.6667 22.1667C25.6667 23.0949 25.2979 23.9852 24.6415 24.6415C23.9852 25.2979 23.0949 25.6667 22.1667 25.6667H5.83333C4.90508 25.6667 4.01484 25.2979 3.35846 24.6415C2.70208 23.9852 2.33333 23.0949 2.33333 22.1667V10.5C2.33333 9.57174 2.70208 8.6815 3.35846 8.02513C4.01484 7.36875 4.90508 7 5.83333 7H10.7147C10.9523 7.68197 11.3962 8.2731 11.9849 8.6914C12.5736 9.1097 13.2778 9.33444 14 9.33444C14.7222 9.33444 15.4264 9.1097 16.0151 8.6914C16.6038 8.2731 17.0477 7.68197 17.2853 7H22.1667C23.0949 7 23.9852 7.36875 24.6415 8.02513C25.2979 8.6815 25.6667 9.57174 25.6667 10.5V22.1667ZM11.6667 11.6667H5.83333C5.52391 11.6667 5.22717 11.7896 5.00838 12.0084C4.78958 12.2272 4.66667 12.5239 4.66667 12.8333V22.1667C4.66667 22.4761 4.78958 22.7728 5.00838 22.9916C5.22717 23.2104 5.52391 23.3333 5.83333 23.3333H11.6667C11.9761 23.3333 12.2728 23.2104 12.4916 22.9916C12.7104 22.7728 12.8333 22.4761 12.8333 22.1667V12.8333C12.8333 12.5239 12.7104 12.2272 12.4916 12.0084C12.2728 11.7896 11.9761 11.6667 11.6667 11.6667ZM10.5 21H7V14H10.5V21ZM23.3333 17.5C23.3333 17.8094 23.2104 18.1062 22.9916 18.325C22.7728 18.5437 22.4761 18.6667 22.1667 18.6667H16.3333C16.0239 18.6667 15.7272 18.5437 15.5084 18.325C15.2896 18.1062 15.1667 17.8094 15.1667 17.5C15.1667 17.1906 15.2896 16.8938 15.5084 16.675C15.7272 16.4562 16.0239 16.3333 16.3333 16.3333H22.1667C22.4761 16.3333 22.7728 16.4562 22.9916 16.675C23.2104 16.8938 23.3333 17.1906 23.3333 17.5ZM23.3333 12.8333C23.3333 13.1428 23.2104 13.4395 22.9916 13.6583C22.7728 13.8771 22.4761 14 22.1667 14H16.3333C16.0239 14 15.7272 13.8771 15.5084 13.6583C15.2896 13.4395 15.1667 13.1428 15.1667 12.8333C15.1667 12.5239 15.2896 12.2272 15.5084 12.0084C15.7272 11.7896 16.0239 11.6667 16.3333 11.6667H22.1667C22.4761 11.6667 22.7728 11.7896 22.9916 12.0084C23.2104 12.2272 23.3333 12.5239 23.3333 12.8333ZM21 22.1667C21 22.4761 20.8771 22.7728 20.6583 22.9916C20.4395 23.2104 20.1428 23.3333 19.8333 23.3333H16.3333C16.0239 23.3333 15.7272 23.2104 15.5084 22.9916C15.2896 22.7728 15.1667 22.4761 15.1667 22.1667C15.1667 21.8572 15.2896 21.5605 15.5084 21.3417C15.7272 21.1229 16.0239 21 16.3333 21H19.8333C20.1428 21 20.4395 21.1229 20.6583 21.3417C20.8771 21.5605 21 21.8572 21 22.1667Z"
          fill={fill}
        />
      </svg>
    ),
  },
];

const getActiveContent = (tab: string) => {
  switch (tab) {
    case "phishing":
      return <PhishingTab />;
    case "password":
      return <PasswordTab />;
    case "identity theft":
      return <IdentityTheftTab />;
  }
};

export const ListItem = ({
  text,
  textOverrides,
}: {
  text: string;
  textOverrides?: StyleObject;
}) => {
  const [css, theme] = useCustomStyletron();
  return (
    <li
      className={css({
        display: "flex",
        alignItems: "baseline",
        justifyContent: "start",
        gap: "10px",
        marginTop: "7px",
        listStyleType: "none",
        padding: "8px",
        borderBottom: "1px solid rgba(218, 195, 228, .3)",
      })}
    >
      <span
        style={{
          minWidth: 8,
          height: 8,
          borderRadius: "50%",
          background: theme.colors.primary,
          display: "block",
        }}
      />
      <StyledParagraphText
        overrides={textOverrides}
        size="12px"
        weight={400}
        style={{}}
      >
        {text}
      </StyledParagraphText>
    </li>
  );
};

export const Tabs = ({ activeTab, setActiveTab }) => {
  const [css, theme] = useCustomStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        background: theme.colors.dark,
        borderRadius: "30px",
        overflow: "hidden",
        height: "fit-content",
        padding: 0,
        margin: 0,
      })}
    >
      {section2Links.map(({ label, svg }) => {
        const isActive = activeTab == label;
        return (
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
              opacity: isActive ? 1 : 0.7,
              height: "100%",
              flexWrap: "wrap",
              cursor: "pointer",
              transition: "background .2s ease-in",
              borderRadius: "5px",
              background: isActive ? theme.colors.primary : "none",
              backdropFilter: "blur(5px)",
              ":hover": {
                opacity: 0.9,
              },
              textAlign: "center",
              [theme.mediaQuery.xsmall]: {
                gap: "10px",
                padding: "10px 20px",
                borderRadius: "30px",
              },
            })}
            onClick={() => setActiveTab(label)}
          >
            {svg(isActive ? theme.colors.dark : "#DAC3E4")}
            <StyledParagraphText
              overrides={{
                textTransform: "uppercase",
                ...theme.typography.font(10, 500),
                height: "fit-content",
                color: isActive ? theme.colors.dark : "#DAC3E4",
                [theme.mediaQuery.xsmall]: {
                  ...theme.typography.font(14, 600),
                },
              }}
            >
              {label}
            </StyledParagraphText>
          </div>
        );
      })}
    </div>
  );
};

export const Section2 = ({ activeTab }) => {
  const [css, theme] = useCustomStyletron();
  return (
    <section
      className={css({
        backgroundColor: theme.colors.dark,
        paddingBottom: "50px",
        width: "100%",
      })}
    >
      {getActiveContent(activeTab)}
    </section>
  );
};
