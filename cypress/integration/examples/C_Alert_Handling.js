describe("This is my third test suit", function()
{
    it("This is test case to handle alerts", function()
{
    //Handling alerts in cypress

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click(); // you just need to find the alert button and click on it cypress will itself handle it.


    cy.get("#confirmbtn").click(); // you just need to find the alert button and click on it cypress will itself handle it.

    //      Getting text of alert popup

    cy.on("window:alert", (str)=>
    {
        expect(str).to.equal("Hello , share this practice page and share your knowledge");
    })

    cy.on("window:confirm",(str)=>
    {
        expect(str).to.equal("Hello , Are you sure you want to confirm?");
    })

})
})