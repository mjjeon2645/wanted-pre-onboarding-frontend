/* eslint-disable camelcase */
import Store from './Store';

import { apiService } from '../ApiService';

export default class UserStore extends Store {
  constructor() {
    super();

    this.email = '';
    this.password = '';
  }

  setEmail(email) {
    this.email = email;
    this.publish();
  }

  setPassword(password) {
    this.password = password;
    this.publish();
  }

  async signup() {
    try {
      const status = await apiService.requestSignup(this.email, this.password);
      this.clearState();
      return status;
    } catch (error) {
      return '';
    }
  }

  async signin() {
    try {
      const access_token = await apiService.requestSignin(this.email, this.password);
      this.clearState();
      return access_token;
    } catch (error) {
      return '';
    }
  }

  clearState() {
    this.email = '';
    this.password = '';
  }
}

export const userStore = new UserStore();
