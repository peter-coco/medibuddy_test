const checkValidEmail = (email: string) => {
  let emailFormat =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return emailFormat.test(email);
};
const checkValidPassword = (password: string) => {
  let passwordFormat = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;

  return passwordFormat.test(password);
};

export { checkValidEmail, checkValidPassword };
