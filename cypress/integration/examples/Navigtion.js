describe("Handle navigation", function(){

it("TC001", function(){

cy.visit("https://demo.nopcommerce.com/")

cy.title().should('eq','nopCommerce demo store')  // home pag

cy.get('.ico-register').contains('Reg').click()  // conatisn to check wheather its right element

cy.title().should('eq','nopCommerce demo store. Register')// ereg pag

cy.go('back')

cy.title().should('eq','nopCommerce demo store')  // home page

cy.go('forward')

cy.title().should('eq','nopCommerce demo store. Register')// Reg pag

cy.go(-1)  // equal to back

cy.title().should('eq','nopCommerce demo store')  // home page







})



})