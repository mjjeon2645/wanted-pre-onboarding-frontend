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
      return status;
    } catch (error) {
      console.log(error, 'store signup 에러');
      return '';
    }
  }
}

export const userStore = new UserStore();
