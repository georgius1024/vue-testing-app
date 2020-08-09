// https://docs.cypress.io/api/introduction/api.html

describe('Calc.vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Opens without error', () => {
    cy.contains('h3', 'Easy calculator')
  })
  it('Contains signatures', () => {
    cy.contains('#increment', '+')
    cy.contains('#decrement', '-')
    cy.contains('#reset', 'reset')
    cy.contains('#counter', '0')
  })
  it('Click on increment increases counter', () => {
    cy.get('#increment').click()
    cy.contains('#counter', '1')
  })
  it('Click on decrement increases counter', () => {
    cy.get('#decrement').click()
    cy.contains('#counter', '-1')
  })
})
