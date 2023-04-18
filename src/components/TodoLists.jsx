import Todo from './commons/Todo';

export default function TodoLists({ todos, handleChange, handleClickDelete }) {
  return (
    todos.length ? (
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            handleChange={handleChange}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </ul>
    ) : (
      null
    )
  );
}
