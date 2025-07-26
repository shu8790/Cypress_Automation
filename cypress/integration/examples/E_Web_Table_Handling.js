/// <reference types="Cypress" />
describe("This is my fifth test suit", function()
{
    it("This is the test case to handle web table", function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    // we have to read the table in a such a way that if course title match with the provided one
    // then find the price of it  

    // step 1 -> find the all the data of course column and iterate through it and match the title

    cy.get(".table-display td:nth-child(2)").each(($el, index, $list)=>
    {
        var courseName=$el.text();
        if(courseName.includes("Python"))
        {
              
              var coursePrice=cy.get(".table-display td:nth-child(2").eq(index).next().then(function(price) 
        // why we use then method? -> because cypress comand like cy.get() return the chainable object and not dom elements so we can't work with them 
        // for that first we need to get the DOM element so that we can access text and other things therefore we need to use then() method
            {
                var coursePrice=price.text();
                cy.log(courseName+" -> "+coursePrice);
                expect(coursePrice).to.equal("25");
            })
        }
    })
})

})