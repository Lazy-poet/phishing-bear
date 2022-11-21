import PrivateLayout from './private-layout'
import PublicLayout from './public-layout'
import Header from './header/index'
// import Footer from './footer'
import SEO from './seo'
import Button from './form-inputs/button'
import CheckBox from './form-inputs/checkbox'
import LinkButton from './form-inputs/link'
import SelectField from './form-inputs/select'
import Alert from './alert'
import Loading from './loading'
import Pagination from './pagination'
import NavPrivate from './header/nav-private'
import NavPublic from './header/nav-public'
import { customStyled, useCustomStyletron } from "../styles/custom-styles";
import { ChangeEvent, useRef, useState } from "react";
export { default as Hero } from './home/hero'
export { default as Cards } from './home/cards'
export { default as FooterBanner } from './home/banner'
export { default as Footer } from './footer/footer'
export { default as SectionWrapper } from './about'
export * from './about'

export {
  PrivateLayout, Header, PublicLayout, SEO, Button, CheckBox, LinkButton, SelectField, Alert, Loading,
  Pagination, NavPrivate, NavPublic,
}


import { DatePicker } from "baseui/datepicker";
import { StyleObject } from 'styletron-react'

interface TextProps {
  isMobile?: boolean;
  color?: string;
  weight?: number;
  align?: "left" | "center" | "right";
  size?: string;
  uppercase?: boolean,
  overrides?: StyleObject

}
interface ButtonProps {
  top: string;
  bottom: string;
  left: string;
  right: string;
  small: boolean;
  overrides?: StyleObject
}

export const addSpace = (
  direction: "vert" | "hor" = "vert",
  size: string = "0px"
) => {
  const isVertical = direction === "vert";
  return (
    <span
      style={{
        display: isVertical ? "block" : "inline",
        maxHeight: 0,
        margin: 0,
        padding: 0,
        width: 0,
        ...(isVertical && { marginTop: size }),
        ...(!isVertical && { marginRight: size }),
        background: "transparent",
      }}
    />
  );
};

export const StyledHeaderText = customStyled<"h1", TextProps>("h1", ({ size, color, weight, uppercase, overrides }) => ({
  color: color || "white",
  fontSize: size || "38px",
  letterSpacing: "1px",
  fontWeight: weight || 700,
  textTransform: uppercase ? 'uppercase' : 'capitalize',
  ...overrides
}));
export const StyledParagraphText = customStyled<"p", TextProps>(
  "p",
  ({ size, color, weight, align, overrides }) => ({
    color: color || "white",
    fontSize: size || "18px",
    letterSpacing: ".5px",
    fontWeight: weight || 300,
    lineHeight: 1.5,
    textAlign: align,
    alignSelf: align === "left" ? "start" : align === "right" ? "end" : align,
    margin: 0,
    ...overrides
  })
);
export const StyledDarkParagraphText = customStyled<any, TextProps>(
  "p",
  ({ size, color, weight, align, overrides, $theme }) => ({
    color: `${$theme.colors.dark} !important`,
    fontSize: size || "18px",
    letterSpacing: ".5px",
    fontWeight: weight || 300,
    lineHeight: 1.5,
    textAlign: align,
    alignSelf: align === "left" ? "start" : align === "right" ? "end" : align,
    margin: 0,
    ...overrides
  })
);

export const StyledInput = customStyled("input", ({ $theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  height: "fit-content",
  background: "transparent",
  border: 'none',
  outline: 'none',
  "::placeholder": {
    color: $theme.colors.bg,
    fontSize: "14px",
    fontWeight: 300,
  },
  borderBottom: "1px solid #fff",
  padding: "10px 20px",
  margin: "10px 0",
  color: '#fff'
}));

