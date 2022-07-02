/// <reference types="cypress" />


/*----------------------------------------------------------------------------------------------------------------------------------
Ator: Usuário

Pré-condição: Usuário deve estar com uma sessão do navegador aberta

Login e senha para teste: Não são necessários para este cenário de teste 

 
Cenário 1: Realizar download de imagem no Google

Ação 1.0: Acessar o site "www.google.com"
Resultado Esperado: O navegador deverá exibir a homepage do Google

Ação 1.0.1: Clicar no campo de pesquisa localizado no centro da tela
Resultado Esperado: O cursor do mouse deverá piscar dentro do campo de pesquisa

Ação 1.0.2: Preencher o campo de pesquisa com o texto "Sunshine" e acionar o botão "Pesquisa Google"
Resultado Esperado: Usuário deverá ser redirecionado para a tela de resultados, contendo o texto pesquisado no topo da página 

Ação 1.0.3: Acionar o botão "Imagens"
Resultado Esperado: Usuário deverá ser redirecionado para a tela de imagens
------------------------------------------------------------------------------------------------------------------------------------*/

import locators from "../../support/locators/locators"

describe('Teste 1', () => {
    it('Access Google home page and download picture', () => {
        cy.visit(locators.URL_GOOGLE)
        
        cy.get(locators.INPUT_SEARCH)
            .type('sunshine')
        
        cy.get(locators.BTN_GOOGLE_SEARCH)
            .eq(0)
            .click()

        cy.get(locators.BTN_OPTION_IMAGES)
            .eq(0)
            .click()

        cy.get(locators.BTN_SELECT_IMAGE)
            .eq(0)
            .should('be.visible')
            .click()
    }) 
})