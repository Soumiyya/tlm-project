

describe("Login", () => {

})
    it("login", () => {
        cy.visit("https://tlm.epaysystems.com/WebPunch/US/V5.0/Login.aspx?ReturnUrl=%2fWebPunch%2fUS%2fV5.0%2fPunchInOut%2fPunchInOut.aspx")
        cy.get('#txtCorpID').type('vensurehcm')
        cy.get('#txtLoginID').type('suhail.thajudeen')
        cy.get('#txtPassword').type('Apple@123')
        cy.get('#btnLogin').click()

        cy.get('#btnTabPunchInOut').click()

    })
