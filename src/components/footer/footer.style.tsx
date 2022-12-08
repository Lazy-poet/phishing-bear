import { StyledParagraphText } from "@components"
import { useCustomStyletron } from "../../styles/custom-styles"

export const FooterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [css, theme] = useCustomStyletron()
    return <footer className={css({
        width: '100vw',
        height: 'max-content',
        scrollSnapAlign: "start",
        scrollMargin: '100px',
        background: theme.colors.dark,
        color: "#fff",
        padding: '50px 20px 100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        [theme.mediaQuery.xsmall]: {
            flexDirection: 'row',
            padding: '50px 50px 100px',
            gap: '80px',

        },
        [theme.mediaQuery.medium]: {
            padding: '50px 200px 100px',
        },
        alignItems: "flex-start",
        justifyContent: "center",
        position: 'relative',
        margin: '0 !important'
    })} >
        {children}
        <div className={css({
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50px',
            padding: '0 20px',
            justifyContent: 'center',
            [theme.mediaQuery.xsmall]: {
                justifyContent: 'space-between',
            },
            [theme.mediaQuery.small]: {
                justifyContent: 'space-between',
                padding: '0 50px',
            },
            [theme.mediaQuery.medium]: {

                padding: '0 200px',
            },
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, .5)'
        })}>
            <StyledParagraphText size='16px' overrides={{
                ...theme.typography.font(12),
                textAlign: 'center',
                [theme.mediaQuery.xsmall]: {
                    ...theme.typography.font(14),

                },
                [theme.mediaQuery.small]: {
                    ...theme.typography.font(16),
                    textAlign: 'left',


                },
            }}>ⓒ 2022 Mail － Protect yourself from malicious cyber attacks</StyledParagraphText>
            <img src="/assets/images/footer-flags.svg" className={css({
                display: 'none',
                [theme.mediaQuery.xsmall]: {
                    display: 'block',
                }
            })} />
        </div>
    </footer>
}

export const FooterColumn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-start',
        flex: 1,
        gap: '12px',
        [theme.mediaQuery.xsmall]: {
            gap: '15px'
        },
        [theme.mediaQuery.xsmall]: {
            gap: '20px'
        }
    })}>
        {children}
    </div>
}