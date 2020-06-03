import LoginPage from './PageObject/loginPage'

describe("Test suite", function(){

it("Valid Logi Test", function(){

    const login= new LoginPage()

    login.visit()

    login.fillEmail("admin@yourstore.com")


    login.fillPassword("admin")

    login.clickOnSubmitBtn()

    cy.title().should('eq','Dashboard / nopCommerce administration')


    

    

    

    

    


})




})