// import { FormRegisterProps } from 'utils/types';
import CommonService from './common.service';

class AuthServices extends CommonService {
  async login(params: { [key: string]: string }) {
    return await this.post('login', params)
  }

  async register(params: any) {
    return await this.post('register', params)
  }
  async accountVerify(params: any) {
    return await this.put('account-verification', { token: params })
  }
  async updatePassword(params: any) {
    return await this.post('update-password', params)
  }
  async forgotPassword(params: { [key: string]: string }) {
    return await this.post('reset-password-email', params)
  }
  async updateUserProfilePassword(params: any) {
    console.log('params', params);

    return await this.put('account/change-password', params)
  }
  async getMe() {
    return await this.get('me')
  }
}

export const authServices = new AuthServices();
