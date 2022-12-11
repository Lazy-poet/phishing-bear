export * from './banners'
export * from './charts'
import { StyledButton, InputField, StyledInput } from '@components';
import { useState, MouseEvent } from 'react';
import { StyleObject } from 'styletron-react';
import { customStyled, useCustomStyletron } from "../../styles/custom-styles"

export const DashboardWrapper = ({ children }) => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        padding: '20px 20px 50px',
        gap: '20px',
        [theme.mediaQuery.medium]: {
            padding: '50px',
            gap: '30px',
        },
        [theme.mediaQuery.large]: {
            padding: '50px 100px',
            gap: '50px',

        },
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        scrollSnapAlign: "start",
        // background: '#fefeff'
    })}>
        {children}

    </div>
}

export const ChartsWrapper = ({ children }) => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        padding: '20px',
        gap: '20px',

        [theme.mediaQuery.medium]: {
            padding: '50px 100px',
            gap: '50px',

        },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        scrollSnapAlign: "start",
        background: '#FFF',
        overflow: 'hidden'
    })}>
        {children}

    </div>
}

export const OverviewButton = ({ active, onClick }) => {
    const [css, theme] = useCustomStyletron()
    return <StyledButton onClick={onClick} overrides={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '12px 20px',
        height: 'fit-content',
        width: 'fit-content',
        ...theme.typography.font(13, 400),
        color: active ? '#fff' : theme.colors.dark,
        background: active ? '#8AC651' : 'rgba(143, 204, 85, .11)',
        border: '1px solid #8AC651',
        borderRadius: '12px',
        flex: 1,
        [theme.mediaQuery.xsmall]: {
            padding: '12px 25px',
            flex: 'revert',
            ...theme.typography.font(16, 400),

        },
    }} >
        <div className={css({
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            ...(active ? {
                background: '#FFAE00'
            } : {
                border: '1px solid black'
            })
        })} />
        Overview</StyledButton>
}
export const TestResultButton = ({ active, onClick }) => {
    const [css, theme] = useCustomStyletron()
    return <StyledButton onClick={onClick} overrides={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '12px 20px',
        height: 'fit-content',
        width: 'fit-content',
        ...theme.typography.font(13, 400),
        color: active ? '#fff' : theme.colors.dark,
        background: active ? '#8AC651' : 'rgba(143, 204, 85, .11)',
        border: '1px solid #8AC651',
        borderRadius: '12px',
        flex: 1,
        [theme.mediaQuery.xsmall]: {
            padding: '12px 25px',
            flex: 'revert',
            ...theme.typography.font(16, 400),

        },
    }} >
        <div className={css({
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            ...(active ? {
                background: '#FFAE00'
            } : {
                border: '1px solid black'
            })
        })} />
        Test results</StyledButton>
}
export const RangeSelector = ({ overrides, onChange }: { overrides?: StyleObject, onChange: (val: string) => void }) => {
    const [css, theme] = useCustomStyletron();
    const options = [
        { name: 'today', label: 'Today' },
        { name: '7d', label: 'Last 7 days' },
        { name: '1m', label: 'Last 30 days' },
        { name: '3m', label: 'Last 90 days' },
        { name: '1y', label: 'Last 1 year' },
        { name: 'all', label: 'All time' }]
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(options[2])
    const handleSelect = (value: { label: string, name: string }) => {
        setCurrentValue(value);
        onChange(value.name)
        setOptionsOpen(false)
    }

    const toggleOptions = () => setOptionsOpen(!optionsOpen)
    const inputOverrides = {
        color: theme.colors.dark,
        background: 'transparent',
        margin: '0 !important',
        width: '180px',
        cursor: 'pointer',
        textAlign: 'center' as const,
        height: 'fit-content',
        padding: '7px 10px',
        [theme.mediaQuery.xsmall]: {
            padding: '10px 15px',
        },
        border: 'none',
        outline: 'none'
    }
    return <div className={css({
        background: 'rgba(138, 198, 81, .1)',
        height: 'fit-content',
        width: 'fit-content',
        '::before': {
            content: '',
            position: 'absolute',
            width: '100%',
            height: '100%'
        },
        ...(optionsOpen ? {
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            borderBottom: 'none',
        } : {
            borderRadius: '12px',
            overflow: 'hidden',
        }),
        position: 'relative',
        border: '1px solid #8AC651',
        padding: 0,
        marginLeft: 'auto',
        zIndex: 2,
        ...overrides
    })}>
        <div onClick={toggleOptions} style={{ cursor: 'pointer', width: 'fit-content', height: 'fit-content', margin: 0, padding: 0 }}>
            <StyledInput readOnly type="text" value={currentValue.label} overrides={{
                ...inputOverrides, height: 'fit-content',
                [theme.mediaQuery.xsmall]: {
                    ...theme.typography.font(18, 400),
                },
                ...theme.typography.font(16, 400),

            }} />
            <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "7%",
                    transform: "translateY(-50%)",
                }}
            >
                <path
                    d="M0.605575 0H8.39442C8.93326 0 9.20267 0.764898 8.82125 1.21316L4.92834 5.79188C4.69222 6.06937 4.30778 6.06937 4.07166 5.79188L0.178747 1.21316C-0.202673 0.764898 0.0667427 0 0.605575 0Z"
                    fill="#0E294B"
                />
            </svg>
        </div>
        <div className={css({
            position: 'absolute',
            padding: 0,
            top: '100%',
            left: '-1px',
            width: 'calc(100% + 2px)',
            height: 'fit-content',
            background: 'rgba(138, 198, 81, .1)',
            backdropFilter: 'blur(8px)',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            border: '1px solid #8AC651',
            borderTop: 'none',
            overflow: 'hidden',
            opacity: Number(optionsOpen)

        })}>{
                options.map(opt => (
                    <StyledInput onClick={() => handleSelect(opt)} readOnly type="text" value={opt.label} overrides={{
                        ...inputOverrides,
                        ...(currentValue.name === opt.name && {
                            background: '#FFAE00',
                            color: "#FFF"


                        }),
                        ':hover': {
                            background: '#FFAE00',
                            color: "#FFF"
                        }, ...theme.typography.font(15, 500)

                    }} />
                ))
            }
        </div>
    </div>
}

export const MobileLayout = customStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    gap: '25px',
    [$theme.mediaQuery.small]: {
        display: 'none'
    }
}))
export const DesktopLayout = customStyled('div', ({ $theme }) => ({
    display: 'none',
    [$theme.mediaQuery.small]: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        gap: '50px',
        width: '100%',
        height: '100%'
    }
}))