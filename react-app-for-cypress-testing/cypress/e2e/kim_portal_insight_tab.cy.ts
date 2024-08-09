const baseUrl = Cypress.config('baseUrl');

describe('Insite KIM Portal testing', () => {

    it('clicking "base" navigates to a KIM POrtal url', () => {

        const baseUrl = Cypress.config('baseUrl');
        cy.visit('/market-insights');
        cy.wait(2000);
        cy.contains('Insights').click();

        cy.get('input[placeholder="Search"]').type('investment').should('have.value', 'investment');
        cy.get('button.sc-hyDvVc.jbWRgp').should('be.visible').click();
        cy.wait(2000);

         // Step 2: Get the button element by its class and click it
         cy.get('button.sc-kMjNwy.sc-jLVyhk.jWSYql.eIGwqu')
         .should('be.visible') // Assert that the button is visible
         .should('contain.text', 'Load More') // Ensure it has the correct text
         .click(); // Click the button
         cy.wait(3000);
         cy.scrollTo('top');

        
         cy.get('button.sc-kMjNwy.sc-jLVyhk.jWSYql.eIGwqu')
         .should('be.visible') // Assert that the button is visible
         .should('contain.text', 'Load More') // Ensure it has the correct text
         .click(); // Click the button
         cy.scrollTo('top');
         cy.wait(3000);
         
    })

    // it('Add search string and clicking "Search" for the string "investment" load data from the server', () => {
    //     const baseUrl = Cypress.config('baseUrl');
    //     cy.visit('/market-insights');
        
    // })


    // it('click Load more button on Market Insight tab and load data from the server', () => {
    //     const baseUrl = Cypress.config('baseUrl');
    //     cy.visit('/market-insights');
       
    // })


})