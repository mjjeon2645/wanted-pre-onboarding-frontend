import { fireEvent, render, screen } from '@testing-library/react';

import SigninForm from './SigninForm';

import emailChecker from '../utils/emailChecker';
import passwordChecker from '../utils/passwordChecker';

const context = describe;

const handleChangeEmail = jest.fn();
const handleChangePassword = jest.fn();
const handleClickSubmit = jest.fn();

let email;
let password;

describe('SigninForm', () => {
  function renderSigninForm() {
    render(<SigninForm
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleClickSubmit={handleClickSubmit}
      isValid={emailChecker(email) && passwordChecker(password)}
    />);
  }
  context('사용자가 "/signin" url로 접속하면', () => {
    beforeEach(() => {
      email = 'mjjeon@';
      password = '12345678';
    });

    it('로그인 할 수 있는 form이 렌더된다', () => {
      renderSigninForm();

      fireEvent.change(screen.getByLabelText('이메일'), {
        target: { value: 'mjjeon@' },
      });
      screen.getByDisplayValue('mjjeon@');
      expect(handleChangeEmail).toBeCalled();

      fireEvent.change(screen.getByLabelText('패스워드'), {
        target: { value: '12345678' },
      });
      screen.getByDisplayValue('12345678');
      expect(handleChangePassword).toBeCalled();

      fireEvent.click(screen.getByText('로그인'));

      expect(handleClickSubmit).toBeCalled();
    });
  });

  context('이메일에 @ 기호가 없으면', () => {
    beforeEach(() => {
      email = 'mjjeon';
      password = '12345678';
    });

    it('로그인 버튼을 클릭할 수 없다', () => {
      renderSigninForm();

      expect(screen.getByText('로그인')).toBeDisabled();
    });
  });

  // context('password가 8글자 미만이면', () => {
  //   beforeEach(() => {
  //     email = 'mjjeon@';
  //     password = '123456';
  //   });

  //   it('로그인 버튼을 클릭할 수 없다', () => {
  //     renderSigninForm();

  //     fireEvent.click(screen.getByText('로그인'));

  //     expect(handleClickSubmit).not.toBeCalled();
  //   });
  // });
});
