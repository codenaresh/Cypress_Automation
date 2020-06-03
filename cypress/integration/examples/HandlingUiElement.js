describe("Handling UI element", function(){

it("TC001", function(){

cy.visit("https://demo.nopcommerce.com/")

cy.url().should('include','nopcommerece')  // verify url should include nocooerecee

cy.get(".ico-register").should('be.visible').should('be.enabled').click()

cy.title().should('eq','title')  // title verifycation

// radio button

cy.get("#pollanswers-1").should('be.enabled').should('be.visible').should('not.be.checked').click()


})



})