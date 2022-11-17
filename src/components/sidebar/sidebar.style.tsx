import { useCustomStyletron, customStyled } from '../../styles/custom-styles'

export const SidebarWrapper = customStyled<'div', { show: boolean }>('div', ({ $theme, show }) => ({
    position: 'fixed',
    top: 0,
    left: show ? 0 : '100%',
    width: '100vw',
    height: '100vh',
    background: $theme.colors.secondary,
    color: '#fff',
    transition: 'all .3s ease-out',
    zIndex: 1000,
}))