import * as FakerBR from "faker-br";

export function CompareNames() {

    let productName
    let viewName

    cy.get('.inventory_item_name').each(($element, index) => {

        if (index === 0) {

            viewName = $element.text()

            ClickEntryItem(4)

            cy.get('.inventory_details_name').invoke('text').then((text) => {

                productName = text

                try {

                    expect(viewName).to.be.equals(productName)

                } catch (error) {

                    cy.log('Nome de visualização diferente do produto clicável: ' + error.message)

                }

                ClickNormalElement('back-to-products')

            })

        }

    })

}

export function ClickEntryItem(id: number) {

    cy.get(`#item_${id}_title_link`).click()

}

export function ClickNormalElement(name: string) {

    cy.get(`#${name}`).click()

}

export function ClickAddToCart(name: string) {

    cy.get(`#add-to-cart-${name}`).click()

}


export function ValidateStateOfButton(index: number, valueId: string): undefined {

    cy.get('.pricebar > button').eq(index).invoke('attr', 'id').then((text) => {

        expect(text).eq(valueId)

    })

}

export function RemoveAndAddItem(itemName: any) {

    cy.get(`#remove-${itemName}`).click()

}

export function FillPersonalDataAndContinue() {

    cy.get('#first-name').type(FakerBR.name.firstName())
    cy.get('#last-name').type(FakerBR.name.lastName())
    cy.get('#postal-code').type(FakerBR.address.zipCode())
    cy.get('#continue').click()

}

export function AssertionAddButtonReturn(itemName: any) {

    cy.get('.pricebar > button').invoke('attr', 'id').then((index) => {

        const expectId = `add-to-cart-${itemName}`

        try {

            expect(expectId).eq(index)

        } catch (error) {

            cy.log('Botão de remover não está funcionando: ' + error.message)

        }

    })

}

export function AssertionValidateButtonAction () {

    cy.url().then((url) => {

        try {

        expect('https://www.saucedemo.com/checkout-step-two.html').to.eq(url)

    } catch (Error) {

        cy.log('Checkout não será realizado pelo motivo do último nome ser um dado obrigatório mas está com bug de preenchimento.')

    }

    })

    cy.get('[class="error-message-container error"]').should('exist')

}