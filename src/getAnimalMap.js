const data = require('../data/zoo_data');

const sortedResidents = (residents, sorted, sex) => {
  if (sex && sorted) {
    return residents
      .filter(({ sex: residentSex }) => sex === residentSex)
      .map(({ name }) => name)
      .sort();
  }

  if (sorted) return residents.map(({ name }) => name).sort();

  if (sex) {
    return residents
      .filter(({ sex: residentSex }) => sex === residentSex)
      .map(({ name }) => name);
  }

  return residents.map(({ name }) => name);
};

const searchSpecies = () =>
  data.species.reduce(
    (acc, { name, location }) => ({
      ...acc,
      [location]: [...(acc[location] || []), name],
    }),
    {},
  );

const findSpecies = (sorted, sex) =>
  data.species.reduce(
    (acc, { name, location, residents }) => ({
      ...acc,
      [location]: [
        ...(acc[location] || []),
        {
          [name]: sortedResidents(residents, sorted, sex),
        },
      ],
    }),
    {},
  );

function getAnimalMap(param) {
  if (!param) return searchSpecies();
  const { includeNames, sorted, sex } = param;
  if (!includeNames) return searchSpecies();
  return findSpecies(sorted, sex);
}

module.exports = getAnimalMap;
