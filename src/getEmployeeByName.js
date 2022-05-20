// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  if (employeeName.length > 0) {
    return (
      data.employees.find((element) => element.firstName === employeeName)
      || data.employees.find((element) => element.lastName === employeeName)
    );
  }
}

module.exports = getEmployeeByName;
