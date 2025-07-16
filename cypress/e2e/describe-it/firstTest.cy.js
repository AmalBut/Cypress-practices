/// <reference types="cypress" />
//comment
/**multi
 * line
 * comment
 */
describe('first scenario', () => {
   /* it("test case 1", () => {
        cy.visit('https://www.google.com/');
    })*/

    it('test case 2', () =>{
        cy.visit('https://magento.softwaretestingboard.com');
        cy.contains('What\'s New').click();
        cy.contains('Home').click();
    });

});

describe('Check login functionality', () => {

    it.only("Validate that the user can open the home page", () =>
    {
        cy.visit("/")
    })

    /**
     * Test case for login
     * 1-visit login page
     * 2-type in email field
     * 3-type in password input field
     * 4-click on login button
     */

    it.only("Validate that the user can login to maginto successfully", () =>
    {
        cy.visit('/customer/account/login/');
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()
    })

});
