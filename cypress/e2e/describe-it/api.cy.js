/// <reference types = "cypress" />

describe('API Requests', () => {
    it('Requests types', () => {
        //GET request
        cy.request("https://jsonplaceholder.typicode.com/users");

        //POST request
        cy.request("POST","https://jsonplaceholder.typicode.com/posts",{"userId":10, "id":101, "title":"Test", "body":"My first request"});

        //DELETE request
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/100");

        //PUT request
        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/100",{"title":"New title"});

        cy.request("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.contain("Howell")
            expect(response.body.email).to.eq("Shanna@melissa.tv")
            expect(response.body.address.street).to.contain("Plains")
        })
    });
});