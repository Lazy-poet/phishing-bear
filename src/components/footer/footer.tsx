import { StyledParagraphText } from '@components'
import React from 'react'
import css from 'styled-jsx/css'
import { useCustomStyletron } from '../../styles/custom-styles'
import { theme } from '../../theme'
import { FooterWrapper, FooterColumn } from './footer.style'
type Props = {}

const Footer = (props: Props) => {
    const [css] = useCustomStyletron()
    return (
        <FooterWrapper>
            <FooterColumn>
                <img src="/assets/images/footer-logo.svg" style={{ width: '180px', height: 'auto' }} />
                <StyledParagraphText weight={500}>
                    Protect every employee in your organization.
                </StyledParagraphText>
                <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                    A platform that turns everyone into an interview professional with the help of streamlined, inclusive and candidate friendly job interviews.
                </StyledParagraphText>
            </FooterColumn>
            <div className={css({
                flex: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '20px',
                ['@media screen and (min-width: 400px)']: {
                    flexDirection: 'row',
                },
            })}>
                <FooterColumn>
                    <StyledParagraphText weight={700}>Sitemap</StyledParagraphText>

                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        Home
                    </StyledParagraphText>
                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        About us
                    </StyledParagraphText>
                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        Pricing
                    </StyledParagraphText>
                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        Enterprise solutions
                    </StyledParagraphText>
                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        Private solutions
                    </StyledParagraphText>
                    <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>
                        Cookie policy
                    </StyledParagraphText>


                </FooterColumn>
                <FooterColumn>
                    <StyledParagraphText weight={700}>Contact</StyledParagraphText>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 10 }}>
                        <img src="/assets/images/mail.svg" style={{ maxHeight: 25 }} />
                        <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>info@mail.com</StyledParagraphText>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 10 }}>
                        <img src="/assets/images/location.svg" style={{ maxHeight: 25 }} />

                        <StyledParagraphText weight={300} size='14px' overrides={{ opacity: .75 }}>Regeringsgatan 25,
                            111 53, Stockholm
                        </StyledParagraphText>
                    </div>
                    <img src="/assets/images/socials.svg" style={{ width: 100 }} />

                </FooterColumn>
            </div>
        </FooterWrapper>
    )
}

export default Footer