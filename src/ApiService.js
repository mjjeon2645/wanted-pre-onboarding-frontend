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
    const { access_token } = data;
    this.setAccessToken(access_token);

    return access_token;
  }

  async fetchTodos() {
    const url = `${baseUrl}/todos`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });

    return data;
  }

  async addTodo(newTodo) {
    const url = `${baseUrl}/todos`;
    const { status } = await axios.post(url, { todo: newTodo }, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });
    return status;
  }

  async changeIsCompleted(todo) {
    const url = `${baseUrl}/todos/${todo.id}`;
    const { status } = await axios.put(url, {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    }, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });

    return status;
  }

  async deleteTodo(id) {
    const url = `${baseUrl}/todos/${id}`;
    const { status } = await axios.delete(url, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });

    return status;
  }

  async modifyTodo(todo, text) {
    const url = `${baseUrl}/todos/${todo.id}`;
    const { status } = await axios.put(url, {
      todo: text,
      isCompleted: todo.isCompleted,
    }, {
      headers: { Authorization: `Bearer ${this.access_token}` },
    });

    return status;
  }
}

export const apiService = new ApiService();
