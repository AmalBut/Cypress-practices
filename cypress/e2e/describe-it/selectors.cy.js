/// <reference types="cypress" />

describe('Selectors lesson', () => {

    it('Test selectors', () => {
        cy.visit("/")

        cy.get("a")
        cy.get(".logo")
    });
    
});

describe('Selectors', () => {
    it.only('Find elements in LUMA website', () => {
    cy.visit("/")
    cy.get("li.authorization-link a").first() //get Sign In link
    cy.get("a.showcart") //get cart 
    cy.get(".page-title") //get Home Page title
    cy.get("div.block-static-block > ul > li > a").first() //get Notes link in the footer
    cy.get(".links .widget a").first() //get Notes link in the footer
    cy.get(".page-footer .links a").first() //get Notes link in the footer
        
    });
    
});
