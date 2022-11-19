
import { styled, useStyletron } from 'baseui';
import { useCustomStyletron, customStyled } from '../../styles/custom-styles'
import { CustomTheme } from '../../theme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyleObject } from 'styletron-react';


export const DesktopHeaderWrapper = customStyled('div', ({ $theme }) => ({
    display: 'none',
    padding: '0 20px',
    [$theme.mediaQuery.small]: {
        display: 'flex',
    },
    [$theme.mediaQuery.medium]: {
        padding: '0 50px',

    },
    background: $theme.colors.bg,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)'
}))

export const MobileHeaderWrapper = customStyled('div', ({ $theme }) => ({
    display: 'flex',
    [$theme.mediaQuery.small]: {
        display: 'none',
    },
    background: $theme.colors.bg,
    height: '45px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)'

}))

export const NavItem: React.FC<{ href: string, logo?: string, label: string, onClick?: () => void, style?: StyleObject }> = ({ href, logo, label, onClick, style }) => {
    const [css, theme] = useCustomStyletron();
    const router = useRouter();
    const isActive = router.pathname === href;
    return <div onClick={onClick} className={css({
        height: '100%',
        width: 'fit-content',
        padding: '10px',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        display: 'grid',
        placeContent: 'center',
        background: isActive ? theme.colors.bgHover : 'none',
        ...theme.typography.font(12, 700),
        ":hover": {
            background: 'rgba(168, 225, 190,.5)',
        },
        [theme.mediaQuery.small]: {
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 5, }}>
                {logo && <img src={logo} alt="" className={css({ width: '20px', height: '20px' })} />}
                {label}
            </div>
        </Link>
    </div>

}