import React from 'react';
import { useCustomStyletron } from '../../styles/custom-styles';
import { addSpace, StyledButton, StyledHeaderText, StyledParagraphText } from '../index'

type Props = {}

const Hero = (props: Props) => {
    const [css, theme] = useCustomStyletron()
    return (
        <section className={css({
            width: '100vw',
            height: 'fit-content',
            background: 'url(/assets/images/hero.svg) no-repeat 100% 100%/cover',
            padding: '50px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '50px',
            [theme.mediaQuery.small]: {
                flexDirection: 'row',
                textAlign: 'left',
                gap: 0

            },
            [theme.mediaQuery.medium]: {
                padding: '100px 200px',
            },
            scrollSnapAlign: "start",



        })}>
            <div className={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', alignSelf: 'start', maxWidth: '550px' })}>
                <StyledHeaderText overrides={{
                    lineHeight: 1.5,
                    fontSize: '24px',
                    textTransform: 'none',
                    [theme.mediaQuery.medium]: {
                        fontSize: '28px'
                    },
                    [theme.mediaQuery.large]: {
                        lineHeight: 1.6,
                        fontSize: '34px'
                    },

                }}>
                    State of the art protection for phishing and business email compromise

                </StyledHeaderText>
                <StyledParagraphText overrides={{
                    lineHeight: 1.7,
                    fontSize: '14px',
                    [theme.mediaQuery.medium]: {
                        fontSize: '16px'
                    },
                    [theme.mediaQuery.large]: {
                        lineHeight: 1.6,
                        fontSize: '20px'
                    },
                }}>
                    Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data.

                </StyledParagraphText>
                <StyledButton top="20px" small overrides={{
                    background: theme.colors.primary,
                    color: theme.colors.dark,
                    borderRadius: '5px',
                    height: '40px',
                    width: '100%',
                    padding: '0 30px',
                    transition: 'all .3s ease',
                    ...theme.typography.font(16, 700),
                    ':hover': {
                        color: theme.colors.secondary,
                        background: '#fff',
                    },
                    [theme.mediaQuery.small]: {
                        height: '60px',
                        width: 'fit-content',

                    }
                }}>
                    Try it for free
                </StyledButton>
            </div>
            <div className={css({ flex: 1 })}>
                <img src="/assets/images/astro-bear-ninja.svg" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </section>
    )
}

export default Hero