export default function Todo() {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <button type="button" data-testid="modify-button">수정</button>
      <button type="button" data-testid="delete-button">삭제</button>
    </li>
  );
}
