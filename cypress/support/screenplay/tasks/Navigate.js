class Navigate {
    constructor(url) {
      this.url = url;
    }
  
    static to(url) {
      return new Navigate(url);
    }
  
    performAs(actor) {
      const cy = actor.using('BrowseTheWeb').cy;
      cy.visit(this.url);
      
      // Manejo del diálogo de cookies de Google si aparece
      cy.get('body').then(($body) => {
        if ($body.find('#L2AGLb').length > 0) {
          cy.get('#L2AGLb').click();
        }
      });
      
      return actor;
    }
}

module.exports = { Navigate };
