/// <reference types="cypress" />

class loginTestAssertions{

    checkWelcomeIsVisible(text){
        cy.wait(4000)
        cy.get("span.logged-in").first().should("contain",text).and("be.visible")
    }

}
export default loginTestAssertions;