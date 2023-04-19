export default function TodoInput({
  handleChangeTodoInput, handleClickAddTodo, value,
}) {
  return (
    <>
      <input
        data-testid="new-todo-input"
        onChange={handleChangeTodoInput}
        value={value}
      />
      <button
        type="button"
        data-testid="new-todo-add-button"
        onClick={handleClickAddTodo}
      >
        추가
      </button>
    </>
  );
}
