import { StyledDarkParagraphText } from "@components"
import { useCustomStyletron } from "../../styles/custom-styles"

export const Guage: React.FC<{ value: number }> = ({ value = 100 }) => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        width: '100%',

        height: 'fit-content',
        padding: '0 25px 50px',
        [theme.mediaQuery.small]: {
            padding: '0 50px 100px',

        },
        background: '#F8F8F8',
        borderRadius: '30px',

    })}>
        <div
            style={{
                position: "relative",
                // margin: "200px auto",
                height: "fit-content",
                width: "fit-content",
                margin: '0 auto'


            }}
        >
            <div
                style={{
                    height: 200,
                    overflow: "hidden"
                }}
            >
                <div
                    className="arc"
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        border: "1px solid black",
                        margin: "0 auto",
                        transform: "translateY(50%)",
                        position: 'relative',
                    }}
                >
                    <div
                        className="semi"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: "calc(50% + 3px)",
                            height: "calc(100% + 6px)",
                            background: "none",
                            borderColor: '#FFAE00',
                            borderStyle: 'solid',
                            borderWidth: "4px 1px 4px 4px",
                            borderTopLeftRadius: "103px",
                            borderBottomLeftRadius: "103px",
                            transform: `translate(-3px, -3px) rotate(${(value / 100) * 180 - 90}deg)`,
                            transformOrigin: "100% calc(50% - 0px)"
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0, width: 8, height: 8, borderRadius: '50%',
                            background: '#FFAE00',
                            transform: 'translate(50%, calc(-100% + 2px))'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0,
                            transform: 'translate(50%, calc(-100% - 10px))',
                            width: '30px',
                            fontSize: '14px',
                            textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff'
                        }}>{value}</div>

                    </div>
                </div>
            </div>
            <div
                className="dot"
                style={{
                    width: 15,
                    height: 15,
                    background: theme.colors.dark,
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    borderRadius: "50%",
                    transform: "translate(-50%, 50%)"
                }}
            />
            <div style={{ width: 260, height: 4, background: theme.colors.secondary, margin: '0 auto' }} />
            <div className={css({ width: '100%', padding: '5px 10px', ...theme.typography.font(15, 400), display: 'flex', position: "absolute", justifyContent: 'space-between', alignItems: 'center' })}>
                <div style={{ width: '40px', textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff' }}>0</div>
                <div style={{ width: '40px', textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff' }}>100</div>
            </div>
        </div>
    </div>

}

export const Guages = () => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        background: "#fff"

    })}>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={50} />
            <StyledDarkParagraphText align="center" weight={500}>Emails Opened</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={50} />
            <StyledDarkParagraphText align="center" weight={500}>Emails Opened</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={50} />
            <StyledDarkParagraphText align="center" weight={500}>Emails Opened</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={50} />
            <StyledDarkParagraphText align="center" weight={500}>Emails Opened</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={50} />
            <StyledDarkParagraphText align="center" weight={500}>Emails Opened</StyledDarkParagraphText>
        </div>
    </div>
}