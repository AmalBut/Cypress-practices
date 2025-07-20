/// <reference types="cypress" />

describe('Check Add Product to Cart', () => {
    before(() => {
        cy.loginToMagento()
    })
    it('Verify that adding product to cart is successful', () => {
        cy.visit("/")
        cy.get("#search").type("shirt")
        cy.get("button.search").click()
        /// or --> cy.get("#search").type("shirt {enter}")  //to click enter after typing "shirt"
        cy.get(".product-item-photo").first().click()
        cy.contains("XS").click()
        cy.get('[aria-label="Purple"]').click()
        cy.get("#product-addtocart-button").click()
        cy.wait(4000)
        cy.get(".counter-number").first().should("be.visible")
        cy.get('[role="alert"]').should("be.visible").and("contain","You added Radiant Tee to your shopping cart")
        
    });
});