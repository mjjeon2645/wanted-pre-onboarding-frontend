import EmailField from './commons/EmailField';
import PasswordField from './commons/PasswordField';

export default function SigninForm({
  handleChangeEmail,
  handleChangePassword,
  handleClickSubmit,
  isValid,
}) {
  return (
    <form id="signin-form">
      <EmailField handleChangeEmail={handleChangeEmail} />
      <PasswordField handleChangePassword={handleChangePassword} />
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
