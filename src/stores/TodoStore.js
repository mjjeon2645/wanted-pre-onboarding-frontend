/* eslint-disable class-methods-use-this */
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
        this.clearState();
      }
    } catch (error) {
    //
    }
  }

  setNewTodo(newTodo) {
    this.newTodo = newTodo;
  }

  async changeIsCompleted(todo) {
    try {
      const status = await apiService.changeIsCompleted(todo);

      if (status === 200) {
        this.fetchTodos();
      }
    } catch (error) {
      //
    }
  }

  async deleteTodo(id) {
    try {
      const status = await apiService.deleteTodo(id);

      if (status === 204) {
        this.fetchTodos();
      }
    } catch (error) {
      //
    }
  }

  async modifyTodo(todo, text) {
    try {
      const status = await apiService.modifyTodo(todo, text);

      if (status === 200) {
        this.fetchTodos();
      }
    } catch (error) {
      //
    }
  }

  clearState() {
    this.newTodo = '';
  }
}

export const todoStore = new TodoStore();
