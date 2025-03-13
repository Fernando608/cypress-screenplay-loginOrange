class Click {
    constructor(elementLocator) {
      this.elementLocator = elementLocator;
    }
  
    static on(elementLocator) {
      return new Click(elementLocator);
    }
  
    performAs(actor) {
      const cy = actor.using('BrowseTheWeb').cy;
      cy.get(this.elementLocator).click({ force: true });
      return actor;
    }
}

module.exports = { Click };