// cypress -> any cypress test file is called as a spec file
/// <reference types="Cypress" />
describe("This is my first suite", function()
{
    it("this is my first test case", function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// visit() method is used to open an url

// write a code to enter ca into input box and validate number of item in list is 4 only

    cy.get(".search-keyword").type("ca"); // get method is used to get the elment present on web page

    cy.wait(5000);

    cy.get(".product:visible").should("have.length",4); 
// should() method is used to perform assertion in this case if u want to validate the length of elements collection,
// you nedd to use should("have.length",4)

// write the code to validate tha there are only 4 products but without visible
cy.wait(5000);

// alias method - as("")this method is used store web element locator as variable 
// usage : 1. You want to reuse the same element multiple times in your test
//          2. You want to make your code cleaner and more readable
cy.get(".products").as("productsLocator")

cy.get(".products").find(".product").should("have.length",4);
// find() : The .find(selector) command is used to search for descendant elements
// (i.e., children, grandchildren, etc.) within a previously selected element.
// usage : Search only within .products, not the whole DOM


// write code to click on add to cart button of second product
cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
// eq(index): picks the element at the given index from a group of matched elements.
//  usage: it is used when we want to select specific element, at code level not DOM level
// contains(text) : contains("text") finds a element that has the given text
//  usage : When you need to locate a button or label by visible text

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