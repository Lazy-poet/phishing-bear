import React from 'react'
import type { NextPage } from 'next'
import { Button, PublicLayout, LinkButton, SEO, SectionWrapper, StyledParagraphText, ImageWrapper, SectionText, StyledButton, StyledDarkParagraphText } from '@components'
import { useCustomStyletron } from '../styles/custom-styles'
import Link from 'next/link'

const About: NextPage = () => {
  const [css, theme] = useCustomStyletron()
  return (
    <>
      <SEO />
      <PublicLayout>
        <SectionWrapper overrides={{
          color: '#fff',
          background: 'url(/assets/images/about-hero.svg) no-repeat 100% 100%/cover',
        }}>
          <div className={css({
            padding: '50px 0'
          })}>
            <StyledParagraphText overrides={{
              color: '#fff',
              ...theme.typography.font(24, 700),
              maxWidth: '400px',
              margin: '0 auto 20px',
              textAlign: 'center',

              [theme.mediaQuery.small]: {
                ...theme.typography.font(34, 700),
                maxWidth: '600px'

              },
            }}>Phishing protection can be hard, but it doesn't have to be</StyledParagraphText>
            <StyledParagraphText overrides={{
              color: '#fff',
              ...theme.typography.font(14, 400),
              maxWidth: '600px',
              margin: '0 auto 20px',
              textAlign: 'center',
              [theme.mediaQuery.medium]: {
                ...theme.typography.font(16, 400),

              },
              // [theme.mediaQuery.large]: {
              //   ...theme.typography.font(1, 400),

              // },
            }}>
              We use state of the art cyber security combined with the finest user experience tools available, to create a seamless and enjoyable phishing awareness program. You stay secure without even noticing it.
            </StyledParagraphText>
          </div>
        </SectionWrapper>

        <SectionWrapper overrides={{
          color: theme.colors.dark,
          // color: "#fff"
          // padding: '50px'
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
          color: theme.colors.dark,
          background: '#fff'
        }}>
          <SectionText heading="We think like hackers - but we’re nice" body="Phishing attacks are as broad as human creativity can go. We analyze millions of emails, URLs, files, and other data points each day to make sure we stay up to date with the latest threats. This constant stream of intelligence ensures user training covers current phishing tactics. We always create socially relevant attack simulations, covering multiple scenarios from beginner to expert, and all translated into many different languages." />
          <ImageWrapper>
            <img src="/assets/images/standstill.png" alt="Stand Still" className="img-fluid" />
          </ImageWrapper>
        </SectionWrapper>

        <SectionWrapper overrides={{
          color: theme.colors.dark,
          background: '#fff url(/assets/images/about-bottom-hero.svg) no-repeat center center/cover',
          height: 'auto',
          minHeight: '350px',
          [theme.mediaQuery.xsmall]: {
            minHeight: '450px',

          },
          [theme.mediaQuery.xsmall]: {
            minHeight: '550px',

          },
          position: 'relative',

        }}>
          <div className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            padding: '20px',
            height: 'fit-content',
            maxHeight: '400px',
            background: '#3BC376',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 'calc(100% - 40px)',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px',
            [theme.mediaQuery.small]: {
              borderTopLeftRadius: '100px',
              borderTopRightRadius: '100px',
              padding: '50px',

            },
            [theme.mediaQuery.large]: {
              maxWidth: '1080px',
              borderTopLeftRadius: '200px',
              borderTopRightRadius: '200px',
              padding: '50px 100px',

            }
          })}>
            <div className={css({
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              gap: '15px',
              flex: 2,
              zIndex: 1
            })}>
              <StyledParagraphText overrides={{
                color: '#fff',
                ...theme.typography.font(14, 500),
                maxWidth: '1000px',
                margin: '0 auto 20px',
                [theme.mediaQuery.medium]: {
                  ...theme.typography.font(16, 500),

                },
                [theme.mediaQuery.large]: {
                  ...theme.typography.font(18, 500),

                },
              }}>
                Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data.
              </StyledParagraphText>
              <div className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '15px',
                width: 'fit-content',
                
              })}>
                <Link href="/pricing">
                  <StyledButton small overrides={{
                    color: theme.colors.dark,
                    background: '#fff',
                    borderRadius: '30px',
                    border: '2px solid #fff',
                    height: 'fit-content',
                    width: 'fit-content',
                    padding: '10px 25px',
                    transition: 'all .3s ease',
                    boxShadow: `0 -8px 3px rgba(0, 0, 0, .1) inset`,
                    ...theme.typography.font(12, 700),
                    ':hover': {
                      color: theme.colors.secondary,
                      background: '#fff',
                      borderColor: theme.colors.secondary,
                      boxShadow: `0 3px 5px rgba(0, 0, 0, .2)`,

                    }
                  }}>
                    Try it for free
                  </StyledButton>
                </Link>
                <Link href="/pricing">
                  <StyledButton small overrides={{
                    background: theme.colors.secondary,
                    color: '#fff',
                    borderRadius: '30px',
                    border: '2px solid #fff',
                    height: 'fit-content',
                    width: 'fit-content',
                    padding: '10px 25px',
                    transition: 'all .3s ease',
                    boxShadow: `0 -8px 3px rgba(0, 0, 0, .1) inset`,
                    ...theme.typography.font(12, 700),
                    ':hover': {
                      color: theme.colors.secondary,
                      background: '#fff',
                      borderColor: theme.colors.secondary,
                      boxShadow: `0 3px 5px rgba(0, 0, 0, .2)`,

                    }
                  }}>View plans </StyledButton>
                </Link>
              </div>
            </div>
            <ImageWrapper>
              <img src="/assets/images/rocket-bear.svg" alt="Research" className="img-fluid" />
            </ImageWrapper>
          </div>
        </SectionWrapper>
      </PublicLayout>
    </>
  )
}

export default About;
