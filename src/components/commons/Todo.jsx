/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

export default function Todo({
  handleChangeIsCompleted, handleClickDelete, handleClickSubmit, todo,
}) {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [text, setText] = useState(todo.todo);

  const handleClickModify = () => {
    setIsModifyMode(!isModifyMode);
  };

  const handleClickCancel = () => {
    setText(todo.todo);
    setIsModifyMode(!isModifyMode);
  };

  const handleChangeTodo = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const onClickSubmit = async (todoObject, todoText) => {
    await handleClickSubmit(todoObject, todoText);
    setIsModifyMode(!isModifyMode);
  };

  return (
    <li>
      <label htmlFor="isCompleted-input" />
      <input
        id="isCompleted-input"
        type="checkbox"
        onChange={() => handleChangeIsCompleted(todo)}
        checked={todo.isCompleted}
      />
      {!isModifyMode ? (
        <>
          <span>{todo.todo}</span>
          <button
            type="button"
            data-testid="modify-button"
            onClick={handleClickModify}
          >
            수정
          </button>
          <button
            type="button"
            data-testid="delete-button"
            onClick={() => handleClickDelete(todo.id)}
          >
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            data-testid="modify-input"
            onChange={handleChangeTodo}
            value={text}
          />
          <button
            type="button"
            data-testid="submit-button"
            onClick={() => onClickSubmit(todo, text)}
          >
            제출
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            onClick={handleClickCancel}
          >
            취소
          </button>
        </>
      )}
    </li>
  );
}
