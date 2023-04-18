export default function EmailField({ handleChangeEmail }) {
  return (
    <>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        data-testid="email-input"
        type="text"
        onChange={handleChangeEmail}
      />
    </>
  );
}
