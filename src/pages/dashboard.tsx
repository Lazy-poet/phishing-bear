import React from 'react'
import {
  PrivateLayout, SEO, MobileLayout, DesktopLayout,
  DashboardWrapper, DesktopBanners, ChartsWrapper, Guages, OverviewButton, TestResultButton, RangeSelector,
  GreetingBanner, FriendsBanner, TipBanner
} from '@components'
import { useCustomStyletron } from '../styles/custom-styles'

const Dashboard = () => {
  const [css, theme] = useCustomStyletron()
  return (
    <>
      <SEO />
      <PrivateLayout>
        <DashboardWrapper>
          <DesktopLayout>
            <DesktopBanners />
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
              <Guages />
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
              <Guages />
            </ChartsWrapper>
            <div className={css({
              height: 'fit-content',
              width: '100%'
            })}><FriendsBanner /></div>
          </MobileLayout>

        </DashboardWrapper>

      </PrivateLayout>
    </>
  )
}

export default Dashboard
