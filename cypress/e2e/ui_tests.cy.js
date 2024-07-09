import LoginPage from "../pages/LoginPage";
import DashBoard from "../pages/DashBoard";
import faker from "faker";

describe('Happy flow, adding random valid input data', () => {
  const randomDependents = Math.floor(Math.random() * 100) + 1;

  const faker = require('faker')
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  it('Logs in the dashboard, where we can manage user ' +
      'details, delete entry and so on', function () {

    LoginPage.goToHomePage()
        .typeInUserName()
        .typeInPassword()
        .submitLogin()

    DashBoard.addEmployee()
        .fillName(firstName)
        .fillSurname(lastName)
        .fillDependents(randomDependents)
        .confirmAddingEmployee()
  })

  it('Logs in the dashboard, where employees are on the list,' +
      'we are trying to add 1000 dependents, ' +
      'which is not possible, status code 400)', function () {

    LoginPage.goToHomePage()
        .typeInUserName()
        .typeInPassword()
        .submitLogin()

    DashBoard.addEmployee()
        .fillName(firstName)
        .fillSurname(lastName)
        .fillDependents(1000)
        .confirmAddingEmployee()
  })

  it('Logs in the dashboard, where employees are on the list,' +
      'we are trying to add 100 000 dependents, ' +
      'which is not possible, status code 500)', function () {

    LoginPage.goToHomePage()
        .typeInUserName()
        .typeInPassword()
        .submitLogin()

    DashBoard.addEmployee()
        .fillName(firstName)
        .fillSurname(lastName)
        .fillDependents(100000)
        .confirmAddingEmployee()
  })

  it('Logs in the dashboard, where employees are on the list,' +
      'we are editing the first entry from the table', function () {

    const randomDependents = Math.floor(Math.random() * 100) + 1;

    LoginPage.goToHomePage()
        .typeInUserName()
        .typeInPassword()
        .submitLogin()

    DashBoard.editEntry()
        .fillName(firstName)
        .fillSurname(lastName)
        .fillDependents(randomDependents)
        .updateEntry()
  })

  it('Logs in the dashboard, where employees are on the list,' +
      'we are deleting the first entry from the table', function () {

    LoginPage.goToHomePage()
        .typeInUserName()
        .typeInPassword()
        .submitLogin()

    DashBoard.deleteEntry()
  })

})