
import { styled, useStyletron } from 'baseui';
import { useCustomStyletron, customStyled } from '../../styles/custom-styles'
import { CustomTheme } from '../../theme'
import Link from 'next/link'
import { StyleObject } from 'styletron-react';


export const DesktopHeaderWrapper = customStyled('div', ({ $theme }) => ({
    display: 'none',
    [$theme.mediaQuery.medium]: {
        display: 'flex',
    },
    background: $theme.colors.bg,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 50px',
}))

export const MobileHeaderWrapper = customStyled('div', ({ $theme }) => ({
    display: 'flex',
    [$theme.mediaQuery.medium]: {
        display: 'none',
    },
    background: $theme.colors.bg,
    height: '45px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
}))

export const NavItem: React.FC<{ href: string, logo?: string, label: string, onClick?: () => void, style?: StyleObject }> = ({ href, logo, label, onClick, style }) => {
    const [css, theme] = useCustomStyletron()
    return <div onClick={onClick} className={css({
        height: '100%',
        width: 'fit-content',
        padding: '10px',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        display: 'grid',
        placeContent: 'center',
        ...theme.typography.font(12, 700),
        ":hover": {
            background: theme.colors.bgHover,
        },
        [theme.mediaQuery.medium]: {
            ...theme.typography.font(14, 700),
            padding: '15px',

        },
        [theme.mediaQuery.large]: {
            ...theme.typography.font(16, 700),
            padding: '15px',

        },
        ...style

    })}>

        <Link href={href}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                {logo && <img src={logo} alt="" className={css({ width: '20px', height: '20px' })} />}
                {label}
            </div>
        </Link>
    </div>

}