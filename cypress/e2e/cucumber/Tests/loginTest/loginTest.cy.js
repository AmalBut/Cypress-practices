import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('The user navigated to login page',()=>{
    cy.visit("/customer/account/login/") 
})

When('Types email in email input field',()=>{
    cy.get("#email").type("CypressUser@gmail.com")
})

When('Types wrong email in email input field',()=>{
    cy.get("#email").type("CypressUser@gmail123.com")
})

When('Types password in password input field',()=>{
    cy.get("#pass").type("test@123")
})

When('Types wrong password in password input field',()=>{
    cy.get("#pass").type("test123@123")
})

When('Clicks on login button',()=>{
    cy.get("#send2").click()
})

Then('The user will be redirected to My Account page',()=>{
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/")
})

Then('{string} message should shown and be visible',(message)=>{
    cy.get('[role=alert]').should("contain", message).and("be.visible")
})
// Then('{string} should be visible',(title)=>{
//     cy.wait(2000)
//     cy.get(".page-title").should("contain",title)
// })

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
       cy.get(".page-title").should("contain",text) 
       break;
    
    case"Welcome": 
        cy.wait(2000)
        cy.get("span.logged-in").first().should("contain",text).and("be.visible")
        break;
    default:
        throw new Error('No selector defined for "${text}"')
    }
})

//for scenario outline steps
When('Types {word} in email input field',(email)=>{
    cy.get("#email").type(email)
})

When('Types {word} in password input field',(password)=>{
    cy.get("#pass").type(password)
})