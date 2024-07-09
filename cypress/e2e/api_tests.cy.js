describe("API Testing", () => {

    it("GET the list of employees", () => {
        cy.request({
            method: "GET",
            url: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees",
            headers: {
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            },
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    it("POST - add employee", () => {
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees',
            body: {
                firstName: "Kamila",
                lastName: "Dudova",
                dependants: 3,
            },
            headers: {
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            },
        }).then(function (response) {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body));
            console.log(response.body);
        });
    })

    it("PUT - update employee data", () => {
        cy.request({
            method: "PUT",
            url: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees",
            body: {
                id: "7723d557-e93d-44f8-a18f-7eb0298f870b",
                firstName: "Rogerss",
                lastName: "Steve",
                dependants: 2
            },
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body));
            console.log(response.body);
        });
    })

    it("GET call given custmer id", () => {
        cy.request({
            method: 'GET',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/7723d557-e93d-44f8-a18f-7eb0298f870b',
            headers: {
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    it("DELETE the employee by id", () => {
        cy.request({
            method: "DELETE",
            url: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/7723d557-e93d-44f8-a18f-7eb0298f870b",
            headers: {
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            },
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

})