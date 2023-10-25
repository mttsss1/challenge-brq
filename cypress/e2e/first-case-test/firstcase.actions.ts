import * as FakerBR from "faker-br";

export function FilterNameZToA() {

    cy.get('.product_sort_container').select('za')

}

export function SelectAndAddItem(itemName: number, buttonName: any) {

    cy.get(`#item_${itemName}_title_link`).click()
    cy.get(`#add-to-cart-${buttonName}`).click()

}

export function FillPersonalDataAndContinue() {

    cy.get('#first-name').type(FakerBR.name.firstName())
    cy.get('#last-name').type(FakerBR.name.lastName())
    cy.get('#postal-code').type(FakerBR.address.zipCode())
    cy.get('#continue').click()

}

export function AssertionSuccess() {

    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    cy.get('[id="checkout_complete_container"] .pony_express').should('be.visible')
    cy.get('#back-to-products').invoke('css', 'background-color').should('eq', 'rgb(61, 220, 145)')

}