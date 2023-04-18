import { useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoLists from '../components/TodoLists';
import useTodoStore from '../hooks/useTodoStore';

export default function TodoPage() {
  const todoStore = useTodoStore();

  const { todos } = todoStore;

  const fetchTodos = async () => {
    const data = await todoStore.fetchTodos();
    return data;
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoInput />
      <TodoLists todos={todos} />
    </>
  );
}
