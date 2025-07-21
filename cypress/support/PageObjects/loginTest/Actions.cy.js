/// <reference types="cypress" />

class loginTestActions{

    openLoginPage(){
        cy.visit("/customer/account/login/");
        return this;
    }

    typeEmailInEmailInputField(email){
        cy.get("#email").type(email)
        return this;
    }

    typePasswordInPasswordInputField(password){
        cy.get("#pass").type(password)
        return this;
    }

    clickOnLoginButton(){
        cy.get("#send2").click()
        return this;
    }
}
export default loginTestActions;