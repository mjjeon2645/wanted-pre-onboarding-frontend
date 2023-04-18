export default function Todo({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <button type="button" data-testid="modify-button">수정</button>
      <button type="button" data-testid="delete-button">삭제</button>
    </li>
  );
}
