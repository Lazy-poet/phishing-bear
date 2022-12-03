import { StyledHeaderText } from "@components";
import { useCustomStyletron, customStyled } from "../../styles/custom-styles";

export const FaqWrapper = customStyled('div', ({ $theme }) => ({
    padding: '20px',
    gap: '20px',
    [$theme.mediaQuery.xsmall]: {
        padding: '20px 100px',
        gap: '30px',
    },
    [$theme.mediaQuery.medium]: {
        padding: '50px 200px',
        gap: '30px',
    },
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    scrollSnapAlign: "start",
}))

export const FaqHero = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        background: 'linear-gradient(95.16deg, #43D582 3.8%, #FFAE00 102.9%)',
        width: '100%',
        borderRadius: '30px',
        position: 'relative',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '350px',
        margin: '50px 0',

        [theme.mediaQuery.small]: {
            textAlign: 'left',
            flexFlow: 'row',
            height: '250px',
            margin: '100px 0',
        },

    })}>
        <div className={css({
            width: '100%',
            height: '100%',
            flex: 2,
            position: 'relative',
            display: 'block',
            [theme.mediaQuery.small]: {
                flex: 1
            }
        })}>
            <img src='/assets/images/tip-banner.svg' className={css({
                width: 'auto',
                maxWidth: '80%',
                height: '120%',
                left: '50%',
                transform: 'translate(-50%, -20%)',
                position: 'absolute',
                [theme.mediaQuery.small]: {
                    height: '130%',
                    top: '50%',
                    right: '0',
                    transform: 'translate(-20%, -50%)',
                },

            })} />
        </div>
        <StyledHeaderText size={'64px'} weight={600} style={{
            flex: '1',
            letterSpacing: '.5px'
        }}> FAQs</StyledHeaderText>
    </div >
}