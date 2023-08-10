const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

it("sets the name property", () => {
  const pet = new Pet("Fido");

  expect(pet.name).toEqual("Fido");
});

it("has a initial age of 0", () => {
  const pet = new Pet("Fido");

  expect(pet.age).toEqual(0);
});

it("has an inital hunger of 0", () => {
  const pet = new Pet("Fido");

  expect(pet.hunger).toEqual(0);
});

it("has an inital fitness of 10", () => {
  const pet = new Pet("Fido");

  expect(pet.fitness).toEqual(10);
});

describe("walk", () => {
  it("increases fitness by 4 to a maximum of 10", () => {
    const pet = new Pet("Fido");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toBe(8);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  it("decreases the hunger level by 3 to a minimum of 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 4;
    pet.feed();

    expect(pet.hunger).toBe(1);
  });

  it("decreases to a minimum of 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toBe(0);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });

  describe("checkUp", () => {
    it("throws an error if the pet is not alive", () => {
      const pet = new Pet("Fido");

      pet.age = 30;

      expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });

    it('returns "I feel great" if all pets needs are met', () => {
      const pet = new Pet("Fido");

      expect(pet.checkUp()).toBe("I feel great!");
    });

    it('returns "I need a walk" if pets fitness is less than or equal to 3', () => {
      const pet = new Pet("Fido");

      pet.fitness = 3;

      expect(pet.checkUp()).toBe("I need a walk");
    });

    it('returns "I am hungry" if pets hunger is more than or equal to 5', () => {
      const pet = new Pet("Fido");

      pet.hunger = 5;

      expect(pet.checkUp()).toBe("I am hungry");
    });

    it('returns "I am hungry AND I need a walk" if pets fitness is less than or equal to 3 and hunger is more than or equal to 5', () => {
      const pet = new Pet("Fido");

      pet.fitness = 3;
      pet.hunger = 5;

      expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });
  });
});

describe("growUp", () => {
  it("increments the age by 1 and return ", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  describe("adoptChild", () => {
    it("returns a parent and a child object", () => {
      const parent = new Pet("Whiskers");
      const child = new Pet("Rufus");
      expect(new Pet("Whiskers")).toBeInstanceOf(Pet);
      expect(new Pet("Rufus")).toBeInstanceOf(Pet);
    });
  });
});
