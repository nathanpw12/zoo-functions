const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const childs = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter(
    (element) => element.age >= 18 && element.age < 50,
  );
  const senior = entrants.filter((element) => element.age >= 50);

  const totalEntrantsByAge = {
    child: childs.length,
    adult: adult.length,
    senior: senior.length,
  };
  return totalEntrantsByAge;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0 || undefined) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
