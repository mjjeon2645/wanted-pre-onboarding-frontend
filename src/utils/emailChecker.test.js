import emailChecker from './emailChecker';

test('emailChecker', () => {
  expect(emailChecker('mjjeon')).toBeFalsy();
  expect(emailChecker('mjjeon@')).toBeTruthy();
});
