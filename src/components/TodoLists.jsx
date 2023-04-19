import Todo from './commons/Todo';

export default function TodoLists({
  todos, handleChangeIsCompleted, handleClickDelete, handleClickSubmit,
}) {
  return (
    todos.length ? (
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            handleChangeIsCompleted={handleChangeIsCompleted}
            handleClickDelete={handleClickDelete}
            handleClickSubmit={handleClickSubmit}
          />
        ))}
      </ul>
    ) : (
      null
    )
  );
}
