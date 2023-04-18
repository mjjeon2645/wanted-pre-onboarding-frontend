export default function Todo({ handleChange, todo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={() => handleChange(todo)}
          checked={todo.isCompleted}
        />
        <span>{todo.todo}</span>
      </label>
      <button type="button" data-testid="modify-button">수정</button>
      <button type="button" data-testid="delete-button">삭제</button>
    </li>
  );
}
