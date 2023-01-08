import { StyledHeaderText, StyledParagraphText, StyledButton, addSpace, ImageWrapper, SectionWrapper } from '@components';
import Link from 'next/link';
import React from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'

type Props = {}

const Banner = (props: Props) => {
    const [css, theme] = useCustomStyletron();
    return (

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
            margin: '0 !important'

        }}>
            <div className={css({
                position: 'absolute',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '100px',
                zIndex: 0
            })}>
                <img src="/assets/images/peeping-ninjas.svg" style={{ maxHeight: '100%' }} />
            </div>
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
                    <StyledHeaderText overrides={{
                        lineHeight: 1.5,
                        fontSize: '16px',
                        textTransform: 'none',
                        textAlign: 'center',
                        [theme.mediaQuery.xsmall]: {
                            textAlign: 'left',

                        },
                        [theme.mediaQuery.medium]: {
                            fontSize: '20px'
                        },
                        [theme.mediaQuery.large]: {
                            lineHeight: 1.6,
                            fontSize: '24px'
                        },

                    }}>
                        Reduce your largest attack surface

                    </StyledHeaderText>
                    <StyledParagraphText overrides={{
                        lineHeight: 1.4,
                        fontSize: '13px',
                        textAlign: 'center',
                        [theme.mediaQuery.xsmall]: {
                            textAlign: 'left',

                        },
                        [theme.mediaQuery.medium]: {
                            lineHeight: 1.5,
                            fontSize: '15px'
                        },
                        [theme.mediaQuery.large]: {
                            lineHeight: 1.6,
                            fontSize: '16px'
                        },
                    }}>
                        Reduce your largest attack surface — your end-users. Phishing is big business. Attacks have shown record growth in recent years, and a solid security awareness program is an integral part of any defense-in-depth strategy.

                    </StyledParagraphText>
                </div>
                <ImageWrapper>
                    <img src="/assets/images/home-banner-bear.svg" alt="Research" className="img-fluid" />
                </ImageWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Banner