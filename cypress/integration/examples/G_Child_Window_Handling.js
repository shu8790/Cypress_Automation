/// <reference types="Cypress" />

describe("This is a test suit to handle Mouse hover", function()
{
    it("this is a test case for handling mouse hover", function()
{

// How to Handle child window 
/*
    1. first you need to access the href attribute value 
    2. then go to that href url
    3. then perform action on it
*/

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

// 1. first you need to access the href attribute value 
cy.get("#opentab").then(function(el)
{
    const url=el.prop("href");  // to get the value we use prop method
    cy.visit(url);
    cy.origin(url, ()=>
    {
        cy.get(".ml-auto a[href='about.html']").click();
    })
})


})
})