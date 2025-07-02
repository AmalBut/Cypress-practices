/// <reference types="cypress" />

describe('Selectors', () => {
    it('examples-selectors', () => {
       cy.visit("https://www.telerik.com/support/demos");
      //For Demo title
       cy.get("h1").contains("Demos");
       cy.contains("h1","Demos"); 

       //For Reporting & Docs link
       cy.contains('a', 'Reporting & Docs');
       cy.get(".NavAlt-anchor") . eq(3) //بجيب الرابط الثالث من اللينكات الموجودين فوق ز جبت كلاس مشترك و حكيت بدي الثالثة فيهم
        

       //For Web title
        cy.get("#web");
        

       //For Blogs link in footer
       cy.get(".TK-Footer-Link").contains("Blogs");
       cy.get('a[href="/blogs"]');
       cy.contains("a.TK-Footer-Link", "Blogs");
       cy.get('.TK-Footer-Link').eq(6);
        

        //for social media elements at the footer
        cy.get('ul.TK-Footer-List-Social').first(); //returns the div
        cy.get(".TK-Footer-List-Social").first().find("li")  //returns the elements

        cy. get(".TK -- Footer-Desktop .TK-Footer-List-Social").find("li");  //instead of using first
        cy. get (".TK -- Footer-Desktop .TK-Footer-List-Social").children(); //instead of using first we use desktop


    });
});