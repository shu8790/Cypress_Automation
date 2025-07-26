/// <reference types="Cypress" />
describe("first practice suits", function ()
{
    it("first test case for practticing web table", function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".table-display tr").each(($el, index, $list)=>
    {
        var rowData=$el.text();
        cy.log(rowData);
    })

})
})
