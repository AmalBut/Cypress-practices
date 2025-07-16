/// <reference types="cypress" />

describe('Check Create Account Functionality', () => {
    it.only('Verify creating account Happy Scenario', () => {
        const emailNum=Math.floor(Math.random()*1000) /// Generate Integer random number

        cy.visit("/customer/account/create/")
        cy.get("#firstname").type("Amal")
        cy.get("#lastname").type("Butmah")
        cy.get("#email_address").type("ama"+emailNum+"@gmail.com") // To make the email different each test
        cy.get("#password").type("Amal@123")
        cy.get("#password-confirmation").type("Amal@123")
        cy.get(".submit").click()
      
        cy.url().should("include","/customer/account/")
        cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/")
        cy.wait(1000)
        cy.get(".page-title").should("contain","My Account")
        cy.get("span.logged-in").first().should("contain","Welcome, Amal Butmah!")
        cy.get('[role="alert"]').should("be.visible").and("contain","Thank you for registering with Main Website Store.")

    });

    it('Verify that the validation of the password is correct', () => {
        const emailNum=Math.floor(Math.random()*1000) /// Generate Integer random number

        cy.visit("/customer/account/create/")
        cy.get("#firstname").type("Amal")
        cy.get("#lastname").type("Butmah")
        cy.get("#email_address").type("ama"+emailNum+"@gmail.com") // To make the email different each test
        cy.get("#password").type("12345678") 
        cy.get("#password-strength-meter-label").should("contain","Weak")
        cy.get("#password-error").should("be.visible")
        .and("contain","Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.")
        
    });
});