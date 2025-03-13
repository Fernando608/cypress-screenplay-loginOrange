const { GoogleResultsPage } = require('../../ui/GoogleResultsPage');

class VerifyResults {
  constructor(expectedText) {
    this.expectedText = expectedText;
  }

  static containingText(expectedText) {
    return new VerifyResults(expectedText);
  }

  checkAsExpected(actor) {
    const cy = actor.using('BrowseTheWeb').cy;
    
    // Verificamos que haya resultados y que al menos uno contenga el texto esperado
    cy.wait(10000); //Debo configurar tiempo usando interactions/wait para resolver R-Capcha
    cy.get(GoogleResultsPage.results).should('have.length.greaterThan', 0);
    cy.get(GoogleResultsPage.resultTitles).should('contain.text', this.expectedText);

    
    return actor;
  }
}

module.exports = { VerifyResults };