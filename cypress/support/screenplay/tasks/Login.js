const { Type } = require('../interactions/Type');
const { Click } = require('../interactions/Click');
const { LoginPage } = require('../../ui/LoginPage');

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static withCredentials(username, password) {
    return new Login(username, password);
  }

  performAs(actor) {
    return actor.attemptsTo(
      Type.theText(this.username).into(LoginPage.usernameField),
      Type.theText(this.password).into(LoginPage.passwordField),
      Click.on(LoginPage.loginButton)
    );
  }
}

module.exports = { Login };