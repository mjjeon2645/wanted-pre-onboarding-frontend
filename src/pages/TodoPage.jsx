import { useEffect } from 'react';

import TodoInput from '../components/TodoInput';
import TodoLists from '../components/TodoLists';

import useTodoStore from '../hooks/useTodoStore';

export default function TodoPage() {
  const todoStore = useTodoStore();

  const fetchTodos = async () => {
    const data = await todoStore.fetchTodos();
    return data;
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const { todos } = todoStore;

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

  return (
    <>
      <TodoInput
        handleChangeTodoInput={handleChangeTodoInput}
        handleClickAddTodo={handleClickAddTodo}
      />
      <TodoLists
        todos={todos}
        handleChange={handleChangeIsCompleted}
      />
    </>
  );
}
