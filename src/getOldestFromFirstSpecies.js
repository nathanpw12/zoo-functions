const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeesSearch = data.employees.find((element) => element.id === id).responsibleFor[0];
  return Object.values(data.species
    .find((element) => element.id === employeesSearch).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) {
        return acc;
      }
      return curr;
    }));
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
