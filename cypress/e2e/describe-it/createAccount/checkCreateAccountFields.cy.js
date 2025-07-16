/// <reference types="cypress" />

describe('Check Create New Account page elements', () => {
    
    it('Verify all Create New Account elements are visible', () => {
        cy.visit("/customer/account/create/")

        //Page title 
        cy.get(".page-title").should("be.visible")
        cy.contains("Create New Customer Account").should("be.visible")
        //Personal Information
        cy.contains("span","Personal Information").should("be.visible")
        
        //First Name title
        cy.get('[for="firstname"]').should("be.visible")
        cy.contains("First Name").should("be.visible")
        //First Name field
        cy.get("#firstname").should("be.visible")
       
        //Last Name title
        cy.get('[for="lastname"]').should("be.visible")
        cy.contains("Last Name").should("be.visible")
        //Last Name field 
        cy.get("#lastname").should("be.visible")
        
        //Sign-in Information
        cy.contains("span","Sign-in Information").should("be.visible")
        
        //Email title
        cy.get('[for="email_address"]').should("be.visible")
        cy.contains("Email").should("be.visible")
        //Email field
        cy.get("#email_address").should("be.visible")

        //Password title
        cy.get('[for="password"]').should("be.visible")
        cy.contains("Password").should("be.visible")
        //Password field
        cy.get("#password").should("be.visible")
        
        //Password Strength
        cy.get("#password-strength-meter").should("be.visible").and("contain","Password Strength")
        //Confirm Password title
        cy.get('[for="password-confirmation"]').should("be.visible")
        cy.contains("Confirm Password").should("be.visible")
        //Confirm Password field
        cy.get("#password-confirmation").should("be.visible")
        
        //Create an Account button
        cy.contains("button","Create an Account").should("be.visible")
        cy.get(".submit").should("be.visible")
        //Required fields
        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")

    });

});