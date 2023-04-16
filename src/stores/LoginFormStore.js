import { makeAutoObservable } from "mobx";
import validator from "validatorjs";

class LoginFormStore {
  username = "";
  password = "";
  error = "";
  validation = new validator({}, {});

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(value) {
    this.username = value;
  }

  setPassword(value) {
    this.password = value;
  }

  setError(value) {
    this.error = value;
  }

  async validateForm() {
    const validationData = {
      username: this.username,
      password: this.password,
    };

    const rules = {
      username: "required",
      password: "required|min:8",
    };

    this.validation = new validator(validationData, rules);

    await this.validation.checkAsync();

    return this.validation.errors;
  }
}

export default new LoginFormStore();
