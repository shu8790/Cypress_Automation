/// <reference types="cypress" />

import 'cypress-iframe'

describe("this is my eight test suit", function()
{
    it("this is test case to  handle iframe", function()
{
/*
    Steps to  handle the iframe
    1. install the iframe plugins by using command npm install -D cypress-iframe
    2. improt cypress-iframe package to the test case
    3. then give the refrence types at the top of test suits to get iframe method auto suggestion
    4. then load the iframe by using method frameLoaded with iframe locator as parameter
    5. then while performing any action on iframe elements at start use iframe() method
*/

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(1000);
    cy.iframe().find(".pricing-title").should("have.length",2);

})
})