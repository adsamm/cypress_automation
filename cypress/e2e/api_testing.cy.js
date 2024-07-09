/* describe('Write new email', () => {
    it('Get employee list', function () {
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
}) */


describe("API Testing", () => {
    it("GET", () => {
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

    it("POST", () => {
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees',
            body: {
                firstName: Kamila,
                lastName: Dudova,
                dependants: 3,
            },
            headers: {
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            },
        }).then(response => {
            expect(response.status).to.equal(201)
        })
    })



    it("PUT", () => {
        cy.request({
            method: "PUT",
            url: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees",
            body: {
                id: "7723d557-e93d-44f8-a18f-7eb0298f870b",
                firstName: Rogerss,
                lastName: Steve,
                dependants: 2
            },
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
            }
        }).then((res) => {
            expect(res.body).have.property('json')
            // compare the json property and make sure it is equal
            expect(res.body.json).to.deep.equal({
                "firstName": "Rogers"
            })
        })
    })

    it("POST", () => {
        cy.request({
            method: 'POST',
            url: 'myURL',
            body: {
                Name: name,
                userId: userId,
                languageId: languageId
            },
            headers: {
                authorization: 'Basic lasdkfjlsdyZHRoYXRpa25vdzp'
            },
        }).then(response => {
            expect(response.status).to.equal(201)
        })

        it("PATCH", () => {
            cy.request("PATCH", "https://httpbin.org/patch", {'name': 'Rei'}).then((res) => {
                expect(res.body).have.property('json')
                expect(res.body.json).to.deep.equal({
                    "name": "Rei"
                })
            })


            it("Get Call", () => {
                cy.request({
                    method: 'GET',
                    url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees',
                    headers: {
                        authorization: 'Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx'
                    }
                        .its('headers')
                        .its('content-type')
                        .should('include', 'application/json')

                }).then(function (response) {
                    expect(response.status).to.equal(200)
                    cy.log(JSON.stringify(response.body));
                    console.log(response.body);
                });
            })
        }); */
    })
})