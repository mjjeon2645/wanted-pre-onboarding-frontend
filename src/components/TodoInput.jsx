export default function TodoInput({ handleChangeTodoInput, handleClickAddTodo }) {
  return (
    <>
      <input data-testid="new-todo-input" onChange={handleChangeTodoInput} />
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
