import { generateQueryParams } from '../src/utils/services';
import CommonService from './common.service';

class UserServices extends CommonService {
  async getUsers(params: any) {
    return await this.get(params.filters.first_name === '' ? `users?${new URLSearchParams(params)}` : `users?${generateQueryParams({ filter: params.filters })}`)
  }
  async getUserDetail(UserId: any) {
    return await this.get(`users/${UserId}`)
  }

  async sendFriendRequest(friend_id: string) {
    return await this.post('users/friends/add', { friend_id })
  }
  async getFriends() {
    return await this.get(`users/friends`)
  }
  async updateFriends(params: { [key: string]: string }) {
    return await this.put(params?.id ? `friends/${params.id}` : `friends/${params}`, { status: params?.status ? params?.status : 'active' })
  }

  async getEmailData() {
    return await this.get(`clicked`)
  }
}

export const userServices = new UserServices();