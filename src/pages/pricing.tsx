import React from 'react';
import type { NextPage } from 'next'
import ContactUs from '../components/contact-us';
import { Button, PublicLayout, LinkButton, SEO, Cards, StyledParagraphText, SectionWrapper, addSpace } from '@components'
import { useCustomStyletron } from '../styles/custom-styles';

const Pricing: NextPage = () => {
  const [css, theme] = useCustomStyletron()
  return (
    <>
      <SEO />
      <PublicLayout>
        <SectionWrapper overrides={{
          background: 'url(/assets/images/about-hero.svg) no-repeat 100% 100%/cover',
          color: '#ff'
        }}>
          <div style={{ padding: '50px' }}>
            <StyledParagraphText overrides={{
              ...theme.typography.font(24, 700),
              maxWidth: '400px',
              margin: '0 auto 20px',
              textAlign: 'center',

              [theme.mediaQuery.small]: {
                ...theme.typography.font(34, 700),
                maxWidth: '700px'

              },
            }}>Simple, straight forward pricing.</StyledParagraphText>
            <StyledParagraphText overrides={{
              ...theme.typography.font(14, 400),
              maxWidth: '600px',
              margin: '0 auto 20px',
              textAlign: 'center',
              [theme.mediaQuery.medium]: {
                ...theme.typography.font(16, 400),

              },
            }}>
              Choose the right plan for your business. Whether you are just getting started or well down the path. We’ve got you covered.
            </StyledParagraphText>
          </div>
        </SectionWrapper>

        <SectionWrapper overrides={{ backgroundColor: "#fff" }}>
          <div className={css({
            padding: '50px 0',
            width: '100%'
          })}>
            <Cards />
          </div>
        </SectionWrapper>
       
        <ContactUs />
      </PublicLayout>
    </>
  )
}
export default Pricing;
