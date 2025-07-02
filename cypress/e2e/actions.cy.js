/// <reference types="cypress" />
describe('Actions lesson', () => {
    before(()=>{
            cy.log("This is before hook")
    })

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")

    })

    it('Click command', () => {
        //first button
        cy.get("#btn1").click()

        //Zero button (covered)
        cy.get('#btn0').click("left",{force: true})  //force the click on the left of the button

        //click on multiple buttons at the same type (sequentially)
        cy.get(".btn").click({multiple:true}) //get the common class or any common thing

        //try for loop with eq()
        for (let index = 0; index < 5; index++) {
        cy.get(".btn").eq(index).click()
            
        }
  });
    it('Type command', () => {
        cy.get('[placeholder="Type your name"]').clear().type("Amal")
        cy.get('[placeholder="Type your name"]').clear().type("Amal",{delay:1000})  //write slower
        cy.get("[name=input_0]").clear({force:true}).type("amal",{force:true})
         
    });

    /*it('Search product', () => {
        cy.visit("/")
        cy.get("#search").clear().type("bag {enter}")
        cy.get("#search").clear().type("bag{enter}")
        cy.get("#search").clear().type("bag"+"{enter}")
        cy.get("#search").clear().type("shirt"+"{home}"+"{del}")
    
    });*/

    it('Select command', () => {
        cy.get("#country").select("Jordan")  //select by text
        cy.get("#country").select("palestine_country")  //select by value
        cy.get("#country").select(2)  //select by index
  
    });

    it('Check Uncheck commands', () => {
        cy.get("#Banana").check() //check the checkbox with Banana id
        cy.get("#Nuts").check().uncheck() //check then uncheck the checkbox with nuts id
        cy.get("#checkMe").check({force:true}) //covered checkbox
        cy.get("[type=checkbox]").not("#checkMe").check() //check all checkboxes except one checkbox
        cy.get("[type=checkbox]").not("#checkMe").check(['Banana','or','le']) //check specific checkboxes by sending the value in an array inside check
        cy.get("[type=checkbox]").not("#checkMe").check().check(['Fries','Nuts']) //check all but uncheck specific checkboxes by sending the value in an array inside check

        
        cy.get("#developer").check() //check the radio button , it cannot be unchecked
        cy.reload() //reload the page
        
    });

    it('Focus and Blus commands', () => {
        cy.get("#myTextField").focus()
        cy.get("#myTextField").should("have.focus")
        cy.get("#myTextField").focus().blur() //focus should be done before blur  
        cy.get("#myTextField").should("not.have.focus")  

    });

    it('trigger command', () => {
        cy.pause() // stop the cypress then i run it manually. This is used in debugging
        cy.get("#trigger_btn").trigger("mouseover")  //خلي الماوس ييجي عليها
        cy.get("#trigger_btn").trigger("mouseleave")  //بشيل الماوس ييجي عنها
        cy.get("#btn1").trigger("mousedown") //onmousedown should be setfor the element in javascript

    });

       after(()=>{
        cy.log("this is after")
    })

    afterEach(()=>{
        cy.log("this is afterEach")
    })

  
});