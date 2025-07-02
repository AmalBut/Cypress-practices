describe('Assertions lesston', () => {
    it('visible-hidden', () => {
        cy.visit("/")
        cy.get(".logo").should("be.visible") //check if visible
        cy.get("#search").should("not.be.visible") //check if hidden
        cy.get(".counter.qty").should("be.hidden") //check if hidden
        cy.get(".counter.qty").last().should("not.be.visible") //number next to the cart icon
        cy.get(".counter.qty").first().should("exist")

    });

    it('chainers', () => {
        cy.visit("/")
        cy.get(".showcart").should("have.attr","href")
        cy.get(".copyright").should("have.css","display","block") //("have.css","css prop name","value")
        cy.contains("Hot Sellers").should("have.class","")
        cy.get("[name=q]").should("have.id","search")
    });

   it('css-assertions', () => {
        cy.visit("/")
        cy.contains("XS").click()
        cy.contains("XS").should("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","outline-color","rgb(255, 85, 1)")
    });

    it('have-value .. have-text .. contain', () => {
        cy.visit("/")
        cy.get(".info").first().should("have.text","New Luma Yoga Collection")
        cy.get(".info").first().should("contain","New Luma Yoga")

    });

    it('Verify that the default value for qty input field is 1', () => {
        cy.visit("/")
        cy.get(".product-item").first().click()
        cy.get("#qty").should("have.value","1")
    });

    it('disabled-enabled', () => {
        cy.visit("/")
        cy.get("[title=Search]").should("be.disabled")
        cy.get("#search").type("bag")
        cy.get("[title=Search]").should("be.enabled")

    });
});