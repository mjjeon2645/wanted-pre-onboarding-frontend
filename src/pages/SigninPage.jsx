import SigninForm from '../components/SigninForm';

import emailChecker from '../utils/emailChecker';
import passwordChecker from '../utils/passwordChecker';

import useSigninStore from '../hooks/useSigninStore';

export default function SigninPage() {
  const signinStore = useSigninStore();

  const { email, password } = signinStore;

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    signinStore.setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    signinStore.setPassword(value);
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
