import Reac, { useEffect, useState } from "react";
import { StyleObject } from "styletron-react";
import { useCustomStyletron } from "../../styles/custom-styles";
import { StyledButton } from "../index";
import { subscriptionServices } from "../../../services/subscription.service";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Spinner } from "@components";
import { current } from "@reduxjs/toolkit";
import { toggleModal, ActiveModal } from "../../../redux/slices/auth.slice";
type Props = {
  children: React.ReactNode;
  cta: string;
  btnStyle: StyleObject;
  logo: string;
  price_id?: string;
  currentPlanId: string;
  bg: string;
};

const Card = ({
  children,
  cta,
  btnStyle,
  logo,
  price_id,
  currentPlanId,
  bg,
}: Props) => {
  const [css, theme] = useCustomStyletron();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const isCurrentPlan =
    isLoggedIn && currentPlanId && currentPlanId === price_id;
  const handleClick = async () => {
    if (!price_id) return;
    const update_sub = currentPlanId && price_id !== currentPlanId;
    setLoading(true);

    const data = update_sub
      ? await subscriptionServices.openPortal()
      : await subscriptionServices.createCheckout(price_id);
    if (data && data.data && !data.error) {
      const url = data.data?.url;
      window.open(url, "_blank, 'noopener,noreferrer");
    }
    setLoading(false);
  };
  return (
    <>
      <div
        className={css({
          height: "fit-content",
          width: "100%",
          maxWidth: "350px",
          [theme.mediaQuery.small]: {
            maxWidth: "280px",
          },
          [theme.mediaQuery.large]: {
            maxWidth: "300px",
          },
          background: bg,
          position: "relative",
          borderRadius: "20px",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "20px",
        })}
      >
        <img
          src={logo}
          className={css({
            height: "200px",
            width: "100%",
            margin: "0 auto",
            marginTop: "-50%",
            marginBottom: "20px",
            objectFit: "cover",
          })}
        />
        {children}
        <StyledButton
          onClick={() => {
            if (isLoggedIn) {
              handleClick();
            } else {
              // router.push('/login');
              dispatch(toggleModal(ActiveModal.LOGIN));
              toast.info("you have to login first");
            }
          }}
          disabled={isCurrentPlan}
          overrides={{
            position: "absolute",
            bottom: 0,
            right: "50%",
            transform: "translate(50%, 50%)",
            width: "max-content",
            height: "fit-content",
            padding: "10px 20px",
            borderRadius: "20px",
            border: `2px solid ${theme.colors.dark}`,
            background: isCurrentPlan ? "#444" : "#fff",
            color: isCurrentPlan ? "#fff" : theme.colors.dark,
            ...(!isCurrentPlan && {
              ":hover": {
                boxShadow: `0 5px 5px rgba(0, 0, 0, .2)`,
                transform: `translate(50%, calc(50% - 1px))`,
              },
            }),

            ...theme.typography.font(16, 600),
          }}
        >
          {isCurrentPlan ? "Current Plan" : cta}
        </StyledButton>
      </div>
      {loading && <Spinner />}
    </>
  );
};

export default Card;