export const StyledTextArea = customStyled('textarea', ({ $theme }) => ({
  border: '1px solid rgba(255, 255, 255, .3)',
  borderRadius: '7px',
  background: 'rgba(255, 255, 255, .15)',
  padding: '10px',
  width: '100%',
  color: '#fff',
  fontSize: "14px",
  '::placeholder': {
    color: 'rgba(255, 255, 255, .35)',
    ...$theme.typography.font(15, 400)

  }
}))
export const StyledPasswordInput: React.FC<{ placeholder: string, value: string, name?: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({
  placeholder,
  onChange,
  value, name
}) => {
  const [style] = useCustomStyletron();
  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div
      className={style({
        position: "relative",
        width: "100%",
        height: "fit-content",
      })}
    >
      <StyledInput
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        style={{ paddingRight: 35 }}
        onChange={onChange}
        name={name ?? "password"}
        value={value}
        ref={passwordRef}
      />
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style({
          position: "absolute",
          width: "15px",
          height: "15px",
          right: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        })}
        onClick={() => {
          setShowPassword(!showPassword)
        }}
      >
        <path
          d="M9.9999 12.5C7.6296 12.5 5.71085 10.6654 5.53429 8.34037L2.25618 5.80694C1.82524 6.34756 1.42868 6.91912 1.10868 7.54412C1.03719 7.68553 0.999946 7.84176 0.999946 8.00021C0.999946 8.15867 1.03719 8.3149 1.10868 8.45631C2.80336 11.7629 6.15835 14 9.9999 14C10.8408 14 11.6521 13.875 12.434 13.6732L10.8124 12.4185C10.5446 12.4702 10.2726 12.4975 9.9999 12.5ZM19.8067 14.3157L16.3521 11.6457C17.4015 10.7613 18.2646 9.67702 18.8911 8.45599C18.9626 8.31459 18.9999 8.15835 18.9999 7.9999C18.9999 7.84145 18.9626 7.68522 18.8911 7.54381C17.1964 4.23726 13.8415 2.00008 9.9999 2.00008C8.391 2.00203 6.80823 2.40707 5.39617 3.1782L1.42055 0.105394C1.36871 0.0650529 1.30943 0.0353227 1.24609 0.0179023C1.18275 0.000481962 1.1166 -0.00428703 1.05142 0.00386787C0.98624 0.0120228 0.923305 0.0329417 0.866212 0.0654293C0.809118 0.0979169 0.758986 0.141336 0.71868 0.193206L0.105245 0.982892C0.0238694 1.08757 -0.0125943 1.22029 0.00387315 1.35186C0.0203406 1.48342 0.0883907 1.60306 0.193057 1.68445L18.5793 15.8947C18.6311 15.9351 18.6904 15.9648 18.7537 15.9822C18.8171 15.9996 18.8832 16.0044 18.9484 15.9962C19.0136 15.9881 19.0765 15.9672 19.1336 15.9347C19.1907 15.9022 19.2408 15.8588 19.2811 15.8069L19.8949 15.0172C19.9762 14.9125 20.0126 14.7798 19.9961 14.6482C19.9796 14.5166 19.9115 14.397 19.8067 14.3157ZM14.0655 9.87818L12.8374 8.92881C12.9408 8.62989 12.9957 8.31633 12.9999 8.00006C13.006 7.53702 12.9034 7.079 12.7004 6.66279C12.4974 6.24659 12.1996 5.8838 11.8309 5.60357C11.4622 5.32334 11.033 5.13348 10.5776 5.04923C10.1223 4.96499 9.65349 4.98872 9.20897 5.1185C9.39741 5.37385 9.49934 5.68272 9.4999 6.00006C9.49524 6.10567 9.4791 6.21045 9.45178 6.31256L7.15147 4.53476C7.95053 3.86701 8.95857 3.50084 9.9999 3.50007C10.5909 3.49974 11.1762 3.61591 11.7224 3.84194C12.2685 4.06797 12.7647 4.39943 13.1826 4.81735C13.6005 5.23528 13.932 5.73149 14.158 6.2776C14.384 6.82371 14.5002 7.40902 14.4999 8.00006C14.4999 8.67599 14.3346 9.30599 14.0655 9.87849V9.87818Z"
          fill={showPassword ? "#000" : "#999999"}
        />
      </svg>
    </div>
  );
};

