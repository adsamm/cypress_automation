class DashBoard {

    editEntry() {
        cy.get('#employeesTable > tbody > tr:nth-child(1) > td:nth-child(9) > i.fas.fa-edit').click()
        return this
    }

    updateEntry() {
        cy.get('#updateEmployee').click()
        return this
    }

    addEmployee() {
        cy.get('#add').click()
        return this
    }

    deleteEntry() {
        cy.get('#employeesTable > tbody > tr:nth-child(4) > td:nth-child(9) > i.fas.fa-times').click()
        cy.get('#deleteEmployee').click()
        return this
    }

    fillDependents(value) {
        const field = cy.get('#dependants')
        field.clear();
        field.type(value);
        return this
    }

    fillDependents(value) {
        const field = cy.get('#dependants')
        field.clear();
        field.type(value);
        return this
    }

    fillName(name) {
        const field = cy.get('#firstName')
        field.clear();
        field.type(name);
        return this
    }

    fillSurname(surname) {
        const field = cy.get('#lastName')
        field.clear();
        field.type(surname);
        return this
    }

    fillDependents(value) {
        const field = cy.get('#dependants')
        field.clear();
        field.type(value);
        return this
    }

    confirmAddingEmployee() {
        cy.get('#addEmployee').click()
    }
}

export default new DashBoard