describe("Alias", function(){

it("VErify Alias", function(){

    // Find the dropdown-menu with the given class name
    cy.get('.dropdown-menu')
    
    // Find element(s) with the given data attribute
    cy.get('[data-test-id="test-example"]')
    
    // Create and use an alias
    cy.get('button[type=submit]').as('submitBtn')
    //...hack hack hack...
    cy.get('@submitBtn')     // later retrieve the submitBtn


})


})