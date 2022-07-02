/// <reference types="cypress" />

/*--------------------------------------------------------------------------------------------------------------------------------------------------
Ator: Usuário

Pré-condição: Usuário deve acessar a home page da Audaces(https://audaces.com/) e acionar o botão "Entrar" para ter acesso a tela de Login 

Login e senha para teste: Não são necessários para este cenário de teste 


 
Cenário 3: Validar redefinição de senha

Ação 3.0: Acionar o botão "Clique aqui"
Resultado Esperado: Usuário deverá ser redirecionado para a tela "Esqueceu sua senha?"

Ação 3.0.1: Preencher o campo de texto com um endereço de e-mail válido e acionar o botão "Recuperar minha senha"
Resultado Esperado: Usuário deverá visualizar tela contendo a mensagem "Um código de recuperação de senha foi enviado para seu e-mail."



Cenário 3.1: Validar a exibição de mensagens para campos obrigatórios da tela de Login 

Ação 3.1.0: Não preencher os campos "E-mail" e "Senha" e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Nome de usuário é necessária"

Ação 3.1.1: Preencher apenas o campo "Senha" com um valor válido e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Nome de usuário é necessária"

Ação 3.1.2: Preencher apenas o campo "E-mail" com um valor válido e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Senha é necessária"




Cenário 3.2: Validar a exibição de mensagens para preenchimento incorreto dos campos da tela de Login

Ação 3.2.0: Preencher os campos "E-mail" e "Senha" com os valores "a" e "a" e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Nome de usuário ou senha inválido"

Ação 3.2.1: Preencher os campos "E-mail" e "Senha" com os valores "a.com" e "1234" e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Nome de usuário ou senha inválido"

Ação 3.2.2: Preencher os campos "E-mail" e "Senha" com os valores "a@a" e "1234" e acionar o botão "Entrar"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Nome de usuário ou senha inválido"



Cenário 3.3: Validar exibição de mensagem de erro para não preenchimento do campo "Endereço de e-mail" em "Esqueceu sua senha?" 

Ação 3.3.0: Não preencher o campo  "Endereço de e-mail" e acionar o botão "Recuperar minha senha"
Resultado Esperado: Usuário deverá visualizar mensagem de erro contendo o texto "Este campo é obrigatório"

---------------------------------------------------------------------------------------------------------------------------------------------------*/

import locators from "../../support/locators/locators"

beforeEach(() => {
    cy.visit(locators.URL_AUDACES)
    
    cy.get(locators.BTN_ENTER_HOME)
        .eq(1)
        .click({ force: true })

    cy.url()
        .should('contain', locators.URL_LOGIN_PAGE)
})

describe('Teste 3 - Login view - Success Scenarios', () => {
    
    it('Should validate password redefinition', () => {
        cy.get(locators.URL_FORGOT_PASSWORD)
            .should('be.visible')
            .click({ force: true })

        cy.get(locators.INPUT_EMAIL_RECOVERY_PASSWORD)
            .type(Cypress.env("EMAIL_ADDRESS"))

        cy.get(locators.BTN_LOGIN)
            .click({ force: true })

        cy.get(locators.MSG_SUCCESS_RECOVERY_PASSWORD)
            .should('be.visible')
            .and('have.text', 'Um código de recuperação de senha foi enviado para seu e-mail.')
    })
})

describe('Teste 3 - Login view - Alternative Scenarios', () => {
    it('Should validate mandatory fields messages display', () => {
        
        cy.get(locators.BTN_LOGIN)
            .click({ force: true })

        cy.get(locators.ERROR_MSG_LOGIN)
            .should('be.visible')
            .and('contain', 'Nome de usuário é necessária')

        cy.reload()

        cy.get(locators.INPUT_PASSWORD)
            .type(Cypress.env("PASSWORD"))

        cy.get(locators.BTN_LOGIN)
            .click({ force: true })

        cy.get(locators.ERROR_MSG_LOGIN)
            .should('be.visible')
            .and('contain', 'Nome de usuário é necessária')

        cy.reload()

        cy.get(locators.INPUT_LOGIN)
            .type(Cypress.env("EMAIL_ADDRESS"))

        cy.get(locators.BTN_LOGIN)
            .click({ force: true })

        cy.get(locators.ERROR_MSG_LOGIN)
            .should('be.visible')
            .and('contain', 'Senha é necessária')
    })
    
    
    it('Should validate wrong forms of filling fields for login', () => {
        
        const wrongFormsOfFillingLogin = [
            
            {
                login: 'a',
                password: 'a',
            },
            {
                login: 'a.com',
                password: '1234',
            },
            {
                login: 'a@a',
                password: '1234',
            },
        ]
        
        wrongFormsOfFillingLogin.map(wrongFilling => {
            
            cy.get(locators.INPUT_LOGIN)
                .type(wrongFilling.login)

            cy.get(locators.INPUT_PASSWORD)
                .type(wrongFilling.password)

            cy.get(locators.BTN_LOGIN)
                .click({ force: true })

            cy.get(locators.ERROR_MSG_LOGIN)
                .should('be.visible')
                .and('contain', 'Nome de usuário ou senha inválido')

            cy.get(locators.INPUT_LOGIN)
                .clear()

            cy.get(locators.INPUT_PASSWORD)
                .clear()
        }) 
    })

    it('Should validate error message for not filling password redefinition input field', () => {
        cy.get(locators.URL_FORGOT_PASSWORD)
            .should('be.visible')
            .click({ force: true })

        cy.get(locators.BTN_LOGIN)
            .click({ force: true })

        cy.get(locators.MSG_ERROR_RECOVERY_PASSWORD)
            .should('be.visible')
            .and('have.text', 'Este campo é obrigatório')
    })
})

