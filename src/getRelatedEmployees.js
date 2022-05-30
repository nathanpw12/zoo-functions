const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const boolManager = employees.some((element) =>
    element.managers.includes(id));
  return boolManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees
      .filter((element) => element.managers.includes(managerId))
      .map((element2) => `${element2.firstName} ${element2.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
