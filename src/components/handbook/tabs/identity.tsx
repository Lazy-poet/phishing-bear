import { StyledHeaderText, StyledParagraphText } from "@components";
import { useCustomStyletron } from "../../../styles/custom-styles";
import { ListItem } from '../'
import { useState } from "react";

export const IdentityTheftTab = () => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexFlow: 'column',
        margin: '0 auto',
        padding: '50px 10px',
        gap: '50px',
        maxWidth: '1200px',
        boxSizing: 'border-box'

    })} >
        <div className={css({
            display: 'flex',
            gap: '10px',
            justifyContent: 'start',
            width: '100%',
            alignItems: 'center'
        })}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, .1)', padding: '10px', width: 'fit-content', borderRadius: 5 }}><img src="/assets/images/person.svg" style={{ width: 15, height: 15 }} /></div>
            <StyledHeaderText overrides={{
                textTransform: 'uppercase',
                ...theme.typography.font(22, 700),
                // margin: '20px auto'
            }}>Identity Theft</StyledHeaderText>
        </div>

        <div className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            [theme.mediaQuery.xsmall]: {
                flexDirection: 'row',
                gap: '50px',

            },
            [theme.mediaQuery.medium]: {
                gap: '80px',

            }
        })}>
            <div className={css({
                padding: '25px',
                backgroundColor: 'rgba(255, 255, 255, .1)',
                borderRadius: '15px',
                flex: 1
            })}>
                <StyledParagraphText overrides={{
                    ...theme.typography.font(15, 600),
                    [theme.mediaQuery.xsmall]: {

                    }
                }}>How to help protect yourself against identity theft</StyledParagraphText>
                <StyledParagraphText overrides={{
                    margin: '10px 0',
                    opacity: .8,
                    ...theme.typography.font(13, 400),
                    [theme.mediaQuery.xsmall]: {

                    }
                }}>Here are some easy ways you can protect yourself against identity theft:</StyledParagraphText>
            </div>
            <div style={{ flex: 1 }}>
                <StyledParagraphText overrides={{ ...theme.typography.font(14, 400), opacity: .8, margin: '10px 0' }}>There were 1,473 reported data breaches in 2021, according to the Identity Theft Resource Center's End-of-Year 2021 Data Breach Report. That represents  a 17 percent increase over 2020.</StyledParagraphText>

                <ListItem text="Some of the biggest breaches in U.S. history occurred in July 2020." />
            </div>
        </div>

        <div className={css({
            display: 'flex',
            flexFlow: 'column',
            gap: '20px',
            padding: '50px 20px',
            backgroundColor: 'rgba(255, 255, 255, .05)',
            width: '100%',
            alignItems: 'center', justifyContent: 'center', borderRadius: '20px',
            [theme.mediaQuery.small]: {
                flexFlow: 'row',
                gap: '10px',
                padding: '20px'
            }

        })}>
            <div className={css({
                display: 'flex',
                alignItems: 'start', gap: '10px',
                maxWidth: '400px',
                padding: '25px',
                borderRadius: '20px',
                flex: 1,
                flexFlow: 'column',
                [theme.mediaQuery.xxsmall]: {
                    flexFlow: 'row',
                }
            })}>
                <img src="/assets/images/2fa.svg" style={{ width: 30, height: 30 }} />
                <div>
                    <StyledParagraphText overrides={{ ...theme.typography.font(14, 600), color: theme.colors.secondary }}>Two-factor authentication.</StyledParagraphText>
                    <StyledParagraphText overrides={{ ...theme.typography.font(12, 400), opacity: .8, margin: '10px 0 0 ' }}>Never give out your personal information — especially on phone calls you didn't initiate.</StyledParagraphText>
                </div>
            </div>
            <div className={css({
                display: 'flex',
                alignItems: 'start', gap: '10px',
                maxWidth: '400px',
                backgroundColor: 'rgba(255, 255, 255, .1)',
                padding: '25px',
                borderRadius: '20px',
                flex: 1,
                flexFlow: 'column',
                [theme.mediaQuery.xxsmall]: {
                    flexFlow: 'row',
                }
            })}>
                <img src="/assets/images/secure_website.svg" style={{ width: 30, height: 30 }} />
                <div>
                    <StyledParagraphText overrides={{ ...theme.typography.font(14, 600), color: theme.colors.secondary }}>Use websites that are secure.</StyledParagraphText>
                    <StyledParagraphText overrides={{ ...theme.typography.font(12, 400), opacity: .8, margin: '10px 0 0 ' }}>The URL will start with an "https" (the "s" stands for "secure").</StyledParagraphText>
                </div>
            </div>
            <div className={css({
                display: 'flex',
                alignItems: 'start', gap: '10px',
                maxWidth: '400px',
                padding: '25px',
                borderRadius: '20px',
                flex: 1,
                flexFlow: 'column',
                [theme.mediaQuery.xxsmall]: {
                    flexFlow: 'row',
                }
            })}>
                <img src="/assets/images/calendar.svg" style={{ width: 30, height: 30 }} />
                <div>
                    <StyledParagraphText overrides={{ ...theme.typography.font(14, 600), color: theme.colors.secondary }}>Check your financial accounts often</StyledParagraphText>
                    <StyledParagraphText overrides={{ ...theme.typography.font(12, 400), opacity: .8, margin: '10px 0 0 ' }}>Keep tabs on your credit reports to look for changes you didn't make.</StyledParagraphText>
                </div>
            </div>
        </div>

        <div className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            [theme.mediaQuery.small]: {
                flexDirection: 'row',
                margin: '50px 0'
            }


        })}>

            <img src="/assets/images/identity_bear.svg" className={css({
                maxHeight: '350px',
                margin: 'auto',
                flex: 1,
                display: 'block',
                [theme.mediaQuery.small]: {
                    maxWidth: '60%'
                }
            })} />

            <div style={{ flex: 2 }}>
                <Accordion title="Create unique, complex passwords, for each account and device." content="A strong password includes a dozen letters, numbers, and symbols. Or you can create a long passphrase, which would be hard for a criminal to guess, but easier for you to remember. Change your password if you suspect the account has been compromised." />
                <Accordion title="Shred documents before throwing them away" content="This might include mail, receipts, bills, and any other paperwork that contains sensitive information." />
                <Accordion title="Choose paperless billing when possible" content="So your account information doesn't get sent to your mailbox. You can also opt out of receiving prescreened offers in the mail." />
                <Accordion title="Leave your Social Security card" content="Medicare card, and debit and credit cards in a safe place at home. Only carry what you absolutely need in your wallet." />
            </div>
        </div>


        <div className={css({
            backgroundColor: 'rgba(255, 255, 255, .1)',
            borderRadius: '10px',
            width: '100vw',


        })}>
            <div className={css({
                maxWidth: '1200px',
                padding: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                flexDirection: 'column',
                margin: '0 auto',
                [theme.mediaQuery.small]: {
                    flexDirection: 'row',
                    padding: '20px 50px',

                }
            })}>
                <div className={css({
                    display: 'flex',
                    alignItems: 'start', gap: '10px',
                    maxWidth: '300px',
                    marginBottom: '20px',
                    borderRadius: '20px',
                    flex: 1,
                    flexFlow: 'column',
                    [theme.mediaQuery.small]: {
                        maxWidth: '100%',

                    }

                })}>
                    <StyledParagraphText overrides={{ ...theme.typography.font(14, 600), color: theme.colors.secondary }}>Don't click links sketchy buttons</StyledParagraphText>
                    <StyledParagraphText overrides={{ ...theme.typography.font(12, 400), opacity: .8, margin: '10px 0 0 ' }}>Don't click links, open attachments, respond to emails from unfamiliar or untrusted sources. These may contain malware.</StyledParagraphText>
                </div>
                <div className={css({
                    display: 'flex',
                    alignItems: 'start', gap: '10px',
                    maxWidth: '300px',
                    borderRadius: '20px',
                    flex: 1,
                    flexFlow: 'column',
                    [theme.mediaQuery.small]: {
                        maxWidth: '100%',

                    }

                })}>
                    <StyledParagraphText overrides={{ ...theme.typography.font(14, 600), color: theme.colors.secondary }}>Set up alerts</StyledParagraphText>
                    <StyledParagraphText overrides={{ ...theme.typography.font(12, 400), opacity: .8, margin: '10px 0 0 ' }}> Set up alerts on your banking and credit card accounts. For example, your bank may notify you each time there's a withdrawal from your checking account.</StyledParagraphText>
                </div>
                <img src="/assets/images/identity_bear2.svg" className={css({
                    flex: 1,
                    maxHeight: '250px',
                })} />
            </div>
        </div>
    </div>
}

