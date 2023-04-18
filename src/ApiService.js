/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from './config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.access_token = '';
  }

  setAccessToken(access_token) {
    this.access_token = access_token;
  }

  async requestSignup(email, password) {
    const url = `${baseUrl}/auth/signup`;
    const { status } = await axios.post(url, { email, password });

    return status;
  }

  async requestSignin(email, password) {
    const url = `${baseUrl}/auth/signin`;
    const { data } = await axios.post(url, { email, password });

    return data.access_token;
  }

  async fetchTodos() {
    const url = `${baseUrl}/todos`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });

    return response;
  }
}

export const apiService = new ApiService();
