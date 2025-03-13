class Wait {
    constructor(milliseconds) {
      this.milliseconds = milliseconds;
    }
  
    static for(milliseconds) {
      return new Wait(milliseconds);
    }
  
    performAs(actor) {
      const cy = actor.using('BrowseTheWeb').cy;
      cy.wait(this.milliseconds);
      return actor;
    }
}


module.exports = { Wait };