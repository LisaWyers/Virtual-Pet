const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);

  });
});

it('sets the name property', () => {
  const pet = new Pet('Fido');

  expect(pet.name).toEqual('Fido');
});

describe('growUp', () => {
  it('increments the age by 1 and return ', () => {
  const pet = new Pet('Fido');

  pet.growUp ();
  expect(pet.age).toEqual(1);

});
});

it('has a initial age of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0);
});

it('has an inital hunger of 0', () => {
const pet = new Pet('Fido');
expect(pet.hunger).toEqual(0);
});

it('has an inital fitness of 10', () => {
const pet = new Pet('Fido');
expect(pet.fitness).toEqual(10);
});