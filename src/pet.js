const MAXIMUM_FITNESS = 10;
const MAXIMUM_AGE = 30;
const MINUMUM_AGE = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = MINIMUM_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.adoptChild = function () {
  [this.parent + " has adopted " + childName];
};

parentPet.prototype.children = function () {
  this.children += 1;
  return [this.children];
};

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if ((this.fitness = 4) <= 10) {
    this.fitness + 4;
  } else {
    this.fitness + 10;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if ((this.hunger = -3) >= 0) {
    this.hunger = -3;
  } else {
    this.hunger = 0;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness <= 3 && this.hunger <= 5) {
    return "I am hungry AND I need a walk";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger <= 5) {
    return "I am hungry";
  } else {
    return "I feel great!";
  }
};
module.exports = Pet;
