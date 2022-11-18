import React from 'react'
import { StyleObject } from 'styletron-react'
import { useCustomStyletron } from '../../styles/custom-styles'
import { StyledButton } from '../index'

type Props = {
    children: React.ReactNode,
    cta: string,
    btnStyle: StyleObject,
    logo: string

}

const Card = ({ children, cta, btnStyle, logo }: Props) => {
    const [css, theme] = useCustomStyletron()
    return (
        <div className={css({
            height: '400px',
            width: '100%',
            maxWidth: '350px',
            [theme.mediaQuery.small]: {
                maxWidth: '280px'
            },
            [theme.mediaQuery.large]: {
                maxWidth: '300px'
            },
            background: '#fff',
            position: 'relative',
            borderRadius: '20px',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '20px'

        })}>
            <img src={logo} className={css({
                height: 'auto',
                maxHeight: '200px',
                margin: '0 auto',
                marginTop: '-50%',
                marginBottom: '50px',
                // transform: 'translateY(-50%)',
                objectFit: 'cover'
            })} />
            {children}
            <StyledButton overrides={{
                position: 'absolute',
                bottom: 0,
                right: '50%',
                transform: 'translate(50%, 50%)',
                width: 'max-content',
                height: 'fit-content',
                padding: '10px 20px',
                borderRadius: '20px',
                border: `2px solid ${theme.colors.dark}`,
                boxShadow: `0 -8px 5px rgba(0, 0, 0, .2) inset`,
                ':hover': {
                    boxShadow: `0 8px 5px rgba(0, 0, 0, .2)`,
                    transform: `translate(50%, calc(50% - 2px))`
                },
                ...theme.typography.font(16, 600),
                ...btnStyle,
            }}>
                {cta}
            </StyledButton>
        </div>
    )
}

export default Card