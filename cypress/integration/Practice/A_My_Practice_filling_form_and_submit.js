
describe("My practice test suit",function()
{
it("This is practice test case",function()
{
    // fill the form and submit it

    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
    cy.get(".menu-list").contains("Text Box").click();
    cy.get("#userName").as("FullName");
    cy.get("#userEmail").as("Email");
    cy.get("#currentAddress").as("CurrentAddress");
    cy.get("#permanentAddress").as("PermanentAddress");
    cy.get("#submit").as("SubmitButton");
    cy.get("@FullName").type("shubham");
    cy.get("@Email").type("srkale@gmail.com");
    cy.get("@CurrentAddress").type("Pune");
    cy.get("@PermanentAddress").type("Yavatmal");
    cy.get("@SubmitButton").click();

    cy.get("#name").then(function(name)
{
   const fullName =name.text();
   cy.log(fullName);
   expect(fullName).to.include("shubham");
   cy.get("#email").then(function(email)
{
   const emailText=email.text();
   cy.log(emailText);
   expect(emailText).to.include("srkale@gmail.com");
})

})
    


})
})