import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { toggleModal, ActiveModal } from "../../../redux/slices/auth.slice";
import {
  NavItem,
  DesktopHeaderWrapper,
  MobileHeaderWrapper,
} from "./header.style";
import LocaleSelector from "./localeSelector";
import { useCustomStyletron } from "../../styles/custom-styles";
import Sidebar from "../sidebar/sidebar";

type Props = {
  showSidebar: boolean;
  toggleSidebar: () => void;
  headerTheme: "light" | "dark";
};
export const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  // { label: 'Enterprise solutions', href: '/enterprise' },
  // { label: 'Private solutions', href: 'private' },
  { label: "Contact us", href: "/contact" },
  { label: "User platform", href: "/platform" },
];
const NavPublic = ({ showSidebar, toggleSidebar, headerTheme }) => {
  const router = useRouter();
  const [css, theme] = useCustomStyletron();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <DesktopHeaderWrapper
        style={{
          background: headerTheme === "light" ? "#fff" : "",
          color: headerTheme === "light" ? theme.colors.dark : "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "start",
            justifySelf: "flex-end",
            height: "100%",
          }}
        >
          <Link href="/">
            <img
              src={`/assets/images/${
                headerTheme === "light" ? "private_logo" : "logo"
              }.svg`}
              alt="Logo"
              className={css({
                width: "170px",
                marginRight: "20px",
                [theme.mediaQuery.medium]: {
                  marginRight: "50px",
                },
                cursor: "pointer",
                ":hover": {
                  transform: "scale(1.01)",
                },
              })}
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "7px",
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "flex-end",
            height: "100%",
          }}
        >
          <NavItem href="/about" label="About us" />
          <NavItem href="/pricing" label="Pricing" />
          <NavItem
            href="/platform"
            label="User Platform"
            logo="/assets/images/user-platform.svg"
          />
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "flex-end",
            height: "100%",
          }}
        >
          <LocaleSelector />
          <NavItem
            href="/pricing"
            label="Try it for free"
            wrapperStyle={{
              borderRadius: "25px",
              background: "#fff",
              color: theme.colors.dark,
              opacity: 1,
              margin: "10px",
              padding: "0 20px",
              height: "66%",
              border: `1px solid ${
                headerTheme === "light" ? theme.colors.dark : ""
              }`,
              ":hover": {
                opacity: 0.8,
              },
            }}
          />

          {router?.pathname === "/login" ? null : (
            <NavItem
              onClick={() => {
                dispatch(
                  toggleModal(
                    isLoggedIn ? ActiveModal.LOGOUT : ActiveModal.LOGIN
                  )
                );
              }}
              href={""}
              label={`Log ${isLoggedIn ? "out" : "in"}`}
              wrapperStyle={{
                borderRadius: "25px",
                color: headerTheme === "light" ? theme.colors.dark : "#fff",
                border: `1px solid ${
                  headerTheme === "light" ? theme.colors.dark : ""
                }`,
                width: "100px",
                background: "transparent",
                opacity: 1,
                margin: "10px",
                height: "66%",

                ":hover": {
                  opacity: 0.8,
                },
              }}
            />
          )}
        </div>
      </DesktopHeaderWrapper>
      <MobileHeaderWrapper>
        <Link href="/">
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            className={css({
              width: "120px",
              [theme.mediaQuery.xsmall]: {
                width: "150px",
              },
              marginRight: "50px",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.01)",
              },
            })}
          />
        </Link>
        <img
          src="/assets/images/hamburger-light.svg"
          alt="Logo"
          className={css({
            width: "40px",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.01)",
            },
          })}
          onClick={toggleSidebar}
        />
        <Sidebar
          links={links}
          show={showSidebar}
          toggle={toggleSidebar}
          onLogout={() => {
            if (isLoggedIn) {
              dispatch(toggleModal(ActiveModal.LOGOUT));
            }
          }}
        />
      </MobileHeaderWrapper>
    </>
  );
};
export default NavPublic;
