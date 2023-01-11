
import { StyledButton, StyledDarkParagraphText, StyledHeaderText, StyledParagraphText } from "@components";
import Link from "next/link";
import { customStyled, useCustomStyletron } from "../../styles/custom-styles"

export const PlatformWrapper = customStyled('div', ({ $theme }) => ({


    width: '100vw',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    scrollSnapAlign: "start",
}))

export const PlatformHero = () => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        width: '100%',
        height: 'fit-content',
        padding: '120px 20px',
        background: 'url(/assets/images/about-hero.svg) no-repeat 100% 100%/cover',
    })}>
        <div className={css({
            width: '100%',
            maxWidth: '650px',
            margin: '0 auto',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            textAlign: 'center',
        })}>
            <StyledHeaderText overrides={{
                ...theme.typography.font(22, 600),
                [theme.mediaQuery.small]: {
                    ...theme.typography.font(30, 700),

                },
                textTransform: 'revert'

            }}>
                Phishing protection can be hard, but it doesn't have to be.
            </StyledHeaderText>
            <StyledParagraphText overrides={{
                ...theme.typography.font(13, 400),
                opacity: .8,
                maxWidth: '550px'
            }}>
                We use state-of-the-art research and cyber security best practices to drastically increase your security, while having minimal impact on your daily routines.
            </StyledParagraphText>
            <Link href="/dashboard">
                <StyledButton small overrides={{
                    backgroundColor: theme.colors.primary,
                    borderRadius: '25px',
                    height: 'fit-content',
                    padding: '10px 30px',
                    transition: 'all .3s ease',
                    color: theme.colors.dark,
                    border: `2px solid ${theme.colors.primary}`,
                    ...theme.typography.font(14, 600),
                    ':hover': {
                        backgroundColor: 'transparent',
                        color: "#fff",
                    }
                }}>
                    Enter Dashboard
                </StyledButton>
            </Link>
        </div>

    </div>
}


const bannerItems = [
    {
        title: 'We take on the role of attackers, to teach you how to defend yourself',
        body: 'We expose you to state-of-the-art phishing emails, customized fake domains, and other common cyberattacks, in order to teach you how to protect yourself, so that you are ready when the real attackers strike.',
        labelSvg: '/assets/images/vector_1.svg',
        image: '/assets/images/platform_logo_1.svg',
        alternate: false

    },
    {
        title: 'Interactive support panels adapted to your organization.',
        body: 'We let you follow the phishing awareness training step-by-step and if desired, tailor it to meet specific goals and needs.',
        labelSvg: '/assets/images/vector_2.svg',
        image: '/assets/images/platform_logo_2.png',
        alternate: true

    },
    {
        title: 'Phishing is more than just emails.',
        body: 'Fake domains are growing rapidly and can be hard to detect. We help you develop and maintain the necessary awareness to spot the difference.',
        labelSvg: '/assets/images/vector_3.svg',
        image: '/assets/images/platform_logo_3.png',
        alternate: false

    },
    {
        title: 'Nano-learning is the new learning.',
        body: 'We use nano-learning, short snippets of 1-3 minutes that repeatedly helps you remember and learn how to best protect yourself against phishing. Nano-learning has been proven to maximize the usefulness of learning while minimizing the effort required and time taken, perfect for protecting both your cyber security and your precious time.',
        labelSvg: '/assets/images/vector_4.svg',
        image: '/assets/images/platform_logo_4.svg',
        alternate: true

    },
]


export const PlatformBanners = () => {
    const [css, theme] = useCustomStyletron();
    return <div className={css({
        width: '100%',
        padding: '20px',
    })}>
        <img src="/assets/images/platform_icon.svg" style={{ display: 'block', margin: '10px auto' }} />
        <StyledDarkParagraphText overrides={{
            ...theme.typography.font(20, 600),
            textTransform: 'revert',
            textAlign: 'center',
            [theme.mediaQuery.small]: {
                ...theme.typography.font(24, 600),

            }
        }}> 4 steps on how Phishingbear works</StyledDarkParagraphText>
        <img src="/assets/images/arrow-circle-down.svg" alt="" style={{ width: 50, height: 50 }} />
        {bannerItems.map((item, index) => <Banner number={index + 1} {...item} />)}
    </div>
}

const Banner = ({ number, labelSvg, title, body, image, alternate = false }) => {

    const [css, theme] = useCustomStyletron();

    return (
        <div className={css({
            height: 'fit-content',
            padding: '40px',
            margin: '10px 0',
            background: !alternate ? theme.colors.bg : 'transparent',
            overflow: 'hidden',
            transform: `translateX(${alternate ? '3vw' : '-3vw'})`,
            transition: 'all 0.3s ease-in-out',
            [theme.mediaQuery.small]: {
                ...(alternate ? {
                    borderTopRightRadius: '200px',
                    borderBottomRightRadius: '200px',

                } : {
                    borderTopLeftRadius: '200px',
                    borderBottomLeftRadius: '200px',
                }),
                padding: '20px 100px',

                transform: `translateX(${!alternate ? 'calc(50vw - 500px)' : 'calc(500px - 50vw)'})`,

            }

        })}>
            <div className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'fit-content',
                maxWidth: '600px',
                gap: '20px',
                overflow: 'hidden',
                float: alternate ? 'right' : 'left',
                flexDirection: 'column',
                [theme.mediaQuery.small]: {
                    flexDirection: 'row',
                    height: '320px',
                    maxWidth: '900px',

                }

            })}>
                <div className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    [theme.mediaQuery.small]: {
                        flex: 2,
                        padding: '30px'
                    },
                    order: Number(alternate)

                })}>
                    <div className={css({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '20px',
                        justifyContent: 'start',
                        [theme.mediaQuery.xxsmall]: {
                            flexDirection: 'row',
                            alignItems: 'center',

                        }
                    })}>
                        <div className={css({
                            minWidth: '60px',
                            height: '60px',
                            background: `url(${labelSvg}) no-repeat 100% 100%/contain`,
                            display: 'grid',
                            placeContent: 'center',
                            ...theme.typography.font(18, 600),
                            color: '#fff'
                        })}>
                            {number}
                        </div>
                        <StyledHeaderText overrides={{
                            ...theme.typography.font(18, 600),
                            textTransform: 'none',
                            color: theme.colors.dark,
                            letterSpacing: '0.5px'
                        }}>
                            {title}
                        </StyledHeaderText>
                    </div>
                    <StyledParagraphText overrides={{
                        ...theme.typography.font(14, 400),
                        color: theme.colors.dark

                    }}>
                        {body}
                    </StyledParagraphText>
                </div>
                <div className={css({
                    display: 'none',
                    [theme.mediaQuery.xxsmall]: {
                        display: 'block'
                    },
                    [theme.mediaQuery.small]: {
                        flex: 1.7
                    },
                    height: 'max(280px, 100%)',

                })}>
                    <img src={image} alt="" className={css({
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '100%'

                    })} />
                </div>
            </div>
        </div>
    )
}