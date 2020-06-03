describe("Verify checkbox", function(){


it("check the chekboxex", function(){

cy.visit("http://demo.automationtesting.in/Register.html")

// check the checkboxes

cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')

cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')

cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')

// now uncheck checkboxes

cy.get("#checkbox1").uncheck().should('not.be.checked')

cy.get("#checkbox2").uncheck().should('not.be.checked')

cy.get("#checkbox3").uncheck().should('not.be.checked')

cy.get("input[type='checkbox']").check(['Cricket','Hockey'])  // check multi at a time 

})

it("Dropdown verification", function(){


cy.get("#Skills").select('Android').should('have.value','Android')


})

it("Select Multi lanuage", function(){

cy.get("#msdd").click()

cy.get(".ui-corner-all").contains('English').click()

cy.get(".ui-corner-all").contains('Dutch').click()

})


it("searchable dropdonw", function(){


cy.get("[Role='combobox']").click({force:true})

cy.get(".select2-search__field").type("ind")

cy.get(".select2-search__field").type('{enter}')



})





})