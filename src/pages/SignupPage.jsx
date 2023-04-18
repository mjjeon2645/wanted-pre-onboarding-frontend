import SignupForm from '../components/SignupForm';

import emailChecker from '../utils/emailChecker';
import passwordChecker from '../utils/passwordChecker';

import useUserStore from '../hooks/useUserStore';

export default function SignupPage() {
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
    userStore.signup();
  };

  return (
    <div>
      <SignupForm
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleClickSubmit={handleClickSubmit}
        isValid={emailChecker(email) && passwordChecker(password)}
      />
    </div>
  );
}
