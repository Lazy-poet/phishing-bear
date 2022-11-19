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
        <SectionWrapper overrides={{ background: theme.colors.dark, color: '#ff' }}>
          <div>
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
              maxWidth: '1000px',
              margin: '0 auto 20px',
              textAlign: 'center',
              [theme.mediaQuery.medium]: {
                ...theme.typography.font(16, 400),

              },
              [theme.mediaQuery.large]: {
                ...theme.typography.font(20, 400),

              },
            }}>
              Choose the right plan for your business. Whether you are just getting started or well down the path. We’ve got you covered.
            </StyledParagraphText>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className={css({
            padding: '100px 0'
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
