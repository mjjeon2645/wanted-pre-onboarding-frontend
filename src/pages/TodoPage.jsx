import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import TodoInput from '../components/TodoInput';
import TodoLists from '../components/TodoLists';

import useTodoStore from '../hooks/useTodoStore';

export default function TodoPage() {
  const navigate = useNavigate();
  const todoStore = useTodoStore();

  const fetchTodos = async () => {
    const data = await todoStore.fetchTodos();
    return data;
  };

  const { todos } = todoStore;

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/signin');
      return;
    }

    fetchTodos();
  }, []);

  const handleChangeTodoInput = (event) => {
    const { value } = event.target;
    todoStore.setNewTodo(value);
  };

  const handleClickAddTodo = async () => {
    await todoStore.addTodo();
  };

  const handleChangeIsCompleted = async (todo) => {
    await todoStore.changeIsCompleted(todo);
  };

  const handleClickDelete = async (id) => {
    await todoStore.deleteTodo(id);
  };

  const handleClickSubmit = async (todo, text) => {
    await todoStore.modifyTodo(todo, text);
  };

  return (
    <>
      <TodoInput
        handleChangeTodoInput={handleChangeTodoInput}
        handleClickAddTodo={handleClickAddTodo}
      />
      <TodoLists
        todos={todos}
        handleChangeIsCompleted={handleChangeIsCompleted}
        handleClickDelete={handleClickDelete}
        handleClickSubmit={handleClickSubmit}
      />
    </>
  );
}
