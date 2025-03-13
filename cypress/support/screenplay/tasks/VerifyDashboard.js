const { DashboardPage } = require('../../ui/DashboardPage');
const { LoginPage } = require('../../ui/LoginPage');

class VerifyDashboard {
  constructor(checkType, expectedText) {
    this.checkType = checkType;
    this.expectedText = expectedText;
  }

  static isVisible() {
    return new VerifyDashboard('visible');
  }

  static showsErrorMessage(expectedText) {
    return new VerifyDashboard('error', expectedText);
  }

  checkAsExpected(actor) {
    const cy = actor.using('BrowseTheWeb').cy;
    
    if (this.checkType === 'visible') {
      // Verificar que elementos del dashboard están visibles
      cy.get(DashboardPage.welcomeMessage).should('be.visible');
      cy.get(DashboardPage.userProfile).should('exist');
      cy.get(DashboardPage.navigationMenu).should('be.visible');
    } 
    else if (this.checkType === 'error') {
      // Verificar mensaje de error
      cy.get(LoginPage.errorMessage)
        .should('be.visible')
        .and('contain.text', this.expectedText);
    }
    
    return actor;
  }
}

module.exports = { VerifyDashboard };