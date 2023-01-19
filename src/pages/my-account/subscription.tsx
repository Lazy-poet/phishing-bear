import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { authServices, subscriptionServices } from "../../../services";
import {
  PrivateLayout,
  SEO,
  AccountLinks,
  AccountWrapper,
  StyledDarkParagraphText,
  StyledButton,
  addSpace,
  Spinner,
} from "@components";
import { useCustomStyletron } from "../../styles/custom-styles";
import useSWR from "swr";

const Subscription = () => {
  const [plans, setPlans] = useState({} as Record<string, any>);
  const [currentPlanId, setCurrentPlanId] = useState("");

  const [css, theme] = useCustomStyletron();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  const { data: currentPlanData } = useSWR(
    isLoggedIn ? subscriptionServices.getCurrentPlanRoute : null,
    subscriptionServices.getCurrentPlan
  );
  useEffect(() => {
    if (currentPlanData && currentPlanData.data) {
      const price_id = currentPlanData.data.price_id;
      setCurrentPlanId(price_id);
    }
  }, [currentPlanData]);
  const { data: allPlans, isLoading } = useSWR(
    isLoggedIn ? subscriptionServices.getPlansRoute : null,
    subscriptionServices.getPlans
  );
  useEffect(() => {
    if (allPlans && allPlans.data) {
      setPlans(allPlans.data);
    }
  }, [allPlans]);

  return (
    <>
      <SEO />
      <PrivateLayout>
        <AccountWrapper>
          <div className={"container shadow rounded-1 bg-white "}>
            <div className="row">
              <AccountLinks />
              <div className="col-12 col-sm-9 p-3 p-sm-5">
                <StyledDarkParagraphText weight={600}>
                  Your plan
                </StyledDarkParagraphText>
                <div
                  className={css({
                    display: "flex",
                    gap: "20px",
                    justifyContent: "start",
                    padding: "20px",
                    // flexWrap: "wrap",
                    maxWidth: "100%",
                    overflow: "auto",
                    [theme.mediaQuery.small]: {
                      padding: 0,
                    },
                  })}
                >
                  <Card
                    url="/assets/images/annual_plan.svg"
                    title="Annual plan"
                    price={19}
                    price_id={plans?.month?.price_id}
                    currentPlanId={currentPlanId}
                  />
                  <Card
                    url="/assets/images/monthly_plan.svg"
                    title="Monthly plan"
                    price={29}
                    price_id={plans?.year?.price_id}
                    currentPlanId={currentPlanId}
                  />
                </div>
              </div>
            </div>
          </div>
        </AccountWrapper>
      </PrivateLayout>
    </>
  );
};

const Card = ({ price_id, url, title, price, currentPlanId }) => {
  const [css, theme] = useCustomStyletron();
  const isActive = price_id === currentPlanId;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const data =
      currentPlanId && price_id !== currentPlanId
        ? await subscriptionServices.openPortal()
        : await subscriptionServices.createCheckout(price_id);
    if (data && data.data && !data.error) {
      const url = data.data?.url;
      window.open(url, "_blank, 'noopener,noreferrer");
    }
    setLoading(false);
  };
  return (
    <div
      className={css({
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        background: theme.colors.bg,
        border: `1px solid ${theme.colors.secondary}`,
        backdropFilter: "blur(10px)",
        width: "280px",
        borderRadius: "10px",
        padding: "10px",
        margin: "30px 0",
        ...(!isActive && {
          background: "#F4F4F4",
          border: "none",
        }),
      })}
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          display: isActive ? "block" : "none",
        }}
      >
        <circle cx="14.5" cy="14.5" r="14.5" fill="#35BA6E" />
        <path
          d="M13.5984 15.8002L11.4234 13.6252C11.2401 13.4419 11.0151 13.3502 10.7484 13.3502C10.4818 13.3502 10.2484 13.4502 10.0484 13.6502C9.8651 13.8335 9.77344 14.0669 9.77344 14.3502C9.77344 14.6335 9.8651 14.8669 10.0484 15.0502L12.8984 17.9002C13.0818 18.0835 13.3151 18.1752 13.5984 18.1752C13.8818 18.1752 14.1151 18.0835 14.2984 17.9002L19.9734 12.2252C20.1568 12.0419 20.2484 11.8169 20.2484 11.5502C20.2484 11.2835 20.1484 11.0502 19.9484 10.8502C19.7651 10.6669 19.5318 10.5752 19.2484 10.5752C18.9651 10.5752 18.7318 10.6669 18.5484 10.8502L13.5984 15.8002Z"
          fill="white"
        />
      </svg>

      <div className={css({ height: "100%", flex: 1 })}>
        <img src={url} style={{ maxHeight: "100%", width: "auto" }} />
      </div>
      <div className={css({ flex: 2 })}>
        <StyledDarkParagraphText size="15px" weight={600}>
          {title}
        </StyledDarkParagraphText>
        <StyledDarkParagraphText size="15px" weight={500}>
          ${price}.00/month
        </StyledDarkParagraphText>
        {addSpace("vert", "10px")}
        <StyledButton
          small
          overrides={{
            background: "#fff",
            border: `2px solid ${theme.colors.dark}`,
            borderRadius: "25px",
            color: theme.colors.dark,
            height: "32px",
            ...(!isActive && {
              background: theme.colors.primary,
            }),
          }}
          onClick={handleClick}
        >
          {isActive ? "Cancel" : "Select"}
        </StyledButton>
      </div>
      {loading && <Spinner />}
    </div>
  );
};
export default Subscription;
