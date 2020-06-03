describe("My test suite", function () {

    before(function(){
      
        cy.log("This is set up")

    })

    after(function(){

        cy.log("This is tear down up")
    })

    beforeEach(function(){

        cy.log("This is login block")


    })

    afterEach(function(){
        
        cy.log("This is log out block")


    })

    it("searching", function () {

        cy.log("this is searching test")

    })

    it(" advance searching", function () {

        cy.log("this is  advance searching test")

    })

    it(" listing product", function () {

        cy.log("this is listing product test")

    })



})