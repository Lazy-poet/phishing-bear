import { generateQueryParams } from '../src/utils/services';
import CommonService from './common.service';

class SubscriptionServices extends CommonService {
    createCheckoutRoute = 'subscription/'
    openPortalRoute = 'subscription/portal'
    getCurrentPlanRoute = 'subscription/active'
    validateSessionRoute = 'subscription/validate'
    verifySubscriptionRoute = 'subscription/status'
    getPlansRoute = 'subscription/plans'
    async createCheckout(price_id: string) {
        return await this.post(this.createCheckoutRoute, { price_id })
    }
    getCurrentPlan = async () => {
        return await this.get(this.getCurrentPlanRoute)
    }
    validateSession = async (session_id: string) => {
        return await this.post(this.validateSessionRoute, { session_id })
    }
    verifySubscription = async () => {
        return await this.get(this.verifySubscriptionRoute)
    }
    openPortal = async () => {
        return await this.get(this.openPortalRoute)
    }
    getPlans = async () => {
        return await this.get(this.getPlansRoute)
    }

}

export const subscriptionServices = new SubscriptionServices();