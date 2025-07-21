/// <reference types="cypress" />

class printProductAssertions {
  printProducts() {
    cy.log(cy.get(".product-item-link"));
    //const name = $products.text()
    //cy.log(name)
    cy.get(".product-item-link").then(($products) => {
      for (let i = 0; i < $products.length; i++) {
        cy.wrap($products[i])
          .invoke("text")
          .then((productName) => {
            cy.log(productName);
          });
      }
    });
  }
}
export default printProductAssertions;
