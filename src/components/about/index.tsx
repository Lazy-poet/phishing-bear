import { StyledParagraphText } from '@components';
import React from 'react'
import { StyleObject } from 'styletron-react';
import { customStyled, useCustomStyletron } from '../../styles/custom-styles';

type Props = {
    children: React.ReactNode,
    overrides?: StyleObject,
}

const SectionWrapper = ({ children, overrides }: Props) => {
    const [css, theme] = useCustomStyletron();
    return (
        <section className={css({
            scrollSnapAlign: "start",
            padding: '100px 20px',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: '30px',
            position: 'relative',
            [theme.mediaQuery.xsmall]: {
                padding: '100px 50px',
                flexDirection: "row",
            },
            [theme.mediaQuery.small]: {
                padding: '100px'
            },
            [theme.mediaQuery.medium]: {
                padding: '100px 250px',
                gap: '100px',

            },
            [theme.mediaQuery.large]: {
                padding: '80px 300px'
            },
            ...overrides
        })}>
            {children}

        </section>
    )
}

export const SectionText = ({ heading, body }: { heading: string, body: string }) => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({ flex: 1 })}>
        <StyledParagraphText color="inherit" overrides={{
            ...theme.typography.font(22, 600),
            maxWidth: '1000px',
            marginBottom: '20px',
            textAlign: 'center',
            [theme.mediaQuery.xsmall]: {
                textAlign: 'left',

            },
            [theme.mediaQuery.medium]: {
                ...theme.typography.font(26, 600),
            },
        }}>{heading}</StyledParagraphText>
        <StyledParagraphText color="inherit" overrides={{
            ...theme.typography.font(14, 400),
            [theme.mediaQuery.medium]: {
                ...theme.typography.font(16, 400),
            },
            maxWidth: '1000px',
            marginBottom: '20px',
            textAlign: 'left',
        }}>{body}</StyledParagraphText>
    </div>
}

export const ImageWrapper = customStyled('div', ({ $theme }) => ({
    flex: 1,
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    opacity: .3,
    zIndex: 0,
    [$theme.mediaQuery.xsmall]: {
        position: 'initial',
        opacity: 1,
        transform: 'translate(0px, 0px)',
        zIndex: 1,
    }
}))
export default SectionWrapper