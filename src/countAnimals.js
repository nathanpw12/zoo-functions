const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined){
   const  undefinedAnimal = species.reduce((acc, element) => {
     acc[element.name] = element.residents.length;
     return (acc);
   }, {});
   return undefinedAnimal;
  }

  const searchAnimal = species.find((element2) => {
    if (Object.values(animal).includes(element2.name)) {
      return element2
    }
  });
  return searchAnimal.residents.length;
}

module.exports = countAnimals;
