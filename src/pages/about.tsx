import React from 'react'
import type { NextPage } from 'next'
import { Button, PublicLayout, LinkButton, SEO, SectionWrapper, StyledParagraphText, ImageWrapper, SectionText, StyledButton, StyledDarkParagraphText } from '@components'
import { useCustomStyletron } from '../styles/custom-styles'

const About: NextPage = () => {
  const [css, theme] = useCustomStyletron()
  return (
    <>
      <SEO />
      <PublicLayout>
        <SectionWrapper overrides={{
          color: theme.colors.dark,
          background: theme.colors.bg
        }}>
          <div className={css({

          })}>
            <StyledParagraphText overrides={{
              color: theme.colors.dark,
              ...theme.typography.font(24, 700),
              maxWidth: '400px',
              margin: '0 auto 20px',
              textAlign: 'center',

              [theme.mediaQuery.small]: {
                ...theme.typography.font(34, 700),
                maxWidth: '700px'

              },
            }}>Phishing protection can be hard, but it doesn't have to be</StyledParagraphText>
            <StyledParagraphText overrides={{
              color: theme.colors.dark,
              ...theme.typography.font(14, 400),
              maxWidth: '1000px',
              margin: '0 auto 20px',
              textAlign: 'center',
              [theme.mediaQuery.medium]: {
                ...theme.typography.font(18, 400),

              },
              [theme.mediaQuery.large]: {
                ...theme.typography.font(22, 400),

              },
            }}>
              We use state of the art cyber security combined with the finest user experience tools available, to create a seamless and enjoyable phishing awareness program. You stay secure without even noticing it.
            </StyledParagraphText>
          </div>
        </SectionWrapper>

        <SectionWrapper overrides={{
          background: theme.colors.dark,
          color: "#fff"
        }}>
          <SectionText heading="Reduce your largest attack surface — your end-users." body="Phishing attacks have shown record growth in recent years and a solid security awareness program is essential for organizations to stay safe. We educate your end-users in a smooth and seamless way. Helping them to always remain secure without ever taking focus off their ordinary work. We provides you with the flexibility and customization your organization needs to facilitate a positive security awareness culture.”" />
          <ImageWrapper>
            <img src="/assets/images/hackers.png" alt="Hackers" className="img-fluid" />
          </ImageWrapper>
        </SectionWrapper>

        <SectionWrapper overrides={{
          color: theme.colors.dark,
          background: theme.colors.bg
        }}>
          <ImageWrapper>
            <img src="/assets/images/research.png" alt="Research" className="img-fluid" />
          </ImageWrapper>
          <SectionText heading="Phishing protection can be hard, but it doesn’t have to be." body="We use state of the art cyber security combined with the finest user experience  tools available, to create a seamless and enjoyable phishing awareness program. You stay secure without even noticing it. " />
        </SectionWrapper>

        <SectionWrapper overrides={{
          background: theme.colors.dark,
          color: '#fff'
        }}>
          <SectionText heading="We think like hackers - but we’re nice" body="Phishing attacks are as broad as human creativity can go. We analyze millions of emails, URLs, files, and other data points each day to make sure we stay up to date with the latest threats. This constant stream of intelligence ensures user training covers current phishing tactics. We always create socially relevant attack simulations, covering multiple scenarios from beginner to expert, and all translated into many different languages." />
          <ImageWrapper>
            <img src="/assets/images/standstill.png" alt="Stand Still" className="img-fluid" />
          </ImageWrapper>
        </SectionWrapper>

        <SectionWrapper overrides={{
          color: theme.colors.dark,
          background: theme.colors.bg
        }}>
          <div className={css({ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' })}>
            <StyledParagraphText overrides={{
              color: theme.colors.dark,
              ...theme.typography.font(20, 600),
              maxWidth: '1000px',
              margin: '0 auto 20px',
              textAlign: 'center',
              [theme.mediaQuery.medium]: {
                ...theme.typography.font(23, 600),

              },
              [theme.mediaQuery.large]: {
                ...theme.typography.font(26, 600),

              },
            }}>
              Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data.
            </StyledParagraphText>
            <StyledButton small overrides={{
              background: theme.colors.secondary,
              color: '#fff',
              borderRadius: '30px',
              border: '2px solid #fff',
              height: 'fit-content',
              width: 'fit-content',
              padding: '10px 25px',
              transition: 'all .3s ease',
              margin: '0 auto',
              boxShadow: `0 -8px 3px rgba(0, 0, 0, .1) inset`,
              ...theme.typography.font(14, 700),
              ':hover': {
                color: theme.colors.secondary,
                background: '#fff',
                borderColor: theme.colors.secondary,
                boxShadow: `0 3px 5px rgba(0, 0, 0, .2)`,

              }
            }}>
              Try it for free
            </StyledButton>
            <StyledDarkParagraphText overrides={{ textDecoration: 'underline' }}>View plans</StyledDarkParagraphText>
          </div>
        </SectionWrapper>
      </PublicLayout>
    </>
  )
}

export default About;
