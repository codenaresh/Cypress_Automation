describe("Data fetching from fixture file", function(){

    before(function(){
      
        cy.fixture('example').then(function(data){

            this.data= data
        })


    })

    it(" fixture demo test", function(){


     cy.visit("https://demo.nopcommerce.com/")

     cy.get(".ico-login").click()

     cy.get("#Email").type(this.data.email)   // email 

     cy.get("#Password").type(this.data.password)  // password





    })


    
})