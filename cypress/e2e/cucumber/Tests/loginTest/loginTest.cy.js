/// <reference types="cypress" />
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loginTestActions from "../../../../support/PageObjects/loginTest/Actions.cy";
import loginTestAssertions from "../../../../support/PageObjects/loginTest/Assertions.cy";
import sharedAssetions from "../../../../support/PageObjects/shared/Assertions.cy";

const loginAction = new loginTestActions();
const sharedAssertion = new sharedAssetions();
const loginAssertion = new loginTestAssertions();
/*Before({tags:'@TC-001'},()=>{
    cy.log("This is @TC-001 tag")
})

Before({tags:'@TC or @Testcase'},()=>{
    cy.log("These are @TC or @Testcase tags")
})

Before({tags:'@TC and @TC00-3'},()=>{
    cy.log("These are @TC and @TC-003 tags")
})
*/

Given('The user navigated to login page',()=>{
    loginAction.openLoginPage();
})

When('Types email in email input field',()=>{
    loginAction.typeEmailInEmailInputField("CypressUser@gmail.com");
})

When('Types wrong email in email input field',()=>{
    loginAction.typeEmailInEmailInputField("CypressUser@gmail123.com");
})

When('Types password in password input field',()=>{
    loginAction.typePasswordInPasswordInputField("test@123");
})

When('Types wrong password in password input field',()=>{
    loginAction.typePasswordInPasswordInputField("test123@123");
})

When('Clicks on login button',()=>{
    loginAction.clickOnLoginButton();
})

Then('The user will be redirected to My Account page',()=>{
    sharedAssertion.checkCurrentURLIsContain("https://magento.softwaretestingboard.com/customer/account/");
})

Then('{string} message should shown and be visible',(message)=>{
    sharedAssertion.checkMessageBarIsVisible().checkMessageBarIsContain(message);  //chaining
})

/*Then('{string} should be visible',(title)=>{
    sharedAssertion.checkPageTitleIsConatain(title);
})*/

// Then('{string} should be visible',(welcome)=>{
//     cy.get("span.logged-in").first().should("contain",welcome)
// })

// Then('{string} should be visible',(text)=>{
//     if(text === "My Account"){
//        cy.get(".page-title").should("contain",text) 
//     }
//     else if(text === "Welcome"){
//         cy.wait(2000)
//         cy.get("span.logged-in").first().should("contain",text).and("be.visible")
//     }
//     else{
//         throw new Error('No selector defined for "${text}"')
//     }
// })

Then('{string} should be visible',(text)=>{
    switch(text){
    case "My Account": 
      sharedAssertion.checkPageTitleIsConatain(text);
       break;
    case"Welcome": 
       loginAssertion.checkWelcomeIsVisible(text);
        break;
    default:
        throw new Error('No selector defined for "${text}"')
    }
})

//for scenario outline steps
When('Types {word} in email input field',(email)=>{
    loginAction.typeEmailInEmailInputField(email)
})

When('Types {word} in password input field',(password)=>{
    loginAction.typePasswordInPasswordInputField(password)
})