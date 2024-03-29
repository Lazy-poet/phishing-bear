import React, { useState, useEffect, useRef } from "react";
import {
  PrivateLayout,
  SEO,
  MobileLayout,
  DesktopLayout,
  DashboardWrapper,
  DesktopBanners,
  ChartsWrapper,
  Guages,
  OverviewButton,
  TestResultButton,
  RangeSelector,
  GreetingBanner,
  FriendsBanner,
  TipBanner,
  LineChart,
} from "@components";
import { useCustomStyletron } from "../styles/custom-styles";
import { userServices, subscriptionServices } from "../../services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [css, theme] = useCustomStyletron();
  const [friends, setFriends] = useState([]);
  const [emailData, setEmailData] = useState(
    {} as { clicked: any[]; labels: any[] }
  );
  const [loading, setLoading] = useState(false);
  const [loadingMailData, setLoadingMailData] = useState(false);
  const [active, setActive] = useState(1);
  const [range, setRange] = useState("1m");
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const toastSent = useRef(false);
  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      setLoading(true);
      const resp = await subscriptionServices.verifySubscription();
      if (!resp.error) {
        setHasAccess(true);
        const { data, error } = await userServices.getFriends();
        if (!error) {
          setFriends(data);
        }
      } else {
        setTimeout(() => {
          if (!toastSent.current) {
            toast.info("Select a pricing option");
            toastSent.current = true;
          }
          router.push("/pricing");
        }, 2000);
      }
      setLoading(false);
    })();
  }, [isLoggedIn]);
  useEffect(() => {
    if (!hasAccess) return;
    (async () => {
      setLoadingMailData(true);
      const { data, error } = await userServices.getEmailData(range);
      if (!error) {
        setEmailData(data);
      }
      setLoadingMailData(false);
    })();
  }, [range, hasAccess]);
  return (
    <>
      <SEO />
      <PrivateLayout>
        <DashboardWrapper hasAccess={hasAccess} loading={loading}>
          <DesktopLayout>
            <DesktopBanners friends={friends} loadingFriends={loading} />
            <ChartsWrapper>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 20,
                  width: "100%",
                }}
              >
                <OverviewButton
                  active={active === 1}
                  onClick={() => setActive(1)}
                />
                <TestResultButton
                  active={active === 2}
                  onClick={() => setActive(2)}
                />
                <RangeSelector onChange={setRange} />
              </div>
              <Guages loading={loadingMailData} data={emailData} />
              <LineChart
                data={emailData.clicked}
                labels={emailData.labels}
                range={range}
              />
            </ChartsWrapper>
          </DesktopLayout>

          <MobileLayout>
            <GreetingBanner />
            <TipBanner />

            <ChartsWrapper>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  [theme.mediaQuery.xsmall]: {
                    justifyContent: "start",
                    flex: 0,
                  },
                  gap: "20px",
                  width: "100%",
                })}
              >
                <OverviewButton
                  active={active === 1}
                  onClick={() => setActive(1)}
                />
                <TestResultButton
                  active={active === 2}
                  onClick={() => setActive(2)}
                />
                <RangeSelector
                  onChange={setRange}
                  overrides={{
                    display: "none",
                    [theme.mediaQuery.xsmall]: {
                      display: "block",
                    },
                  }}
                />
              </div>
              <RangeSelector
                onChange={setRange}
                overrides={{
                  display: "block",
                  [theme.mediaQuery.xsmall]: {
                    display: "none",
                  },
                }}
              />
              <Guages loading={loadingMailData} data={emailData} />
              <LineChart
                data={emailData.clicked}
                labels={emailData.labels}
                range={range}
                isMobile
              />
            </ChartsWrapper>
            <div
              className={css({
                height: "fit-content",
                width: "100%",
              })}
            >
              <FriendsBanner loading={loading} friends={friends} />
            </div>
          </MobileLayout>
        </DashboardWrapper>
      </PrivateLayout>
    </>
  );
};

export default Dashboard;
