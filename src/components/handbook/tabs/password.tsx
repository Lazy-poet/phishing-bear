import { StyledHeaderText, StyledParagraphText } from "@components";
import { useState } from "react";
import { useCustomStyletron } from "../../../styles/custom-styles"

export const PasswordTab = () => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '100px 0',
        width: '100%',
        [theme.mediaQuery.small]: {
            padding: '100px'
        }

    })}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, .1)', padding: '17px', width: 'fit-content', borderRadius: 10 }}><img src="/assets/images/lock.svg" style={{ width: 25, height: 25 }} /></div>
        <StyledHeaderText overrides={{
            textTransform: 'uppercase',
            ...theme.typography.font(22, 700),
            margin: '20px auto !important'
        }}>Creating a password</StyledHeaderText>

        <DesktopSteps />
        <MobileSteps />
    </div>
}

const DesktopSteps = () => {
    const [css, theme] = useCustomStyletron();
    const [activeIndex, setActiveIndex] = useState(0);

    return <div className={css({
        display: 'none',
        gap: '50px',
        alignItems: 'start',
        justifyContent: 'center',
        maxWidth: '800px',
        marginTop: '50px',
        [theme.mediaQuery.small]: {
            display: 'flex',

        }
    })}>
        <div className={css({
            width: 'fit-content',
            flex: 1,
        })}>
            {steps.map(({ index, label }, i) => <div
                className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: '20px',
                    padding: '15px 20px',
                    cursor: 'pointer',
                    ':hover': {
                        opacity: .9
                    },
                    ...(activeIndex === i && {
                        backgroundColor: 'rgba(255, 255, 255, .15)',
                        border: `1px solid rgba(53, 186, 110, .23)`,
                        borderRadius: '12px',
                    })
                })}
                key={index} onClick={() => setActiveIndex(i)}>
                <StyledParagraphText overrides={{
                    ...theme.typography.font(18, 600),
                    color: activeIndex === i ? theme.colors.secondary : '#fff'
                }}>{index}</StyledParagraphText>
                <StyledParagraphText overrides={{
                    ...theme.typography.font(15, 600),
                    color: activeIndex === i ? theme.colors.secondary : '#fff'
                }}>{label}</StyledParagraphText>
            </div>)}
        </div>
        <div className={css({
            flex: 1.2,
            display: 'flex',
            flexDirection: 'column',
            gap: '70px'
        })}>
            <StyledParagraphText size='14px' weight={400}>
                Creating a strong password is a critical step to protecting yourself online. Using long, complex passwords is one of theeasiest ways to defend yourself from cybercrime.
            </StyledParagraphText>
            <div className={css({
                height: 'fit-content',
                width: '100%',
                padding: '25px',
                backgroundColor: 'rgba(255, 255, 255, .15)',
                border: `1px solid rgba(53, 186, 110, .23)`,
                borderRadius: '12px',

            })}>
                <div className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px'
                })}>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px 10px', width: 'fit-content', borderRadius: 10,

                    }}>
                        <StyledParagraphText overrides={{
                            ...theme.typography.font(32, 700),
                            color: theme.colors.secondary
                        }}>{steps[activeIndex].index}</StyledParagraphText>
                    </div>
                    <StyledParagraphText weight={600} className={css({
                        ...theme.typography.font(20, 600)
                    })}>{steps[activeIndex].heading}</StyledParagraphText>
                </div>
                <StyledParagraphText size='15px' weight={400}>
                    {steps[activeIndex].body}
                </StyledParagraphText>

            </div>
        </div>

    </div>
}

const MobileSteps = () => {

    const [css, theme] = useCustomStyletron();
    return <div className={css({
        display: 'flex',
        justifyContent: 'start',
        maxWidth: '100vw',
        overflowX: 'scroll',
        overflowY: 'hidden',
        gap: '20px',
        padding: '20px',
        [theme.mediaQuery.small]: {
            display: 'none'
        }
    })}>
        {steps.map(({ index, heading, body }) => <Card {...{ index, heading, body }} />)}

    </div>
}

const steps = [
    {
        index: '01',
        label: 'Get Creative.',
        heading: 'Use phonetic replacements',
        body: 'Such as “PH” instead of “F”. Or make deliberate, but obviousmisspellings, such as “enjin” instead of “engine.”'
    },
    {
        index: '02',
        label: 'Use a long paraphrase.',
        heading: 'Punctuation and capitalization',
        body: 'According to National Institute of Standards and Technology (NIST) guidance, you shouldconsider using the longest password or passphrase permissible. For example, you can use a passphrase such asa news headline or even the title of the last book you read. Then add in some punctuation and capitalization.'
    },
    {
        index: '03',
        label: 'Double your login protection.',
        heading: 'Multi factor authentication',
        body: 'Use multi-factor authentication (MFA) to ensure that the only person who hasaccess to your account is you.'
    },
    {
        index: '04',
        label: 'Make password hard to guess.',
        heading: 'No familiar names',
        body: 'Do not include personal information in your password such as your name or pets’ names. This information is often easy to find on social media, making it easier for cybercriminals to hackyour accounts.'
    },
    {
        index: '05',
        label: 'Avoid using common words.',
        heading: 'Substitute letters',
        body: 'Substitute letters with numbers and punctuation marks or symbols. For example, @can replace the letter “A” and an exclamation point (!) can replace the letters “I” or “L.”'
    },
    {
        index: '06',
        label: 'Unique account, unique password.',
        heading: 'Different account - different password',
        body: 'Having different passwords for various accounts helps prevent cyber criminals from gaining access to these accounts and protect you in the event of a breach. It’s important to mix things up—find easy-to remember ways to customize your standard password for different sites.'
    },
    {
        index: '07',
        label: 'Utilize a password manager.',
        heading: 'Passwords manager',
        body: 'The most secure way to store all your unique passwords is by using a password manager. With just one password, a computer can create and save passwords for every account that you have.'
    },
]

const Card = ({ index, heading, body }) => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        width: '270px',
        minWidth: '270px',
        maxHeight: '270px',
        padding: '15px',
        backgroundColor: 'rgba(255, 255, 255, .1)',
        border: '1px solid rgba(255, 255, 255, .4)',
        borderRadius: '20px',
        overflowY: 'hidden',


    })}>
        <div className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
        })}>
            <StyledParagraphText overrides={{
                color: theme.colors.secondary,
                ...theme.typography.font(16, 600)
            }}>{index}</StyledParagraphText>
            <StyledParagraphText overrides={{
                color: theme.colors.secondary,
                ...theme.typography.font(14, 600)

            }}>{heading}</StyledParagraphText>
        </div>
        <div style={{
            maxHeight: 'calc(100% - 50px)',
            overflowY: 'scroll'
        }}> <StyledParagraphText size="14px">{body}</StyledParagraphText></div>

    </div>
}