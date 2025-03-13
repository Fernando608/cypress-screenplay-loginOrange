class Actor {
  
  constructor(name) {
    this.name = name;
    this.abilities = new Map();
  }

  can(ability) {
    this.abilities.set(ability.constructor.name, ability);
    return this;
  }

  using(abilityName) {
    return this.abilities.get(abilityName);
  }

  attemptsTo(...tasks) {
    for (const task of tasks) {
      task.performAs(this);
    }
    return this;
  }

  shouldSee(verification) {
    verification.checkAsExpected(this);
    return this;
  }
}
module.exports = { Actor };