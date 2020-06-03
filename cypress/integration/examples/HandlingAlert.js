describe("Handle Alert", function(){

it("Alert", function(){

    cy.visit("https://demo.nopcommerce.com/")

    cy.get("#small-searchterms").click()

    cy.on('window:alert',function(str){

        expect(str).to.equal('Please enter some search keyword')

    })



})



})