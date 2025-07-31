/// <reference types="Cypress" />

describe("This is a test suit to handle Mouse hover", function()
{
    it("this is a test case for handling mouse hover", function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//    cy.get(".mouse-hover-content").invoke("show"); // show method of jquery is used to show the hidden elements as we cant directly handle 
//                                                    mouse hover by using cypress
//    cy.contains("Top").click();

// you can also directly click on top by using force: true, this approach perform direct action on the hidden elements for that u dont need to use show method of jquery
      cy.contains("Top").click({force:true});

// check the url as it should change after clicking on top

    cy.url().should("include","#top"); // this step is to get the url and assert it 
    
})
})
