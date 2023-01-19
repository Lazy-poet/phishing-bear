import {
  StyledDarkParagraphText,
  StyledButton,
  InputField,
  Cards,
  addSpace,
} from "@components";
import { PulseLoader } from "react-spinners";
import { useCustomStyletron } from "../../styles/custom-styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal, ActiveModal } from "../../../redux/slices/auth.slice";
import useSWR from "swr";
import { subscriptionServices } from "../../../services/subscription.service";
import React, { useEffect, useState } from "react";
import { BaseModal } from "./";
import PricingCard from "../home/card";

export const PricingModal = () => {
  const [css, theme] = useCustomStyletron();
  const { activeModal, isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const open = activeModal === ActiveModal.PRICING;
  const [plans, setPlans] = useState({} as Record<string, any>);

  const { data: allPlans, isLoading } = useSWR(
    isLoggedIn ? subscriptionServices.getPlansRoute : null,
    subscriptionServices.getPlans
  );
  useEffect(() => {
    if (allPlans && allPlans.data) {
      setPlans(allPlans.data);
    }
  }, [allPlans]);
  const [loading, setLoading] = useState(false);

  return (
    <BaseModal
      closable={false}
      open={open}
      overrides={{
        width: "fit-content",
        height: "fit-content",
        padding: "40px 30px",
        [theme.mediaQuery.xsmall]: {
          padding: "40px 20px",
        },
        display: "flex",
        overflowY: "visible",
      }}
    >
      <>
        <div
          className={css({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            [theme.mediaQuery.xsmall]: {
              paddingTop: "75px",
            },
          })}
        >
          <img
            src="/assets/images/pricing_bear.svg"
            className={css({
              display: "none",
              [theme.mediaQuery.xsmall]: {
                display: "block",
                width: "150px",
                height: "auto",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            })}
          />
          <StyledDarkParagraphText size="24px" weight={700}>
            Awesome!
          </StyledDarkParagraphText>
          <StyledDarkParagraphText size="15px" align="center" weight={600}>
            You’re ready to go, choose a monthly or annual plan
          </StyledDarkParagraphText>
          {addSpace("vert", "10px")}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              //   flexFlow: "row",
              gap: "20px",
              maxWidth: "100%",
              height: "fit-content",
              padding: "60px 20px 40px",
              overflowX: "auto",
              overflowY: "revert",
            })}
          >
            <div
              className={css({
                minWidth: "min(100%, 280px)",
                [theme.mediaQuery.xsmall]: {
                  minWidth: "revert",
                },
              })}
            >
              <PricingCard
                currentPlanId={null}
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
                    ...theme.typography.font(16, 600),
                  }}
                >
                  Monthly Plan
                </StyledDarkParagraphText>
                {addSpace("vert", "10px")}
                <div
                  className={css({
                    background: "rgba(249, 235, 192, 1)",
                    borderRadius: "15px",
                    width: "fit-content",
                    padding: "7px 20px",
                    textAlign: "center",
                    height: "40px",
                    display: "grid",
                    placeItems: "center",
                  })}
                >
                  <StyledDarkParagraphText size="15px" weight={700}>
                    $39.00/month
                  </StyledDarkParagraphText>
                </div>
                {addSpace("vert", "20px")}
              </PricingCard>
            </div>
            <div
              className={css({
                minWidth: "min(100%, 280px)",
                [theme.mediaQuery.xsmall]: {
                  minWidth: "revert",
                },
              })}
            >
              <PricingCard
                currentPlanId={null}
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
                      ...theme.typography.font(16, 600),
                    }}
                  >
                    Annual Plan
                  </StyledDarkParagraphText>
                </div>
                {addSpace("vert", "10px")}
                <div
                  className={css({
                    background: "rgba(181, 245, 208, 1)",
                    borderRadius: "15px",
                    width: "fit-content",
                    padding: "7px 20px",
                    textAlign: "center",
                    height: "40px",
                    display: "grid",
                    placeItems: "center",
                  })}
                >
                  <StyledDarkParagraphText size="15px" weight={700}>
                    $19.00/month
                  </StyledDarkParagraphText>
                </div>
                {addSpace("vert", "20px")}
              </PricingCard>
            </div>
          </div>
          <StyledButton
            small
            overrides={{
              background: theme.colors.primary,
              transition: "all 0.2s ease",
              color: theme.colors.dark,
              border: "1px solid #381A46",
              borderRadius: "20px",
              height: "44px",
              ...theme.typography.font(14, 600),
              ":hover": {
                opacity: 0.8,
              },
              position: "absolute",
              bottom: 0,
              transform: "translateY(50%)",
            }}
          >
            {loading ? (
              <PulseLoader color="#ffffff" size={5} />
            ) : (
              "More Information"
            )}
          </StyledButton>
        </div>
      </>
    </BaseModal>
  );
};
