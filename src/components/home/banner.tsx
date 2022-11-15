import { StyledHeaderText, StyledParagraphText, StyledButton, addSpace } from '@components';
import React from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'

type Props = {}

const Banner = (props: Props) => {
    const [css, theme] = useCustomStyletron();
    return (
        <div className={css({
            width: '100vw',
            height: 'fit-content',
            background: theme.colors.secondary,
            padding: '100px',
            paddingBottom: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
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

            <div className={css({ flex: 1, paddingTop: '50px', display: 'flex', flexDirection: 'column', gap: '20px', alignSelf: 'start', maxWidth: '550px', position: 'relative' })}>
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
                    Reduce your largest attack surface

                </StyledHeaderText>
                <StyledParagraphText overrides={{
                    lineHeight: 1.4,
                    fontSize: '14px',
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
                        padding: '7px 20px',
                        transition: 'all .3s ease',
                        ...theme.typography.font(14, 700),
                        ':hover': {
                            color: theme.colors.secondary,
                            background: '#fff',
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
                        width: 'fit-content',
                        padding: '7px 20px',
                        transition: 'all .3s ease',
                        ...theme.typography.font(14, 700),
                        ':hover': {
                            color: theme.colors.secondary,
                            background: '#fff',
                        }
                    }}>
                        View plans
                    </StyledButton>
                </div>
            </div>
            <div className={css({ flex: 1 })}>
                <img src="/assets/images/ninja-bear.svg" style={{ maxWidth: '80%', height: 'auto', paddingTop: '50px', }} />
            </div>

        </div>
    )
}

export default Banner