/// <reference types="cypress" />

/*---------------------------------------------------------------------------------------------------------------------------------------------
Ator: Usuário

Pré-condição: Usuário deve estar com uma sessão do navegador aberta

Login e senha para teste: Não são necessários para este cenário de teste 

 
Cenário 2: Acessar a home page da Audaces através de pesquisa no Google

Ação 2.0: Acessar o site "www.google.com"
Resultado Esperado: O navegador deverá exibir a homepage do Google

Ação 2.0.1: Clicar no campo de pesquisa localizado no centro da tela
Resultado Esperado: O cursor do mouse deverá piscar dentro do campo de pesquisa

Ação 2.0.2: Preencher o campo de pesquisa com o texto "Audaces" e acionar o botão "Pesquisa Google"
Resultado Esperado: Usuário deverá ser redirecionado para a tela de resultados, contendo o texto pesquisado no topo da página 

Ação 2.0.3: Acionar o link com o texto "Audaces - Improve your Design"
Resultado Esperado: Usuário deverá ser redirecionado para a home page da Audaces(audaces.com)
--------------------------------------------------------------------------------------------------------------------------------------------*/

import locators from "../../support/locators/locators"

describe('Teste 2', () => {
    it('Access Google home page, search for Audaces website and access it', () => {
        cy.visit(locators.URL_GOOGLE)
        
        cy.get(locators.INPUT_SEARCH)
            .type('Audaces')
        
        cy.get(locators.BTN_GOOGLE_SEARCH)
            .eq(0)
            .click()

        cy.get(locators.BTN_LINK_AUDACES)
            .eq(1)
            .click({ force: true })

        cy.url()
            .should('eq', locators.URL_AUDACES)
    }) 
})