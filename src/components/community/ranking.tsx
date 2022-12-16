import { InitialsWrapper, StyledDarkParagraphText, StyledParagraphText } from "@components"
import { useState } from "react"
import { useCustomStyletron } from "../../styles/custom-styles"
export const FriendsRankingCard = () => {
    const [css, theme] = useCustomStyletron();

    const [toggle, setToggle] = useState(true)

    return (
        <div className={
            css({
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                gap: '40px',
                padding: '20px 10px',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)',
                [theme.mediaQuery.small]: {
                    padding: '20px 40px',

                }
            })
        }>
            <div
                onClick={() => setToggle(!toggle)}
                className={css({
                    width: '100%',
                    height: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '70px',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                })}>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '20px' })}>
                    <div className={css({
                        padding: '10px',
                        [theme.mediaQuery.xsmall]: {
                            padding: '15px',
                        },
                        backgroundColor: 'rgba(53, 186, 110, .1)',
                        borderRadius: '5px'
                    })}>
                        <img src="/assets/images/friend-ranking.svg" alt="" className={css({
                            width: '15px',
                            height: '15px',
                            [theme.mediaQuery.xsmall]: {
                                width: '20px',
                                height: '20px',
                            }
                        })} />

                    </div>
                    <StyledParagraphText color={theme.colors.secondary} overrides={{
                        ...theme.typography.font(16, 600),
                        [theme.mediaQuery.xsmall]: {
                            ...theme.typography.font(18, 400),

                        }
                    }}>Friends ranking</StyledParagraphText>

                </div>
                <img src="/assets/images/friend-ranking-dropdown.svg" className={css({
                    width: '10px',
                    height: '10px',
                    transform: !toggle ? 'rotate(180deg)' : '',
                    transition: 'transform .3s ease-in-out',
                    [theme.mediaQuery.xsmall]: {
                        width: '15px',
                        height: '15px',
                    }
                })} />

            </div>
            <div hidden={toggle} className={css({
                width: '100%',

            })}>
                <div className={css({
                    width: '100%',

                })}>
                    <RankingCard position="01" />
                    <RankingCard position="02" />
                    <RankingCard position="03" />
                    <RankingCard position="04" />
                </div>
                <StyledParagraphText overrides={{ float: 'right', cursor: 'pointer' }} size="14px" color={theme.colors.secondary}>Show more</StyledParagraphText>
            </div>
        </div>
    )
}