export const StyledButton = customStyled<"button", Partial<ButtonProps>>(
  "button",
  ({ top, bottom, left, right, small, overrides, $theme }) => ({
    color: "#fff",
    ...(!small && { width: "100%" }),
    height: "35px",
    outline: "none",
    border: "none",
    padding: '0 20px',
    margin: `${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`,
    cursor: "pointer",
    fontWeight: 500,
    ":disabled": {
      opacity: .5,
      cursor: 'not-allowed'
    },
    ...overrides

  })
);
export const InputField: React.FC<
  {
    label: string,
    placeholder?: string,
    type: "text" | "email" | "select" | "checkbox" | "password",
    options?: { name: string, value: string }[],
    name: string,
    value: string,
    error?: any,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({
  label,
  placeholder,
  type,
  options,
  name,
  value,
  onChange,
  required,
  error,
  ...others
}) => {
    const [css, theme] = useCustomStyletron()
    return (
      <div
        className={css({
          fontSize: "16px",
          fontWeight: 400,
          textTransform: "capitalize",
          margin: '10px 0',
          color: '#fff'
        })}
        {...others}
      >
        {type === "select" ? (
          <>
            <label htmlFor={name}>{label}</label>
            <StyledCustomSelect
              placeholder={placeholder}
              options={options!}
              onSelect={onChange}
              name={name}
              value={value}
              {...others}
            />
          </>
        ) : (
          <div className={css({ display: 'flex', flexFlow: 'column', alignItems: 'start' })}>
            <label htmlFor={name}>{label} {required && <strong title={`${label} is required`} style={{ color: 'red', fontSize: '1rem' }}>*</strong>}</label>
            <StyledInput
              id={name}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              {...others}
            />
            {error && <StyledParagraphText weight={400} size={'.7rem'} style={{
              color: 'red'
            }}>{error} </StyledParagraphText>}
          </div>
        )}
      </div>
    )
  }

export const StyledCustomSelect: React.FC<{
  placeholder: string;
  options: { value: string, name: string }[];
  onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string,
}> = ({ placeholder, options, onSelect, name, value, ...others }) => {
  const [css] = useCustomStyletron();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const inputRef = useRef(null);
  const inputStyle = css({
    background: "#fff !important",
    outline: 'none',
    "::placeholder": {
      color: "rgba(176, 176, 176, 1)",
    },
    ":hover": {
      cursor: "pointer",
    },
  });
  return (
    <div
      className={css({
        width: "100%",
        height: "fit-content",
        position: "relative",
        gridArea: "input",

      })}
    >
      <div
        className={css({
          position: "relative",
          width: "100%",
          height: "fit-content",

        })}
        onClick={(e) => {
          if ((others as any).readOnly) return
          setOptionsOpen(!optionsOpen);
        }}
      >
        <StyledInput
          ref={inputRef}
          className={inputStyle}
          readOnly
          value={value}
          placeholder={placeholder}
          name={name}
        />
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            right: "7%",
            transform: "translateY(-50%)",
          }}
        >
          <path
            d="M0.605575 0H8.39442C8.93326 0 9.20267 0.764898 8.82125 1.21316L4.92834 5.79188C4.69222 6.06937 4.30778 6.06937 4.07166 5.79188L0.178747 1.21316C-0.202673 0.764898 0.0667427 0 0.605575 0Z"
            fill="#0E294B"
          />
        </svg>
      </div>
      {/**handle clickaway */}
      {optionsOpen && <div onClick={() => setOptionsOpen(false)} className={css({ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, .02)', zIndex: 1 })} />}

      <div
        className={css({
          position: "absolute",
          bottom: "0",
          transform: "translateY(calc(100% - 12px))",
          left: 0,
          height: "fit-content",
          width: "100%",
          display: optionsOpen ? "flex" : "none",
          flexFlow: "column",
          border: "1px solid rgba(139, 139, 139, 1)",
          zIndex: 1,
          maxHeight: '300px',
          overflowY: 'auto'


        })}
      >
        {options.map((opt) => (
          <StyledInput
            onClick={() => {
              onSelect({ target: { name, value: opt.name } } as any)
              setOptionsOpen(false);
            }}
            readOnly
            value={opt.name}
            className={inputStyle + ' ' + css({
              border: 'none',
              outline: 'none',
              margin: 0,
              ':not(:last-child)': {
                borderBottom: "1px solid rgba(139, 139, 139, 1)",
              },
              ':hover': {
                background: "rgba(241, 241, 241, 1)"
              },
              ...(value === opt.name && { background: 'rgba(241, 241, 241, 1) !important' })
            })}
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
};