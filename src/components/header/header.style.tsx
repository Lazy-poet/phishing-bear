import { useCustomStyletron, customStyled } from "../../styles/custom-styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyleObject } from "styletron-react";
import { useState } from "react";
import LocaleSelector from "./localeSelector";

export const DesktopHeaderWrapper = customStyled("div", ({ $theme }) => ({
  display: "none",
  padding: "0 20px",
  [$theme.mediaQuery.small]: {
    display: "flex",
  },
  [$theme.mediaQuery.medium]: {
    padding: "0 50px",
  },
  background: "transparent",
  backdropFilter: "blur(1px)",
  height: "60px",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",
}));

export const MobileHeaderWrapper = customStyled("div", ({ $theme }) => ({
  display: "flex",
  [$theme.mediaQuery.small]: {
    display: "none",
  },
  background: "transparent",
  height: "45px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
}));

export const NavItem: React.FC<{
  href: string;
  logo?: string;
  label: string;
  onClick?: () => void;
  style?: StyleObject;
  activeStyle?: StyleObject;
  wrapperStyle?: StyleObject;
}> = ({ href, activeStyle, logo, label, onClick, style, wrapperStyle }) => {
  const [css, theme] = useCustomStyletron();
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <div
        onClick={onClick}
        className={css({
          height: "100%",
          width: "fit-content",
          padding: 0,
          cursor: "pointer",
          transition: "all .2s ease-in-out",
          display: "grid",
          placeContent: "center",
          margin: "0 10px",
          ...theme.typography.font(12, 500),
          ":hover": {
            background: `rgba(253, 210, 68, .1)`,
          },
          borderBottom: isActive ? `3px solid ${theme.colors.primary}` : "",
          [theme.mediaQuery.small]: {
            ...theme.typography.font(14, 500),
          },
          ...wrapperStyle,
          ...(isActive && activeStyle),
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "5px",
            ...style,
          })}
        >
          {logo && (
            <img
              src={logo}
              alt=""
              className={css({ width: "15px", height: "15px" })}
            />
          )}
          {label}
        </div>
      </div>
    </Link>
  );
};

export const InitialsWrapper = customStyled("div", ({ $theme }) => ({
  width: "54px",
  height: "54px",
  borderRadius: "50%",
  backgroundColor: $theme.colors.secondary,
  color: "#fff",
  display: "grid",
  placeContent: "center",
  textTransform: "uppercase",
  margin: 0,
  // ...$theme.typography.font(24, 400)
}));
export const MyAccountWrapper = ({ onLogout, initials }) => {
  const [css, theme] = useCustomStyletron();
  const [show, setShow] = useState(false);

  return (
    <div
      className={css({
        position: "relative",
        cursor: "pointer",
        flex: 1,
        display: "flex",
        justifyContent: "end",
      })}
    >
      {/* {initials?.length === 2 && */}
      <InitialsWrapper onClick={() => setShow(!show)}>
        {" "}
        {initials}
      </InitialsWrapper>
      {/* } */}
      {show && (
        <div
          className={css({
            width: "190px",
            height: "fit-content",
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            right: "0",
            transform: "translateY(calc(100% + 10px))",
            borderRadius: "5px",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
          })}
        >
          <NavItem
            style={{
              width: "160px",
              justifyContent: "start",
              gap: "20px",
              padding: "15px",
            }}
            href="/my-account"
            label="My account"
            logo="/assets/images/my-account.svg"
          />
          <NavItem
            onClick={onLogout}
            style={{
              width: "160px",
              justifyContent: "start",
              gap: "20px",
              padding: "15px",
            }}
            href=""
            label="Logout"
            logo="/assets/images/logout.svg"
          />
          <LocaleSelector
            overrides={{ justifyContent: "space-between", padding: "15px" }}
          />
        </div>
      )}
    </div>
  );
};
