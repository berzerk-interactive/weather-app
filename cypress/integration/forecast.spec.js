/// <reference types="cypress" />

describe('Example Weather App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Has Location Input', () => {
    cy.get('input').should('exist')
  })
  it('Has Get Weather Button', () => {
    cy.contains('Get Weather').should('exist')
  })

  it('can get forecast', () => {
    cy.get('input').type(`Denver {enter}`)
    cy.get('#weatherlist li')
      .should('have.length', 40)
  })
})
