import passwordChecker from './passwordChecker';

test('passwordChecker', () => {
  expect(passwordChecker('123')).toBeFalsy();
  expect(passwordChecker('1234567')).toBeFalsy();
  expect(passwordChecker('12345678')).toBeTruthy();
});
