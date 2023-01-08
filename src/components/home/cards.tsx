import { StyledDarkParagraphText, addSpace } from '@components'
import React, { useState, useEffect } from 'react'
import { useCustomStyletron } from '../../styles/custom-styles'
import PricingCard from './card'
import useSWR from 'swr';
import { subscriptionServices } from '../../../services/subscription.service'
import { useSelector } from 'react-redux';


type Props = {}

const Cards = (props: Props) => {
    const [css, theme] = useCustomStyletron();
    const [currentPlanId, setCurrentPlanId] = useState('');
    const [plans, setPlans] = useState({} as Record<string, any>);
    const { isLoggedIn } = useSelector((state: any) => state.auth);

    const { data: currentPlanData, } = useSWR(isLoggedIn ? subscriptionServices.getCurrentPlanRoute : null, subscriptionServices.getCurrentPlan);
    const { data: allPlans, isLoading } = useSWR(isLoggedIn ? subscriptionServices.getPlansRoute : null, subscriptionServices.getPlans);
    useEffect(() => {
        if (currentPlanData && currentPlanData.data) {
            const price_id = currentPlanData.data.price_id;
            setCurrentPlanId(price_id);
        }
    }, [currentPlanData])
    useEffect(() => {
        if (allPlans && allPlans.data) {
            setPlans(allPlans.data);
        }
    }, [allPlans])

    return (
        <div className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
            gap: '200px',
            [theme.mediaQuery.small]: {
                flexFlow: 'row',
                gap: '20px'
            }
        })}>
            <PricingCard currentPlanId={currentPlanId} price_id={plans?.month?.price_id} bg="rgba(255, 245, 211, 1)" logo="/assets/images/monthly_plan.svg" cta="Get this plan" btnStyle={{
                background: theme.colors.primary,
                color: theme.colors.dark,

            }}>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(20, 600)
                }}>
                    Monthly Plan
                </StyledDarkParagraphText>
                {addSpace("vert", '20px')}
                <div className={css({
                    background: 'rgba(249, 235, 192, 1)',
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    height: '60px',
                    display: 'grid',
                    placeItems: 'center'

                })}>
                    <StyledDarkParagraphText weight={700}>
                        $39.00/month
                    </StyledDarkParagraphText>
                </div>
                {addSpace("vert", '20px')}

            </PricingCard>
            <PricingCard currentPlanId={currentPlanId} price_id={plans?.year?.price_id} bg="rgba(214, 255, 231, 1)" logo="/assets/images/annual_plan.svg" cta="Get this plan" btnStyle={{
                background: theme.colors.secondary,
                color: '#fff',

            }}>
                <div style={{ position: 'relative' }}>
                    <StyledDarkParagraphText overrides={{
                        ...theme.typography.font(20, 600)
                    }}>
                        Annual Plan
                    </StyledDarkParagraphText>
                </div>
                {addSpace("vert", '20px')}
                <div className={css({
                    background: 'rgba(181, 245, 208, 1)',
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    height: '60px',
                    display: 'grid',
                    placeItems: 'center'



                })}>
                    <StyledDarkParagraphText weight={700}>
                        $19.00/month
                    </StyledDarkParagraphText>
                </div>
                {addSpace("vert", '20px')}

            </PricingCard>
            <PricingCard currentPlanId={currentPlanId} bg="rgba(242, 235, 255, 1)" logo="/assets/images/enterprise_plan.svg" cta="Contact us" btnStyle={{
                background: theme.colors.dark,
                color: '#fff'

            }}>
                <StyledDarkParagraphText overrides={{
                    ...theme.typography.font(20, 600)
                }}>
                    Enterprise
                </StyledDarkParagraphText>
                {addSpace("vert", '20px')}
                <div className={css({
                    background: 'rgba(232, 221, 249, 1)',
                    borderRadius: '15px',
                    width: 'calc(100% - 40px)',
                    padding: '7px 10px',
                    textAlign: 'center',
                    height: '60px',
                    display: 'grid',
                    placeItems: 'center'

                })}>
                    <StyledDarkParagraphText overrides={{
                        ...theme.typography.font(12, 500),
                        margin: 0,
                        textAlign: 'center'

                    }}>
                        Contact us and we'll find a perfect solution for you.
                    </StyledDarkParagraphText>
                </div>
                {addSpace("vert", '20px')}


            </PricingCard>
        </div>
    )
}

export default Cards