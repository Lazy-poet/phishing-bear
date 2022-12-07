import React, { useState, useEffect } from 'react'
import {
  PrivateLayout, SEO, MobileLayout, DesktopLayout,
  DashboardWrapper, DesktopBanners, ChartsWrapper, Guages, OverviewButton, TestResultButton, RangeSelector,
  GreetingBanner, FriendsBanner, TipBanner
} from '@components'
import { useCustomStyletron } from '../styles/custom-styles'
import { userServices } from '../../services';

const Dashboard = () => {
  const [css, theme] = useCustomStyletron();
  const [friends, setFriends] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { data, error } = await userServices.getFriends();
      if (!error) {
        setFriends(data)
      }
      setLoading(false)
    })()
  }, [])
  useEffect(() => {
    (async () => {
      const { data, error } = await userServices.getEmailData();
      if (!error) {
        setEmailData(data)
      }
    })()
  }, [])
  return (
    <>
      <SEO />
      <PrivateLayout>
        <DashboardWrapper>
          <DesktopLayout>
            <DesktopBanners friends={friends} loadingFriends={loading} />
            <ChartsWrapper>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: 20,
                width: '100%'
              }}>
                <OverviewButton />
                <TestResultButton />
                <RangeSelector />
              </div>
              <Guages data={emailData} />
            </ChartsWrapper>
          </DesktopLayout>

          <MobileLayout>
            <GreetingBanner />
            <TipBanner />

            <ChartsWrapper>
              <div className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                [theme.mediaQuery.xsmall]: {
                  justifyContent: 'start',
                  flex: 0,
                },
                gap: '20px',
                width: '100%',

              })}>
                <OverviewButton />
                <TestResultButton />
                <RangeSelector overrides={{
                  display: 'none',
                  [theme.mediaQuery.xsmall]: {
                    display: 'block',
                  }
                }} />

              </div>
              <RangeSelector overrides={{
                display: 'block',
                [theme.mediaQuery.xsmall]: {
                  display: 'none',
                }
              }} />
              <Guages data={emailData} />
            </ChartsWrapper>
            <div className={css({
              height: 'fit-content',
              width: '100%'
            })}>
              <FriendsBanner loading={loading} friends={friends} />
            </div>
          </MobileLayout>

        </DashboardWrapper>

      </PrivateLayout>
    </>
  )
}

export default Dashboard
