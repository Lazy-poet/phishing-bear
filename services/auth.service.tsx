// import { FormRegisterProps } from 'utils/types';
import CommonService from "./common.service";

class AuthServices extends CommonService {
  async login(params: { [key: string]: string }) {
    return await this.post("auth/login", params);
  }
  async register(params: any) {
    return await this.post("auth/register", params);
  }

  async resendVerification(params: any) {
    return await this.post("auth/resend-verification", params);
  }
  async accountVerify(token: string) {
    return await this.put("users/verify", { token });
  }
  async updatePassword(params: any) {
    return await this.post("auth/update-password", params);
  }
  async updateUserProfile(params: any) {
    return await this.put("auth/update-profile", params);
  }
  async forgotPassword(params: { [key: string]: string }) {
    return await this.post("auth/reset-password-email", params);
  }
  async updateUserProfilePassword(params: any) {
    return await this.put("auth/change-password", params);
  }
  async getMe() {
    return await this.get("auth/me");
  }
}

export const authServices = new AuthServices();
