const { Type } = require('../interactions/Type');
const { Press } = require('../interactions/Press');
const { GoogleHomePage } = require('../../ui/GoogleHomePage');

class Search {
  constructor(term) {
    this.term = term;
  }

  static forTerm(term) {
    return new Search(term);
  }

  performAs(actor) {
    return actor.attemptsTo(
      Type.theText(this.term).into(GoogleHomePage.searchBox),
      Press.key('enter')
    );
  }
}

module.exports = { Search };
