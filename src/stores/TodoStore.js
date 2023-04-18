import { apiService } from '../ApiService';

import Store from './Store';

export default class TodoStore extends Store {
  constructor() {
    super();

    this.todos = [];
    this.newTodo = '';
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

  async addTodo() {
    try {
      const status = await apiService.addTodo(this.newTodo);

      if (status === 201) {
        this.fetchTodos();
      }
    } catch (error) {
    //
    }
  }

  setNewTodo(newTodo) {
    this.newTodo = newTodo;
  }
}

export const todoStore = new TodoStore();
