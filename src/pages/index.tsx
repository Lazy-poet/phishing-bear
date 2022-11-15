import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { SEO, Button, LinkButton, PublicLayout, Hero, Cards, FooterBanner, addSpace, StyledDarkParagraphText, } from '@components'
import { useCustomStyletron } from '../styles/custom-styles'

const Home: NextPage = () => {
  const [css, theme] = useCustomStyletron()
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <SEO />
      <PublicLayout>
        <Hero />
        <div style={{
          scrollSnapAlign: "start",
          padding: '0 0 50px'

        }}>
          <StyledDarkParagraphText overrides={{
            textAlign: 'center',
            margin: '0 auto',
            ...theme.typography.font(30, 700),
            maxWidth: '600px'
          }}>Training is the best protection - Detect threats that email gateways can't.</StyledDarkParagraphText>
          {addSpace("vert", '150px')}
          <Cards />
        </div>
        <FooterBanner />
      </PublicLayout>
    </>
  )
}

export default Home
