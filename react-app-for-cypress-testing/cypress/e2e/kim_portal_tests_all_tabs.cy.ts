
describe('Kim Portal Validating all tabs', () => {
    it('clicking "type" navigates to a new url', () => {
      const baseUrl = Cypress.config('baseUrl');
      // cy.visit('https://www.kestraim.com/')
      // cy.visit('/market-insights') 
      cy.visit('/market-insights') 
      cy.contains('Insights').click()
      cy.contains('In the News').click()
      cy.contains('Meet The Team').click() 
      cy.contains('For Advisors').click()
      cy.contains('Insights').click()
      })
  })