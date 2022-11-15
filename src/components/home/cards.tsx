import { StyledDarkParagraphText, addSpace } from '@components'
import React from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'
import Card from './card'

type Props = {}

const Cards = (props: Props) => {
    const [css, theme] = useCustomStyletron()

    return (
        <div className={css({
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
        })}>
            <Card logo="/assets/images/monthly_plan.svg" cta="Try it for free" btnStyle={{
                background: theme.colors.primary,
                color: theme.colors.dark,

            }}>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(20, 600)
                }}>
                    Monthly Plan
                </StyledDarkParagraphText>
                {addSpace("vert", '20px')}

                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0

                }}>
                    Unlimited freedom
                </StyledDarkParagraphText>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0
                }}>
                    Cancel anytime
                </StyledDarkParagraphText>
                {addSpace("vert", '40px')}
                <div className={css({
                    background: theme.colors.bg,
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',

                })}>
                    <StyledDarkParagraphText weight={700}>
                        US$ 29.00 USD
                    </StyledDarkParagraphText>
                    <StyledDarkParagraphText size={'14px'} weight={500}>
                        Monthly billing
                    </StyledDarkParagraphText>
                </div>
            </Card>
            <Card logo="/assets/images/annual_plan.svg" cta="Get this plan" btnStyle={{
                background: theme.colors.secondary,
                color: '#fff',

            }}>
                <div style={{ position: 'relative' }}>
                    <span
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translate(-50%, calc(-100% - 10px))',
                            background: theme.colors.primary,
                            borderRadius: 10,
                            padding: '3px 7px',
                            fontSize: 10
                        }}>Popular</span>
                    <StyledDarkParagraphText overrides={{
                        ...theme.typography.font(20, 600)
                    }}>
                        Annual Plan
                    </StyledDarkParagraphText>
                </div>
                {addSpace("vert", '20px')}

                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0

                }}>
                    1 month for FREE!
                </StyledDarkParagraphText>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0
                }}>
                    Cancel anytime during trial
                </StyledDarkParagraphText>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0
                }}>
                    12 months subscription

                </StyledDarkParagraphText>
                {addSpace("vert", '40px')}
                <div className={css({
                    background: theme.colors.bg,
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',



                })}>
                    <StyledDarkParagraphText weight={700}>
                        US$ 29.00 USD
                    </StyledDarkParagraphText>
                    <StyledDarkParagraphText size={'14px'} weight={500}>
                        Monthly billing
                    </StyledDarkParagraphText>
                </div>
            </Card>
            <Card logo="/assets/images/enterprise_plan.svg" cta="Contact us" btnStyle={{
                background: theme.colors.dark,
                color: '#fff'

            }}>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(20, 600)
                }}>
                    Monthly Plan
                </StyledDarkParagraphText>
                {addSpace("vert", '20px')}

                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(14, 500),
                    margin: 0,
                    textAlign: 'center'

                }}>
                    If you are really serious about protecting your organization or your team.
                </StyledDarkParagraphText>
                {addSpace("vert", '40px')}
                <div className={css({
                    background: theme.colors.bg,
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',

                })}>
                    <StyledDarkParagraphText weight={700}>
                        US$ 29.00 USD
                    </StyledDarkParagraphText>
                    <StyledDarkParagraphText size={'14px'} weight={500}>
                        Monthly billing
                    </StyledDarkParagraphText>
                </div>
            </Card>
        </div>
    )
}

export default Cards