export const RankingCard = ({ position }) => {
    const [css, theme] = useCustomStyletron();
    const colors = ['#CCFF00', '#00D1FF', '#FF008A']
    return <div className={css({
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        padding: '20px',
        gap: '20px',
        justifyContent: 'space-between',
        [theme.mediaQuery.small]: {
            flexFlow: 'row',
            padding: '0',
            gap: '10px',

        },
        backgroundColor: '#fff',
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderLeft: `10px solid ${colors[Number(position) - 1] || "#ccc"}`,
        margin: '20px auto'
    })}>
        <div className={css(({
            display: 'flex',
            width: '100%',
            alignItems: 'start',
            flexFlow: 'column',
            gap: '20px',
            [theme.mediaQuery.xsmall]: {
                flexFlow: 'row',
                alignItems: 'center',
                flex: 3.15,
                justifyContent: 'start',

            },
            [theme.mediaQuery.small]: {
                gap: 0,
            },
        }))}>
            <div className={css({
                display: 'none',
                [theme.mediaQuery.small]: {
                    flex: .25,
                    display: 'block',

                },
            })} />
            <div className={css({
                flex: 1,
                [theme.mediaQuery.small]: {
                    flex: .7,
                },
            })}>
                <InitialsWrapper className={css({
                    ...theme.typography.font(20),
                    width: '70px',
                    height: '70px'
                })}>AA</InitialsWrapper>
            </div>
            <div className={css({
                flex: 1,
                [theme.mediaQuery.small]: {
                    flex: 2.2,
                    borderRight: '1px solid #ddd',
                    padding: '10px',
                },
            })}>
                <StyledDarkParagraphText size="16px">
                    Name
                </StyledDarkParagraphText>
                <div className={css({
                    backgroundColor: 'rgba(255, 174, 0, .1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: 'fit-content',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    marginTop: '10px',
                })}>
                    <img src="/assets/images/group.svg" />
                    <StyledParagraphText color="#FFAE00" size="11px" uppercase>Invite to group</StyledParagraphText>
                </div>
                <div className={css({
                    backgroundColor: 'rgba(53, 186, 110, .1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: 'fit-content',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    marginTop: '10px',
                })}>
                    <img src="/assets/images/challenges.svg" />
                    <StyledParagraphText uppercase color={theme.colors.secondary} size="11px">Current challenges</StyledParagraphText>
                </div>
            </div>
        </div>

        <div className={css({
            display: 'flex',
            width: '100%',
            alignItems: 'space-between',
            flexFlow: 'column',
            gap: '30px',
            [theme.mediaQuery.xsmall]: {
                flexFlow: 'row',
                alignItems: 'center',
                flex: 4.4,
                justifyContent: 'start',

            },
            [theme.mediaQuery.small]: {
                gap: 0,
            },

        })}>
            <div className={css({
                flex: 1,
                [theme.mediaQuery.small]: {
                    flex: 2.4,
                },
            })}>
                <TestScore label="Test taken" score="02" />
                <TestScore label="Test passed" score="02" />
            </div>
            <div className={css({
                flex: 1,
                [theme.mediaQuery.small]: {
                    flex: 2,
                },
            })}>
                <Badge position={position} />
            </div>
        </div>
        <div className={css({
            flex: 2,
            alignSelf: 'start',
            [theme.mediaQuery.small]: {
                alignSelf: 'revert',

            }
        })}>
            <MemberHistory date="01.02.2012" />
        </div>
    </div>
}

const TestScore = ({ label, score }) => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        [theme.mediaQuery.small]: {
            maxWidth: '230px',
            padding: '0 20px',

        },
        justifyContent: 'space-between',
        margin: '5px auto'
    })}>
        <StyledDarkParagraphText weight={400} size="16px">{label}</StyledDarkParagraphText>
        <div className={css({
            backgroundColor: '#4E4E4E',
            color: '#FFFFFF',
            ...theme.typography.font(18, 500),
            padding: '3px 15px',
            borderRadius: '5px'
        })} >{score}</div>
    </div>
}

export const Badge = ({ position }) => {
    const [css, theme] = useCustomStyletron();
    const titles = ['CHAMPION', 'UNDERDOG', 'RUNNER']
    return <div className={css({
        width: '100%',
        // height: 'fit-content', 
        backgroundColor: 'rgba(254, 203, 0, .2)',
        display: 'flex',
        flexFlow: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative'
    })}>
        <StyledDarkParagraphText overrides={{ position: 'absolute', top: '5px', left: '5px' }} size="12px">RANK</StyledDarkParagraphText>
        {Number(position) < 4 ? <>
            <img src={`/assets/images/badge_${position}.svg`} style={{ height: 70 }} />
            <StyledDarkParagraphText size="12px">{titles[Number(position) - 1]}</StyledDarkParagraphText>
        </> : <StyledParagraphText size="30px" weight={700} color="#FFAE00">{position}</StyledParagraphText>}
    </div>
}

const MemberHistory = ({ date }) => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
    })}>
        <StyledDarkParagraphText size="15px" weight={400}>Member Since</StyledDarkParagraphText>
        <div className={css({
            backgroundColor: '#4E4E4E',
            color: '#FFFFFF',
            ...theme.typography.font(18, 500),
            padding: '3px 15px',
            borderRadius: '5px'
        })}>{date}</div>
    </div>
}