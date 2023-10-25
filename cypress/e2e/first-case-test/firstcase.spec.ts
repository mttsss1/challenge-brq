import { GoToCartAndCheckout, LoginInApp } from "../overallactions"
import { AssertionSuccess, FillPersonalDataAndContinue, FilterNameZToA, SelectAndAddItem } from "./firstcase.actions"

describe('Dado que preciso realizar um pedido com sucesso na plataforma', () => {

    context('Quando eu logar e adicionar um dos produtos ao carrinho de compras e prosseguir', () => {

        it('Então a compra deverá ser realizada com sucesso, sem impedimentos', () => {
    
            LoginInApp('performance_glitch_user')

            FilterNameZToA()

            SelectAndAddItem(2, 'sauce-labs-onesie')

            GoToCartAndCheckout()

            FillPersonalDataAndContinue()

            cy.get('#finish').click()

            AssertionSuccess()

        })

    })

})