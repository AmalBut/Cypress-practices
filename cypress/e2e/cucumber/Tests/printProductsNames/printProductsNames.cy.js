/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to magento website",()=>{
    cy.visit("/");
})

Then("The products should be available in Hot Seller section",()=>{
    cy.log( cy.get(".product-item-link"))
    //const name = $products.text()
    //cy.log(name)
    cy.get(".product-item-link").then(($products)=>{
        for (let i = 0; i < $products.length; i++) {
            cy.wrap($products[i]).invoke("text").then((productName)=>{
                cy.log(productName)
            })
        }
    })
})