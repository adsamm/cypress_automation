class LoginPage {

    goToHomePage() {
       cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
       return this
    }

    typeInUserName() {
        let user = Cypress.env('username')
        cy.get('#Username').type(user, { log: false })
        return this
    }

    typeInPassword() {
        let password = Cypress.env('password')
        cy.get('#Password').type(password, { log: false })
        return this
    }

    submitLogin() {
       cy.get('[type="submit"]').click()
       return this
    }

}

export default new LoginPage