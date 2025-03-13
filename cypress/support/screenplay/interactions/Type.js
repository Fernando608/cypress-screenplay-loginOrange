class Type {
    constructor(text, elementLocator) {
      this.text = text;
      this.elementLocator = elementLocator;
    }
  
    static theText(text) {
      return {
        into: (elementLocator) => new Type(text, elementLocator)
      };
    }
  
    performAs(actor) {
      const cy = actor.using('BrowseTheWeb').cy;
      cy.get(this.elementLocator).type(this.text);
      return actor;
    }
}
  
module.exports = { Type };
