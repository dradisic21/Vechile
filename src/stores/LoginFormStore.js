import { makeObservable, observable, action, computed } from 'mobx';

class LoginFormStore {
  username = '';
  password = '';
  usernameError = '';
  passwordError = '';

  constructor() {
    makeObservable(this, {
      username: observable,
      password: observable,
      usernameError: observable,
      passwordError: observable,
      isFormValid: computed,
      setUsername: action,
      setPassword: action,
      validateUsername: action,
      validatePassword: action,
    });
  }

  get isFormValid() {
    return !this.usernameError && !this.passwordError;
  }

  setUsername(username) {
    this.username = username;
    this.validateUsername();
  }

  setPassword(password) {
    this.password = password;
    this.validatePassword();
  }

  validateUsername() {
    this.usernameError = this.username.trim() ? '' : 'Username is required';
  }

  validatePassword() {
    this.passwordError = this.password.trim() ? '' : 'Password is required';
  }
}

const loginFormStore = new LoginFormStore();

export default loginFormStore;
