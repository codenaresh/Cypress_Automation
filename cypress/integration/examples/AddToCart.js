describe("Add to cart", function(){

it("Launch browser", function(){

cy.visit("https://demo.nopcommerce.com/")


})

it("verify title", function(){

cy.title().should('eq','nopCommerce demo store')

})

it("Enter item and click on submit", function(){

cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")

cy.get("[type='submit']").click()

cy.get("[value='Add to cart']").click()

cy.get("[class='qty-input valid']").clear().type(2)



})





});