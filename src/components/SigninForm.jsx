/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
export default function SigninForm({
  handleChangeEmail,
  handleChangePassword,
  handleClickSubmit,
  isValid,
}) {
  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <form id="signin-form" onSubmit={handleSubmit}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        data-testid="email-input"
        type="text"
        onChange={handleChangeEmail}
      />
      <label htmlFor="password">패스워드</label>
      <input
        id="password"
        data-testid="password-input"
        type="password"
        onChange={handleChangePassword}
      />
      <button
        type="submit"
        data-testid="signin-button"
        onClick={handleClickSubmit}
        disabled={!isValid}
      >
        로그인
      </button>
    </form>
  );
}
