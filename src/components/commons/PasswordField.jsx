export default function PasswordField({ handleChangePassword }) {
  return (
    <>
      <label htmlFor="password">패스워드</label>
      <input
        id="password"
        data-testid="password-input"
        type="password"
        onChange={handleChangePassword}
      />
    </>
  );
}
