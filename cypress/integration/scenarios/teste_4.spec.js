/// <reference types="cypress" />

/*-------------------------------------------------------------------------------------------------------------------------------------------
Ator: Usuário

Pré-condição: Usuário deve estar com uma sessão do navegador aberta

Login e senha para teste: Não são necessários para este cenário de teste 

 
Cenário 4: Validar títulos do menu Produtos e sua breve descrição

Ação 4.0: Acessar a home page da Audaces através da url "https://audaces.com/"
Resultado Esperado: Usuário deverá visualizar a home page da Audaces

Ação 4.0.1: Acionar o botão Produtos
Resultado Esperado: Usuário deverá visualizar tela contendo os seguintes títulos de produto e suas respectivas descrições:

Título: O que é Audaces 360?
Descrição: Solução completa em sistemas para fazer moda

Título: Idea
Descrição: Automatize ficha técnica e pré-custo

Título: 4D
Descrição: Desenvolva seus modelos em 4D

Título: Digiflash
Descrição: Digitalizador de moldes

Título: Moldes
Descrição: Crie moldes e gradação direto no computador

Título: Encaixe
Descrição: Máximo aproveitamento de tecido

Título: Supera
Descrição: Servidor de encaixes veloz
--------------------------------------------------------------------------------------------------------------------------------------------*/

import locators from "../../support/locators/locators"

describe('Teste 4', () => {
    it('Should access Audaces website and validate product names and descriptions', () => {
        cy.visit('https://audaces.com/')

        cy.get(locators.BTN_PRODUCTS)
            .first()
            .click({ force: true })

        const productLinks = [
            {
                link: locators.BTN_AUDACES_360,
                linkTitle: 'O que é Audaces 360?',
                titlePosition: '0',
                descriptionPosition: '0',
                description: 'Solução completa em sistemas para fazer moda'
            },
            {
                link: locators.BTN_IDEA,
                linkTitle: 'Idea',
                titlePosition: '1',
                descriptionPosition: '1',
                description: 'Automatize ficha técnica e pré-custo'
            },
            {
                link: locators.BTN_4D,
                linkTitle: '4D',
                titlePosition: '2',
                descriptionPosition: '2',
                description: 'Desenvolva seus modelos em 4D'
            },
            {
                link: locators.BTN_DIGIFLASH,
                linkTitle: 'Digiflash',
                titlePosition: '4',
                descriptionPosition: '4',
                description: 'Digitalizador de moldes'
            },
            {
                link: locators.BTN_MOLDES,
                linkTitle: 'Moldes',
                titlePosition: '5',
                descriptionPosition: '5',
                description: 'Crie moldes e gradação direto no computador'
            },
            {
                link: locators.BTN_ENCAIXE,
                linkTitle: 'Encaixe',
                titlePosition: '6',
                descriptionPosition: '6',
                description: 'Máximo aproveitamento de tecido'
            },
            {
                link: locators.BTN_SUPERA,
                linkTitle: 'Supera',
                titlePosition: '7',
                descriptionPosition: '7',
                description: 'Servidor de encaixes veloz'
            },
        ]

        productLinks.map(option => {
            cy.get(option.link)
                .should('be.visible')

            cy.get(locators.TXT_PRODUCTS_NAMES)
                .eq(option.titlePosition)
                .should("have.text", option.linkTitle)

            cy.get(locators.TXT_PRODUCTS_DESCRIPTIONS)
                .eq(option.descriptionPosition)
                .should('have.text', option.description)
        })
    }) 
})