export const Accordion = ({ title, content }) => {
    const [css, theme] = useCustomStyletron();
    const [toggle, setToggle] = useState(false)

    return <div className={css(
        {
            position: 'relative',
            padding: '20px 60px 20px 20px',
            backgroundColor: 'rgba(255, 255, 255, .1)',
            transition: 'all 2s ease-in-out',
            width: '100%',
            maxWidth: '600px',
            height: 'fit-content',
            borderRadius: '10px',
            margin: '0 auto 20px',
            cursor: 'pointer',
            [theme.mediaQuery.small]: {
                maxWidth: '100%',

            }

        }

    )}
        onClick={() => setToggle(!toggle)}
    >
        <div className={css({
            // padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, .1)',
            position: 'absolute',
            right: '20px',
            top: '20px',
            height: '25px',
            width: '25px',
            borderRadius: '5px',
            display: 'grid',
            placeContent: 'center',

        })}
        >
            <img src={'/assets/images/open_accordion.svg'} className={
                css({
                    width: '10px', height: '10px',
                    margin: 'auto',
                    transform: toggle ? 'rotate(180deg)' : '',
                    transition: 'transform .3s ease-in-out'
                })} />
        </div>
        <StyledParagraphText overrides={{ ...theme.typography.font(15, 600) }}>{title}</StyledParagraphText>
        <StyledParagraphText overrides={{
            ...theme.typography.font(13, 400),
            marginTop: '10px !important',
            display: toggle ? 'block' : 'none'
        }}>{content}</StyledParagraphText>

    </div>
}