
describe("cypress UI handling",function()
{
    it("Check box handling Test",function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // click on check box and assest that it is checked

    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");

    // unchecking chekbox
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // selecting multiple checked box
    cy.get("input[type='checkbox'").check(['option1','option2']);

//========================================================================

    // Static Dropdown

    cy.get("select").select("Option1").should("have.value","option1");

//================================================================================

// Handling Dynamic dropdown

cy.get("#autocomplete").type("ind");
cy.get("#ui-id-1").should("be.visible").find("li.ui-menu-item div").each(($el,index,$list)=>
{
    const countryName=$el.text();
    

    if(countryName==="India")
    {
       cy.wait(5000);
        cy.wrap($el).click();
    }

})

// handling hidden and visible elements

cy.get("#displayed-text").should("be.visible");
cy.get("#hide-textbox").click();
cy.get("#displayed-text").invoke("show").should("be.visible");
// cy.get("#displayed-text").should("not.be.visible");
// cy.get("#show-textbox").click();
// cy.get("#displayed-text").should("be.visible");

// handling radio button

cy.get("input[value='radio2']").check().should("be.checked").and("have.value",'radio2');


})
})