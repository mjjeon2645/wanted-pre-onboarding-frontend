import EmailField from './commons/EmailField';
import PasswordField from './commons/PasswordField';

export default function SignupForm({
  handleChangeEmail,
  handleChangePassword,
  handleClickSubmit,
  isValid,
}) {
  return (
    <form>
      <EmailField handleChangeEmail={handleChangeEmail} />
      <PasswordField handleChangePassword={handleChangePassword} />
      <button
        type="submit"
        data-testid="signup-button"
        onClick={handleClickSubmit}
        disabled={!isValid}
      >
        회원가입
      </button>
    </form>
  );
}
