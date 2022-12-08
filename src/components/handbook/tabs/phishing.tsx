import { StyledParagraphText } from "@components";
import { useCustomStyletron } from "../../../styles/custom-styles";
import { ListItem } from '../'
export const PhishingTab = () => {
    const [css, theme] = useCustomStyletron();
    return <div>
        <div className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexFlow: 'column',
            margin: '0 auto',
            padding: '50px 5vw',
            gap: '30px',


            [theme.mediaQuery.xsmall]: {
                padding: '6rem',
                maxWidth: '750px',
                flexFlow: 'row',
                gap: '80px',
                height: '500px',


            }
        })}>
            <div style={{ flex: 1.3 }}>

                <img src="/assets/images/awareness_bear.svg" className={css({
                    height: 'auto',
                    width: '200px',
                    maxHeight: '100%',
                    [theme.mediaQuery.xsmall]: {
                        width: '100%'
                    }
                })} />
            </div>
            <div style={{
                flex: 2,

            }}>
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '20px', marginBottom: '20px' })}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, .1)', padding: '15px 17px', width: 'fit-content', borderRadius: 10 }}><img src="/assets/images/ribbon.svg" style={{ width: 20, height: 20 }} /></div>
                    <StyledParagraphText weight={700} size="20px">Awareness</StyledParagraphText>
                </div>
                <StyledParagraphText size="13.5px" weight={400}>
                    PhishingBear can help better prepare your employees to identify phishing emails and avoid the financial and repetitional risks associated with phishing and ransomware.
                </StyledParagraphText>
            </div>
        </div>

        <div className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexFlow: 'column',
            margin: '0 auto',
            padding: '50px 5vw',
            gap: '30px',

            [theme.mediaQuery.xsmall]: {
                padding: '6rem',
                maxWidth: '750px',
                flexFlow: 'row',
                gap: '80px',
                height: '500px',


            },
            backgroundColor: 'rgba(255, 255, 255, .05)',
            backdropFilter: 'blur(5px)'

        })}>
            <div className={css({
                flex: 1.7,
                [theme.mediaQuery.xsmall]: {
                    order: 2

                },
            })}>
                <img src="/assets/images/response_bear.svg" className={css({
                    height: 'auto',
                    width: '200px',
                    maxHeight: '100%',
                    [theme.mediaQuery.xsmall]: {
                        width: '100%'
                    }

                })} />
            </div>
            <div style={{
                flex: 2,
                width: '100%'

            }}>
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '20px', marginBottom: '20px' })}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, .1)', padding: '15px 17px', width: 'fit-content', borderRadius: 10 }}><img src="/assets/images/response_fist.svg" style={{ width: 20, height: 20 }} /></div>
                    <StyledParagraphText weight={700} size="20px">Response</StyledParagraphText>
                </div>
                <StyledParagraphText size="13.5px" weight={400} overrides={{ marginBottom: '20px' }}>
                    Should your organisation be impacted by a phishing incident, PhishingBear can support with a rapid response capability.
                </StyledParagraphText>
                <StyledParagraphText size="18px" weight={600}>Activities include:</StyledParagraphText>
                <div>
                    <ListItem text="Assessment of impact and damage" />
                    <ListItem text="Immediately implement remediations to contain and limit further impact" />
                    <ListItem text="Provide post-incident recommendations to reduce future exposure" />
                </div>
            </div>
        </div>
        <div className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexFlow: 'column',
            margin: '0 auto',
            padding: '50px 5vw',
            gap: '30px',

            [theme.mediaQuery.xsmall]: {
                padding: '6rem',
                maxWidth: '750px',
                flexFlow: 'row',
                gap: '80px',
                height: '500px',


            }
        })}>
            <div style={{ flex: 1.3 }}>

                <img src="/assets/images/prevention_bear.svg" className={css({
                    height: 'auto',
                    width: '200px',
                    maxHeight: '100%',
                    [theme.mediaQuery.xsmall]: {
                        width: '100%'
                    }
                })} />
            </div>
            <div style={{
                flex: 2,

            }}>
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '20px', marginBottom: '20px' })}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, .1)', padding: '15px 17px', width: 'fit-content', borderRadius: 10 }}><img src="/assets/images/prevention_icon.svg" style={{ width: 20, height: 20 }} /></div>
                    <StyledParagraphText weight={700} size="20px">Prevention</StyledParagraphText>
                </div>
                <StyledParagraphText size="13.5px" weight={400} style={{ marginBottom: '20px' }}>
                    PhishingBear support organisations with a layered response to prevention.
                </StyledParagraphText>
                <div>
                    <ListItem text="Next Generation Email and Web Filtering Tools" />
                    <ListItem text="Regular phishing simulations" />
                    <ListItem text="Continuous learning" />
                </div>
            </div>
        </div>
    </div>
}