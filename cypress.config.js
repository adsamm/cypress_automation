const { defineConfig } = require('cypress')

module.exports = defineConfig({
    "env": {
        "username": "TestUser398",
        "password": "I@F%c5@CxL5q",
        "authorization": "Basic VGVzdFVzZXIzOTg6SUBGJWM1QEN4TDVx",
        "homepage": "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account",
        "environment": "prod"
    },

    e2e: {
    // Configure your E2E tests here
    },
})