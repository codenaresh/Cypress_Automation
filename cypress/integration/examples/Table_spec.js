describe("Handle Table", function(){

it("Table test", function(){
cy.visit("http://testautomationpractice.blogspot.com/")

cy.get("table[name='BookTable']").contains('td','Learn Selenium').should('be.visible')

// check value presence specif row and colum

cy.get("table[name='BookTable']>tbody>tr:nth-child(2)>td:nth-child(3)").contains('Selenium').should('be.visible')

})

})



