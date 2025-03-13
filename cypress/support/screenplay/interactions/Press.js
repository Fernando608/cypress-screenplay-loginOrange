class Press {
    constructor(key) {
      this.key = key;
    }
  
    static key(key) {
      return new Press(key);
    }
  
    performAs(actor) {
      const cy = actor.using('BrowseTheWeb').cy;
      cy.get('body').type(`{${this.key}}`);
      return actor;
    }
}

module.exports = { Press };