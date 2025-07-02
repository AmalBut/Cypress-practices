/// <reference types="cypress" />

describe('Delete product from cart', () => {

    beforeEach(()=>{
        cy.visit("/")
        cy.get("#search").type("shirt")
        cy.get("button.search").click()
        cy.get(".product-item-photo").first().click()
        cy.contains("XS").click()
        cy.get('[aria-label="Purple"]').click()
        cy.get("#product-addtocart-button").click()
        cy.wait(5000)
    })
   /* it('Validate the user can delete product from shopping cart page', () => {
        
    });*/

    
    it.only('Validate the user can delete product from shopping cart dialog', () => {
        cy.get(".showcart").click()
        cy.get(".action.delete").click()
        cy.get("button.action-accept").click()
        cy.get(".counter-number").should("be.hidden")
        cy.get('.subtitle.empty').should("contain","You have no items in your shopping cart" )


    });
    
});