
describe('template spec', () => {
  it('verifyTitle', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.title().should('eq', 'Swag Labs')
    cy.screenshot()
  })

  it('verifyTitle1', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.log('Cypress logging ')
    cy.title().should('eq', 'Demo Web Shop')
    cy.screenshot()
  })
})

