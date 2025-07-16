/// <reference types="cypress"/>

describe('Cypress Selectors', () => {
   
    it('Select element by text', () => {
        cy.visit("/")
        cy.contains("Sale")
        cy.get(".price-label").first() // get all elements ( spans )( As low as )
        cy.get(":nth-child(1) > .product-item-info > .product-item-details > .price-box > .normal-price > .price-container > .price-label")
        cy.contains("As low as")
        cy.contains("What's New")
        cy.contains("span","What's New")
        cy.get(".page-footer .links").find("li").contains("Privacy and Cookie")
    });
    
    it('Select element by position in list', () => {
        cy.visit("/")
        cy.get("li.level0").first().next()
        cy.get("li.level0").last().prev()
        cy.get("li.level0").eq(2)
    });

    it.only('Select elements by filtering', () => {
        cy.visit("/")
        cy.get("li").filter(".authorization-link")
        cy.get("li").not(".authorization-link")
        cy.contains("Subscribe").parent()
        cy.contains("Subscribe").parents()
        cy.get(".page-footer .links").first().children()
        cy.get(".page-footer .links").last().children()

    });
});