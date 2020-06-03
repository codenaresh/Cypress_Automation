class LoginPage {

    visit() {

        cy.visit("https://admin-demo.nopcommerce.com/login")

    }

    fillEmail(value) {

        const email = cy.get("#Email")

        email.clear()

        email.type(value)

        return this



    }

    fillPassword(value) {

        const password = cy.get("#Password")

        password.clear()


        password.type(value)

        return this



    }



    clickOnSubmitBtn() {


        const button=cy.get("[type='submit']")

        button.click()
    }



}

export default LoginPage