import Store from './Store';

export default class SigninStore extends Store {
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
}

export const signinStore = new SigninStore();
