const { Actor } = require('../../support/screenplay/actors/Actor');
const { BrowseTheWeb } = require('../../support/screenplay/abilities/BrowseTheWeb');
const { Navigate } = require('../../support/screenplay/tasks/Navigate');
const { Login } = require('../../support/screenplay/tasks/Login');
const { VerifyDashboard } = require('../../support/screenplay/tasks/VerifyDashboard');
const { LoginPage } = require('../../support/ui/LoginPage');

describe('Login de usuario', () => {
  it('Un usuario puede iniciar sesión con credenciales válidas', () => {
    const juan = new Actor('Juan')
      .can(BrowseTheWeb.using(cy));

    juan.attemptsTo(
      Navigate.to(LoginPage.url),
      Login.withCredentials('Admin', 'admin123')
    );

    juan.shouldSee(
      VerifyDashboard.isVisible()
    );
  });
  
  it('Un usuario recibe un mensaje de error con credenciales inválidas', () => {
    const ana = new Actor('Ana')
      .can(BrowseTheWeb.using(cy));

    ana.attemptsTo(
      Navigate.to(LoginPage.url),
      Login.withCredentials('usuario_invalido', 'password_invalida')
    );

    ana.shouldSee(
      VerifyDashboard.showsErrorMessage('Invalid credentials')
    );
  });
});