export function LoginInApp(username: any) {

    cy.get('#user-name').type(username)
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

}

export function TokenHandling() {

    cy.intercept('https://events.backtrace.io/api/summed-events/submit?universe=UNIVERSE&token=TOKEN', {
        statusCode: 201,
        body: ''
    })

    cy.intercept('https://events.backtrace.io/api/unique-events/submit?universe=UNIVERSE&token=TOKEN', {
        statusCode: 201,
        body: ''
    })

}

export function GoToCartAndCheckout () {

    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

}