import { StyledDarkParagraphText, addSpace, StyledButton } from "@components";
import React, { useState, useEffect } from "react";
import { useCustomStyletron } from "../../styles/custom-styles";
import PricingCard from "./card";
import useSWR from "swr";
import { subscriptionServices } from "../../../services/subscription.service";
import { useSelector } from "react-redux";
import { StyleObject } from "styletron-standard";

type Props = {
  hideEnt?: boolean;
  overrides?: StyleObject;
  cardOverrides?: StyleObject;
};

const Cards = ({ hideEnt, overrides }: Props) => {
  const [css, theme] = useCustomStyletron();
  const [currentPlanId, setCurrentPlanId] = useState("");
  const [plans, setPlans] = useState({} as Record<string, any>);
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  const { data: currentPlanData } = useSWR(
    isLoggedIn ? subscriptionServices.getCurrentPlanRoute : null,
    subscriptionServices.getCurrentPlan
  );
  const { data: allPlans, isLoading } = useSWR(
    isLoggedIn ? subscriptionServices.getPlansRoute : null,
    subscriptionServices.getPlans
  );
  useEffect(() => {
    if (currentPlanData && currentPlanData.data) {
      const price_id = currentPlanData.data.price_id;
      setCurrentPlanId(price_id);
    }
  }, [currentPlanData]);
  useEffect(() => {
    if (allPlans && allPlans.data) {
      setPlans(allPlans.data);
    }
  }, [allPlans]);

  return (
    <div
      className={css({
        maxWidth: "650px",
        margin: "0 auto",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
          gap: "200px",
          [theme.mediaQuery.small]: {
            flexFlow: "row",
            gap: "50px",
          },
          ...overrides,
        })}
      >
        <PricingCard
          currentPlanId={currentPlanId}
          price_id={plans?.month?.price_id}
          bg="rgba(255, 245, 211, 1)"
          logo="/assets/images/monthly_plan.svg"
          cta="Start today"
          btnStyle={{
            background: theme.colors.primary,
            color: theme.colors.dark,
          }}
        >
          <StyledDarkParagraphText
            overrides={{
              ...theme.typography.font(20, 600),
            }}
          >
            Monthly Plan
          </StyledDarkParagraphText>
          {addSpace("vert", "20px")}
          <div
            className={css({
              background: "rgba(249, 235, 192, 1)",
              borderRadius: "15px",
              width: "calc(100% - 40px)",
              padding: "7px 10px",
              textAlign: "center",
              height: "60px",
              display: "grid",
              placeItems: "center",
            })}
          >
            <StyledDarkParagraphText weight={700}>
              $39.00/month
            </StyledDarkParagraphText>
          </div>
          {addSpace("vert", "20px")}
        </PricingCard>
        <PricingCard
          currentPlanId={currentPlanId}
          price_id={plans?.year?.price_id}
          bg="rgba(214, 255, 231, 1)"
          logo="/assets/images/annual_plan.svg"
          cta="Try it for free"
          btnStyle={{
            background: theme.colors.secondary,
            color: "#fff",
          }}
        >
          <div style={{ position: "relative" }}>
            <StyledDarkParagraphText
              overrides={{
                ...theme.typography.font(20, 600),
              }}
            >
              Annual Plan
            </StyledDarkParagraphText>
          </div>
          {addSpace("vert", "20px")}
          <div
            className={css({
              background: "rgba(181, 245, 208, 1)",
              borderRadius: "15px",
              width: "calc(100% - 40px)",
              padding: "7px 10px",
              textAlign: "center",
              height: "60px",
              display: "grid",
              placeItems: "center",
            })}
          >
            <StyledDarkParagraphText weight={700}>
              $19.00/month
            </StyledDarkParagraphText>
          </div>
          {addSpace("vert", "20px")}
        </PricingCard>
      </div>
      {addSpace("vert", "70px")}

      <div
        className={css({
          background: "#F8F8F8",
          padding: "40px",
          width: "100%",
          borderRadius: "30px",
          textAlign: "center",
          position: "relative",
          display: hideEnt ? "none" : "block",
        })}
      >
        <StyledButton
          overrides={{
            position: "absolute",
            bottom: 0,
            right: "50%",
            transform: "translate(50%, 50%)",
            width: "max-content",
            height: "fit-content",
            padding: "10px 30px",
            borderRadius: "30px",
            color: theme.colors.dark,
            border: `2px solid ${theme.colors.dark}`,
            background: "#fff",
            ...theme.typography.font(15, 500),
          }}
        >
          Contact us
        </StyledButton>
        <StyledDarkParagraphText weight={600} size="16px">
          Enterprise customer
        </StyledDarkParagraphText>
        {addSpace("vert", "5px")}

        <StyledDarkParagraphText weight={400} size="14px">
          Contact us, and we'll find the perfect solution for you
        </StyledDarkParagraphText>
      </div>
    </div>
  );
};

export default Cards;
