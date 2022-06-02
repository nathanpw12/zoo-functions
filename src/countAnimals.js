const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(
      (acc, { name, residents }) => ({ ...acc, [name]: residents.length }),
      {},
    );
  }

  const { specie, sex } = animal;

  if (specie && sex) {
    return species
      .find(({ name }) => name === specie)
      .residents.filter(({ sex: sexKey }) => sexKey === sex).length;
  }

  if (specie) {
    return species.find(({ name }) => name === specie).residents.length;
  }
}

module.exports = countAnimals;
