import { StyledParagraphText } from "@components"
import { useCustomStyletron } from "../../styles/custom-styles"

export const FooterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [css, theme] = useCustomStyletron()
    return <footer className={css({
        width: '100vw',
        height: 'fit-content',
        scrollSnapAlign: "start",
        background: theme.colors.dark,
        color: "#fff",
        padding: '50px 200px 100px',
        display: 'flex',
        alignItems: "flex-start",
        justifyContent: "center",
        gap: '80px',
        position: 'relative'
    })} >
        {children}
        <div className={css({
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50px',
            padding: '0 200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, .5)'
        })}>
            <StyledParagraphText size='16px'>ⓒ 2022 Mail － Protect yourself from malicious cyber attacks</StyledParagraphText>
            <img src="/assets/images/footer-flags.svg"  />
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
        gap: '20px'
    })}>
        {children}
    </div>
}