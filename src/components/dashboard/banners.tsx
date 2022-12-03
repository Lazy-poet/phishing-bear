import { StyledButton, StyledDarkParagraphText, StyledParagraphText } from "@components"
import css from "styled-jsx/css"
import { useCustomStyletron } from "../../styles/custom-styles"
import image from './banner.svg'
import { InitialsWrapper } from '@components'
import { useSelector } from 'react-redux'
export const GreetingBanner = ({ }) => {
    const [css, theme] = useCustomStyletron();
    const first_name = useSelector((state: any) => state.auth.profileData.first_name)

    const time = Number(new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).slice(0, 2));
    let message = 'Good Morning';
    if (time >= 17) {
        message = 'Good Evening'
    } else if (time >= 12) {
        message = "Good Afternoon"
    }
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
            {`${message} ${first_name}`}
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
            {time < 12 ? 'Have a nice day' : time < 18 ? 'Enjoy the rest of your day' : 'Have a good night'}
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

export const FriendsBanner: React.FC<{ loading: boolean, friends: Record<string, string>[] }> = ({ loading, friends }) => {
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
            {loading ? <StyledDarkParagraphText>Loading friends</StyledDarkParagraphText>
                : !loading && friends.length === 0 ? <StyledDarkParagraphText size="14px">Add friends to see activities</StyledDarkParagraphText>
                    : friends.map(friend => <FriendItem data={friend} />)}
        </div>

    </div>
}

const FriendItem: React.FC<{ data: Record<string, string> }> = ({ data }) => {
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
        })}>{data.first_name[0]}{data.last_name[0]}</InitialsWrapper>
        <div>
            <StyledDarkParagraphText overrides={{
                ...theme.typography.font(16, 500),
                textTransform: 'capitalize'
            }}>{data.first_name} {data.last_name}</StyledDarkParagraphText>
            <StyledDarkParagraphText overrides={{
                ...theme.typography.font(14),
            }}>See Achievements</StyledDarkParagraphText>
        </div>

    </div>
}

export const DesktopBanners: React.FC<{ loadingFriends: boolean, friends: Record<string, string>[] }> = ({ loadingFriends, friends }) => {
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
        <FriendsBanner loading={loadingFriends} friends={friends} />

    </div>
}