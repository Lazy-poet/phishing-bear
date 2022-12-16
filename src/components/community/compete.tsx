import { InitialsWrapper, StyledButton, StyledDarkParagraphText, StyledParagraphText } from "@components"
import { useState } from "react"
import { useCustomStyletron } from "../../styles/custom-styles"
import { Challenges, Dropdown } from "../../svgs";
export const CompeteCard = () => {
    const [css, theme] = useCustomStyletron();
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [toggle, setToggle] = useState(true)

    return (
        <div className={
            css({
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                gap: '20px',
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
                        backgroundColor: 'rgba(89, 115, 255, .1)',
                        borderRadius: '5px',
                        padding: '10px',
                        [theme.mediaQuery.xsmall]: {
                            padding: '15px',
                        },
                    })}>
                        <Challenges fill="#5973FF" overrides={{
                            width: '15px',
                            height: '15px',
                            [theme.mediaQuery.xsmall]: {
                                width: '20px',
                                height: '20px',
                            } }} />
                    </div>
                    <StyledParagraphText color='#5973FF' overrides={{
                        ...theme.typography.font(16, 600),
                        [theme.mediaQuery.xsmall]: {
                            ...theme.typography.font(18, 400),

                        }
                    }}>Compete others</StyledParagraphText>

                </div>
                <Dropdown fill="#5973FF" overrides={{
                    width: '10px',
                    height: '10px',
                    transform: !toggle ? 'rotate(180deg)' : '',
                    transition: 'transform .3s ease-in-out',
                    [theme.mediaQuery.xsmall]: {
                        width: '15px',
                        height: '15px',
                    }
                }} />

            </div>
            <div hidden={toggle} className={css({
                width: '100%',
            })}>
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                    <div className={css({
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'start',
                        flexFlow: 'column',
                        [theme.mediaQuery.xsmall]: {
                            alignItems: 'center',
                            flexFlow: 'row',
                        }
                    })}>
                        <StyledDarkParagraphText onClick={() => setActiveTabIndex(0)} overrides={{ cursor: 'pointer', ...theme.typography.font(14, activeTabIndex === 0 ? 600 : 400) }}>Groups</StyledDarkParagraphText>
                        <StyledDarkParagraphText onClick={() => setActiveTabIndex(1)} overrides={{ cursor: 'pointer', ...theme.typography.font(14, activeTabIndex === 1 ? 600 : 400) }}>See friendly groups</StyledDarkParagraphText>
                        <StyledDarkParagraphText onClick={() => setActiveTabIndex(2)} overrides={{ cursor: 'pointer', ...theme.typography.font(14, activeTabIndex === 2 ? 600 : 400) }}>See competing groups</StyledDarkParagraphText>

                    </div>
                    <StyledDarkParagraphText onClick={() => setActiveTabIndex(3)} overrides={{ cursor: 'pointer', ...theme.typography.font(14, activeTabIndex === 3 ? 600 : 400) }}>Create your own group</StyledDarkParagraphText>
                </div>
                <div className={css({
                    width: '100%',
                    display: 'grid',
                    padding: '20px',
                    gridGap: '20px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                })}>
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />

                </div>
                <StyledParagraphText overrides={{ float: 'right', cursor: 'pointer' }} size="14px" color={theme.colors.secondary}>Show more</StyledParagraphText>
            </div>
        </div>
    )
}

const GroupCard = () => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        gap: '10px',
        height: 'fit-content',
        border: '1px solid rgba(0, 0, 0, .1)',
        borderRadius: '10px',
        maxWidth: '500px',

    })}>
        <img src="/assets/images/group_avatar.svg" style={{ width: 100, height: 100 }} />
        <img src="/assets/images/members_avatar.svg" />
        <StyledDarkParagraphText weight={700}>Group name</StyledDarkParagraphText>
        <StyledDarkParagraphText>Group rank </StyledDarkParagraphText>
        <StyledButton overrides={{
            width: '100%',
            height: '30px',
            backgroundColor: theme.colors.bg,
            color: theme.colors.secondary,
            borderRadius: '8px',
            transition: 'all .3s ease-out',
            ':hover': {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.bg,
            },
            ...theme.typography.font(11, 400)
        }}>GROUP PROFILE</StyledButton>

    </div>
}