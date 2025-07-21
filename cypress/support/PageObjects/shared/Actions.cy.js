/// <reference types="cypress" />

class sharedActions{

    visitHomePage(){
        cy.visit("/")
        return this;
    }
}
export default sharedActions;