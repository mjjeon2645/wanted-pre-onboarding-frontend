import SigninForm from '../components/SigninForm';

import emailChecker from '../utils/emailChecker';
import passwordChecker from '../utils/passwordChecker';

import useUserStore from '../hooks/useUserStore';

export default function SigninPage() {
  const userStore = useUserStore();

  const { email, password } = userStore;

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    userStore.setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    userStore.setPassword(value);
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <SigninForm
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleClickSubmit={handleClickSubmit}
        isValid={emailChecker(email) && passwordChecker(password)}
      />
    </div>
  );
}
