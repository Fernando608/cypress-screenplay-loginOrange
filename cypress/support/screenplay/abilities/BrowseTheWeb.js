class BrowseTheWeb {
    constructor(cy) {
      this.cy = cy;
    }
  
    static using(cy) {
      return new BrowseTheWeb(cy);
    }
}

module.exports = { BrowseTheWeb };