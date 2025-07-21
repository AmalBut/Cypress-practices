/// <reference types="cypress" />

class sharedAssetions{

    checkCurrentURLIsContain(url){
        cy.url().should("eq",url);
        return this;
    }

    checkPageTitleIsConatain(title){
        cy.get(".page-title").should("contain",title)
        return this;
    }

    checkMessageBarIsContain(message){
        cy.get('[role=alert]').should("contain", message);
        return this;
    }

    checkMessageBarIsVisible(){
        cy.get('[role=alert]').should("be.visible");
        return this;
    }
}
export default sharedAssetions;