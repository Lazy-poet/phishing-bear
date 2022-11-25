import React from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'
import { SidebarWrapper } from './sidebar.style'
import { NavItem } from '../header/header.style'
import { StyledButton } from '@components'
import LocaleSelector from '../header/localeSelector'
type Props = {
    show: boolean,
    toggle: () => void
}
const links = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Enterprise solutions', href: '/enterprise' },
    { label: 'Private solutions', href: 'private' },
]
const Sidebar = ({ toggle, show }: Props) => {
    const [css, theme] = useCustomStyletron()
    return (
        <SidebarWrapper show={show}>
            <div className={css({
                display: 'flex',
                width: '100%',
                height: 'fit-content',
                padding: '15px 20px',
                borderBottom: ".7px solid #E3F5EB",
                alignItems: 'center',
                justifyContent: 'space-between'
            })}>
                <img src="/assets/images/white_logo.svg" alt="Logo" className={css({
                    width: '150px',
                    cursor: 'pointer',
                    ':hover': {
                        transform: 'scale(1.01)'
                    }
                })} />


                <img src="/assets/images/close.svg" alt="Close" className={css({
                    width: '28px',
                    cursor: 'pointer',
                    ':hover': {
                        opacity: .8
                    }
                })}
                    onClick={toggle}
                />
            </div>
            <div className={css({
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                padding: '20px 0'
            })}>
                {
                   links.map(({ href, label }) => (<NavItem href={href} label={label} style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '15px 20px',
                        ':hover': { background: '#34AE69' },
                        ...theme.typography.font(18, 400),
                        justifyContent: 'start',
                        borderRadius: '30px',
                        margin: '10px 0'
                    }} />))
                }


            </div>
            <StyledButton overrides={{
                background: theme.colors.primary,
                height: '54px',
                borderRadius: '50px',
                margin: '0 20px',
                width: 'calc(100% - 40px)',
                position: 'relative',
                ...theme.typography.font(18, 500),
                ':hover': {
                    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-1px)'
                }
            }}>
                Try it for free
            </StyledButton>

            <div className={css({
                    ...theme.typography.font(16),
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '40px',
                    margin: '30px 20px',
                    width: 'fit-content'
                })}>
                <div className={css({
                    ...theme.typography.font(16),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    cursor: 'pointer',
                    transition: 'all .2s ease',
                    width: 'fit-content',
                    ...theme.typography.font(18, 400),
                    ':hover': {
                        background: theme.colors.bgHover
                    },
                })}>
                    <img src={'/assets/images/eng.svg'} alt={'eng'} className={css({ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '50%', border: `1px solid ${theme.colors.dark}` })} />
                    <span>{'en'}</span>
                </div>
                <div className={css({
                    ...theme.typography.font(16),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    cursor: 'pointer',
                    transition: 'all .2s ease',
                    width: 'fit-content',
                    ...theme.typography.font(18, 400),
                    ':hover': {
                        background: theme.colors.bgHover
                    },
                })}>
                    <img src={'/assets/images/swe.svg'} alt={'swe'} className={css({ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '50%', border: `1px solid ${theme.colors.dark}` })} />
                    <span>{'swe'}</span>
                </div>

            </div>
            <div className={css({
                position: 'absolute',
                bottom: 0,
                left: 0, width: '100%',
                borderTop: ".7px solid #E3F5EB",
                height: 'fit-content',
                padding: '15px 20px',


            })}>
                <StyledButton overrides={{
                    background: '#34AE69',
                    height: '54px',
                    borderRadius: '50px',
                    border: '1px solid #028B3D',
                    position: 'relative',
                    ...theme.typography.font(18, 500),
                    ':hover': {
                        border: '1px solid white'
                    }
                }}>
                    <img src="/assets/images/login.svg" className={css({
                        position: 'absolute',
                        left: '20px',
                        top: '12px',
                        height: '30px',
                        alignSelf: 'center',
                    })} />
                    Log in
                </StyledButton>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar