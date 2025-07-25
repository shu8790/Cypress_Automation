describe("this is my fourth test suit", function()
{
    it("This test case is to handle Child tab", function()
{

/*     Handling child tab 
       ->                   In cypress, while handling child tab "we dont need to oepn it in different tab but, we need to open it in same parent tab
            by using invoke method to remove target attribute". then you can perform action on web elements of child tab if the domain of parent tab 
            and child tab is same.

                            If domain of parent and child tab is not same then you need to use origin method and perform the action related to particular
            child tab in it.

*/
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr","target").click(); // invoke mehod is used to call the jquery method to manupulate the DOM element 

    cy.origin("https://www.qaclickacademy.com/", ()=>
    {
        cy.get(".collapse a[href='about.html']").click();
        cy.get(".col-lg-5 h2").should("contain","QAClick Academy");
/*      
        How to find the locators if there is no class name and id then we need to move to parent element so that it cover the child element
*/
    })



})
})