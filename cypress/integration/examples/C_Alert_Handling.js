describe("This is my third test suit", function()
{
    it("This is test case to handle alerts", function()
{
    //Handling alerts in cypress

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click(); // you just need to find the alert button and click on it cypress will itself handle it.


    cy.get("#confirmbtn").click(); // you just need to find the alert button and click on it cypress will itself handle it.



/*    Getting text of alert popup -> to get the text present on alert pop up we need to use 'on' method 
                                     which accepts the 'browser events and function to be executed after
                                     event as parameter' 
*/      
   cy.on("window:alert", (str)=>
    {
        expect(str).to.equal("Hello , share this practice page and share your knowledge");
        // above it the assertion for string in mocha framework
    })

    cy.on("window:confirm",(str)=>
    {
        expect(str).to.equal("Hello , Are you sure you want to confirm?");
    })
})
})