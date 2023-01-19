import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

import { subscriptionServices } from "../../services";
import {
  Alert,
  SEO,
  StyledButton,
  StyledDarkParagraphText,
  Spinner,
  PrivateLayout,
} from "@components";
import { useCustomStyletron } from "../styles/custom-styles";
import Link from "next/link";
import { toast } from "react-toastify";
import { ActiveModal, toggleModal } from "../../redux/slices/auth.slice";
import { useDispatch } from "react-redux";

const VerifySubscription = () => {
  const { push, query, isReady } = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { session_id } = query;
  const dispatch = useDispatch();
  const requestSent = useRef(false);
  useEffect(() => {
    if (requestSent.current) return;
    if (isReady && !session_id) {
      setLoading(false);
      toast.error("session_id not found");
      push("/pricing");
      return;
    }
    if (session_id) {
      (async () => {
        requestSent.current = true;
        const res = await subscriptionServices.validateSession(
          session_id as string
        );
        if (!res) {
          setError(true);
          push("/pricing");
        }
        push("/dashboard");
        dispatch(toggleModal(ActiveModal.PERSONAL_INFO));
        setLoading(false);
      })();
    }
  }, [isReady, session_id]);

  const [css, theme] = useCustomStyletron();
  return (
    <PrivateLayout noHeader noFooter>
      <SEO />
      <div
        className={css({
          width: "100vw",
          height: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
          gap: "20px",
          scrollSnapAlign: "start",
        })}
      >
        {loading ? (
          <Spinner />
        ) : error ? null : (
          <>
            <svg
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3093 34.6488L31.2026 41.5421L42.6914 25.4578"
                stroke="#009E52"
                stroke-width="3.72796"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="33.5"
                cy="33.5"
                r="31.636"
                stroke="#009E52"
                stroke-width="3.72796"
              />
            </svg>
            <h6>Successful</h6>
            <StyledDarkParagraphText
              size="14px"
              overrides={{ width: "300px", textAlign: "center" }}
            >
              Congratulations, you have successfully subscribed to the plan
            </StyledDarkParagraphText>
            <Link href="/dashboard">
              <StyledButton
                small
                overrides={{
                  background: theme.colors.secondary,
                  color: "#fff",
                }}
              >
                Go to Dashboard
              </StyledButton>
            </Link>
          </>
        )}
      </div>
    </PrivateLayout>
  );
};
export default VerifySubscription;
