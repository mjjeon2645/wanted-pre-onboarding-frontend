import Todo from './commons/Todo';

export default function TodoLists({ todos }) {
  return (
    todos.length ? (
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
    ) : (
      null
    )
  );
}
