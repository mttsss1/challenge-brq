import { GoToCartAndCheckout, LoginInApp, TokenHandling } from "../overallactions"
import { AssertionAddButtonReturn, AssertionValidateButtonAction, ClickAddToCart, CompareNames, FillPersonalDataAndContinue, RemoveAndAddItem, ValidateStateOfButton } from "./secondcase.actions"

describe('Dado que preciso realizar uma compra com sucesso na plataforma', () => {


    beforeEach(() => {

        TokenHandling()
        cy.visit(`${Cypress.env('BASE_URL')}`)

    })

    context('Quando eu logar e adicionar um dos produtos ao carrinho de compras e prosseguir', () => {

        it('Então a compra deverá ser realizada com sucesso, sem impedimentos', () => {

            LoginInApp('problem_user')

            CompareNames()

            ClickAddToCart('sauce-labs-backpack')

            ValidateStateOfButton(0, 'remove-sauce-labs-backpack')

            RemoveAndAddItem('sauce-labs-backpack')

            AssertionAddButtonReturn('sauce-labs-backpack')

            GoToCartAndCheckout()

            FillPersonalDataAndContinue()

            AssertionValidateButtonAction()

        })

    })

})