import { StyledButton, StyledDarkParagraphText, StyledParagraphText } from "@components"
import css from "styled-jsx/css"
import { useCustomStyletron } from "../../styles/custom-styles"
import image from './banner.svg'
import { InitialsWrapper } from '@components'
export const GreetingBanner = ({ }) => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        backgroundColor: '#fff',
        padding: '25px',
        [theme.mediaQuery.xsmall]: {
            padding: '25px 50px',

        },
        [theme.mediaQuery.small]: {
            padding: '25px 70px',
        },
        height: '120px',
        width: '100%',
        borderRadius: '15px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'start',
        justifyContent: 'center'

    })}>
        <StyledDarkParagraphText overrides={{
            ...theme.typography.font(20, 600),
            [theme.mediaQuery.xsmall]: {
                ...theme.typography.font(23, 600),

            },
            [theme.mediaQuery.medium]: {
                ...theme.typography.font(26, 600),

            },
        }} >
            Good Day {'Emmanuel' || ''}
        </StyledDarkParagraphText>
        <StyledDarkParagraphText overrides={{
            ...theme.typography.font(14, 400),
            [theme.mediaQuery.small]: {
                ...theme.typography.font(16, 400),
            },
            [theme.mediaQuery.medium]: {
                ...theme.typography.font(18, 400),

            },
        }} >
            Have a nice day
        </StyledDarkParagraphText>

    </div>
}

export const TipBanner = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        background: 'linear-gradient(95.16deg, #43D582 3.8%, #FFAE00 102.9%)',
        width: '100%',
        height: '320px',
        overflow: 'hidden',
        borderRadius: '15px',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'start',
        // gap: '20px',
        // [theme.mediaQuery.xsmall]: {
        //     padding: '30px',

        // },
        [theme.mediaQuery.medium]: {
            padding: '50px',

        }

    })}>
        <img src='/assets/images/tip-banner.svg' className={css({
            height: '100%',
            width: 'auto',
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translateX(25%)',
            display: 'none',
            [theme.mediaQuery.xsmall]: {
                display: 'block'
            }
        })} />

        <StyledParagraphText overrides={{ opacity: .7 }}>
            Tip of the day
        </StyledParagraphText>
        <StyledParagraphText overrides={{
            ...theme.typography.font(18, 600),
            width: '100%',
            [theme.mediaQuery.xsmall]: {
                ...theme.typography.font(22, 600),
                maxWidth: '70%'
            },
            [theme.mediaQuery.medium]: {
                ...theme.typography.font(26, 600),
                maxWidth: '70%'
            },
        }}>
            Drive greater awareness to avoid clicking on future Phishing campaign
        </StyledParagraphText>
        <StyledButton small overrides={{
            background: '#fff',
            color: theme.colors.secondary,
            ...theme.typography.font(14, 600),
            borderRadius: '25px',
            width: '100%',
            maxWidth: '200px',
            height: '38px',
            [theme.mediaQuery.xsmall]: {
                width: '130px',
                height: '42px',
                ...theme.typography.font(16, 600),


            },
            transition: 'all .4s ease',
            ':hover': {
                color: '#fff',
                background: '#FFAE00'
            }
        }}>
            Next Tip
        </StyledButton>
    </div>
}

export const FriendsBanner = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        flex: 1,
        padding: '20px',
        height: '100%',
        maxHeight: '470px',
        overflow: 'clip',
        backgroundColor: '#fff',
        borderRadius: '15px'

    })}>
        <StyledDarkParagraphText
            overrides={{
                ...theme.typography.font(20, 500)
            }}>
            Friends activities</StyledDarkParagraphText>

        <div style={{ marginTop: 50, height: '340px', overflowY: 'scroll', }}>
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
        </div>

    </div>
}

const FriendItem = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '20px'
    })}>
        <InitialsWrapper className={css({
            ...theme.typography.font(20),
        })}>SY</InitialsWrapper>
        <div>
            <StyledDarkParagraphText overrides={{
                ...theme.typography.font(16, 500),
            }}>Name</StyledDarkParagraphText>
            <StyledDarkParagraphText overrides={{
                ...theme.typography.font(14),
            }}>See Achievements</StyledDarkParagraphText>
        </div>

    </div>
}

export const DesktopBanners = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        display: 'flex',
        gap: '30px',
        height: 'fit-content',
        width: '100%',
        // backgroundColor: '#fff'
    })}>
        <div className={css({
            display: 'flex',
            flex: 3,
            gap: '30px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        })}>
            <GreetingBanner />
            <TipBanner />
        </div>
        <FriendsBanner />

    </div>
}