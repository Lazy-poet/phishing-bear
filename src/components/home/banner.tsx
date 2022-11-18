import { StyledHeaderText, StyledParagraphText, StyledButton, addSpace } from '@components';
import React from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'

type Props = {}

const Banner = (props: Props) => {
    const [css, theme] = useCustomStyletron();
    return (
        <section className={css({
            width: '100vw',
            height: 'fit-content',
            background: theme.colors.secondary,
            padding: '20px',
            paddingBottom: '50px',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            [theme.mediaQuery.xsmall]: {
                flexFlow: 'row',
                padding: '50px',

            },
            [theme.mediaQuery.medium]: {
                padding: '100px 200px',
                paddingBottom: '50px'

            },
            scrollSnapAlign: "start",
            position: 'relative'

        })}>
            <img src="/assets/images/wave.svg" className={css({
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                object: 'cover'
            })} />

            <div className={css({
                flex: 1,
                zIndex: 2,
                paddingTop: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(2px)',
                [theme.mediaQuery.xsmall]: {
                    alignItems: 'start',

                },
                gap: '20px',
                // alignSelf: 'start',
                position: 'relative',

            })}>
                <StyledHeaderText overrides={{
                    lineHeight: 1.5,
                    fontSize: '24px',
                    textTransform: 'none',
                    textAlign: 'center',
                    [theme.mediaQuery.xsmall]: {
                        textAlign: 'left',

                    },
                    [theme.mediaQuery.medium]: {
                        fontSize: '28px'
                    },
                    [theme.mediaQuery.large]: {
                        lineHeight: 1.6,
                        fontSize: '34px'
                    },

                }}>
                    Reduce your largest attack surface

                </StyledHeaderText>
                <StyledParagraphText overrides={{
                    lineHeight: 1.4,
                    fontSize: '14px',
                    textAlign: 'center',
                    [theme.mediaQuery.xsmall]: {
                        textAlign: 'left',

                    },
                    [theme.mediaQuery.medium]: {
                        lineHeight: 1.5,
                        fontSize: '16px'
                    },
                    [theme.mediaQuery.large]: {
                        lineHeight: 1.6,
                        fontSize: '20px'
                    },
                }}>
                    Reduce your largest attack surface — your end-users. Phishing is big business. Attacks have shown record growth in recent years, and a solid security awareness program is an integral part of any defense-in-depth strategy.

                </StyledParagraphText>
                <div className={css({ display: 'flex', gap: '10px', marginTop: '20px' })}>
                    <StyledButton small overrides={{
                        background: '#fff',
                        color: theme.colors.dark,
                        borderRadius: '30px',
                        border: '2px solid ' + theme.colors.dark,
                        height: 'fit-content',
                        width: 'fit-content',
                        padding: '10px 25px',
                        transition: 'all .3s ease',
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
                    <StyledButton small overrides={{
                        background: 'none',
                        color: '#FFF',
                        borderRadius: '30px',
                        border: '2px solid #fff',

                        height: 'fit-content',
                        width: 'max-content',
                        padding: '10px 25px',
                        transition: 'all .3s ease',
                        boxShadow: `0 -8px 3px rgba(0, 0, 0, .1) inset`,
                        ...theme.typography.font(14, 700),
                        ':hover': {
                            color: theme.colors.secondary,
                            background: '#fff',
                            boxShadow: `0 3px 5px rgba(0, 0, 0, .2)`,
                        }
                    }}>
                        View plans
                    </StyledButton>
                </div>
            </div>
            <div className={css({
                flex: 1,
                padding: '20px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                height: '100%',
                transform: 'translate(-50%, -50%)',
                opacity: .3,
                zIndex: 0,
                [theme.mediaQuery.xsmall]: {
                    position: 'initial',
                    opacity: 1,
                    display: 'block',
                    transform: 'translate(0px, 0px)',
                    zIndex: 1,
                }
            })}>
                <img src="/assets/images/ninja-bear.svg" style={{ maxWidth: '100%', margin: '0 auto', height: 'auto', paddingTop: '50px', }} />
            </div>

        </section>
    )
}

export default Banner