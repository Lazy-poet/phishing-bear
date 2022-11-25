import { generateQueryParams } from '../src/utils/services';
import CommonService from './common.service';

class UserServices extends CommonService {
  async getUsers(params: any) {
    return await this.get(params.filters.first_name === '' ? `users?${new URLSearchParams(params)}` : `users?${generateQueryParams({ filter: params.filters })}`)
  }
  async getUserDetail(UserId: any) {
    return await this.get(`users/${UserId}`)
  }
  async updateUserProfile(params: any) {
    return await this.put('users/update-profile', params)
  }
  async sendFriendRequest(friend_id: string) {
    return await this.post('friends', { friend_id })
  }
  async getFriends(params: any) {
    return await this.get(`friends/?${new URLSearchParams(params)}`)
  }
  async updateFriends(params: { [key: string]: string }) {
    return await this.put(params?.id ? `friends/${params.id}` : `friends/${params}`, { status: params?.status ? params?.status : 'active' })
  }
}

export const userServices = new UserServices();