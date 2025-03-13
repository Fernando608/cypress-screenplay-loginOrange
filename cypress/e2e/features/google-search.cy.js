const { Actor } = require('../../support/screenplay/actors/Actor');
const { BrowseTheWeb } = require('../../support/screenplay/abilities/BrowseTheWeb');
const { Navigate } = require('../../support/screenplay/tasks/Navigate');
const { Search } = require('../../support/screenplay/tasks/Search');
const { VerifyResults } = require('../../support/screenplay/tasks/VerifyResults');
const { GoogleHomePage } = require('../../support/ui/GoogleHomePage');
const { GoogleResultsPage } = require('../../support/ui/GoogleResultsPage');

describe('Búsqueda en Google', () => {
  beforeEach(() => {
    // Desactivar el bloqueo de cookies y otras alertas que podrían interferir
    cy.on('uncaught:exception', () => false);
  });

  it('Un usuario puede buscar un término y ver resultados relevantes', () => {
    const maria = new Actor('Maria')
      .can(BrowseTheWeb.using(cy));

    maria.attemptsTo(
      Navigate.to(GoogleHomePage.url),
      Search.forTerm('Cypress testing framework')
    );

    maria.shouldSee(
      VerifyResults.containingText('Cypress')
    );
  });
});