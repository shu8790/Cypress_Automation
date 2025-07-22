// cypress -> any cypress test file is called as a spec file
/// <reference types="Cypress" />
describe("This is my first suite", function()
{
    it("this is my first test case", function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

// write a code to enter ca into input box and validate number of item in list is 4 only

    cy.get(".search-keyword").type("ca");

    cy.wait(5000);

    cy.get(".product:visible").should("have.length",4);

// write the code to validate tha there are only 4 products but without visible
cy.wait(5000);

// alias method
cy.get(".products").as("productsLocator")

cy.get(".products").find(".product").should("have.length",4);

// write code to click on add to cart button of second product
cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();


// click on the casshew product add to cart button
cy.get("@productsLocator").find(".product").each(($el, index, $list)=> {

    const vegName=$el.find("h4.product-name").text();
    console.log(vegName);

    if (vegName.includes("Cashews")) {
        
         cy.wrap($el).contains("ADD TO CART").click();
    }
})

//put assertion for text
cy.get(".brand.greenLogo").should("have.text","GREENKART"); 

// get the text of logo -> then method Use
cy.get(".brand.greenLogo").then(function(logoName)
    {
            cy.log(logoName.text());
    })

// complete the flow of app place order

cy.get("a.cart-icon").click();
cy.get("div.cart-preview.active").contains("PROCEED TO CHECKOUT").click();
cy.get("div.products").contains("Place Order").click();
    
})
})