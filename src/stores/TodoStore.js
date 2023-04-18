import { apiService } from '../ApiService';

import Store from './Store';

export default class TodoStore extends Store {
  constructor() {
    super();

    this.todos = [];
    this.todo = '';
  }

  async fetchTodos() {
    try {
      const todos = await apiService.fetchTodos();
      this.todos = todos;
      this.publish();
    } catch (error) {
      //
    }
  }
}

export const todoStore = new TodoStore();
