import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import SigninForm from '../components/SigninForm';

import emailChecker from '../utils/emailChecker';
import passwordChecker from '../utils/passwordChecker';

import useUserStore from '../hooks/useUserStore';

export default function SigninPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      navigate('/todo');
    }
  }, []);

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

  const handleClickSubmit = async (event) => {
    event.preventDefault();
    const accessToken = await userStore.signin();

    if (!accessToken) {
      return;
    }

    localStorage.setItem('access_token', accessToken);
    navigate('/todo');
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
