
describe('Running All tests in one test-case', () => {
  it('clicking "type" navigates to a new url', () => {
    const baseUrl = Cypress.config('baseUrl');
    // cy.visit('/market-insights') 
    cy.visit('/market-insights') 
    // cy.visit('https://www.kestraim.com/')
    cy.contains('Insights').click()
    
     // Step 2: Get the select element by its class or placeholder and select an option
     cy.get('select[placeholder="Category"]')
     .should('be.visible') // Assert that the select dropdown is visible
     .select('Markets in a Minute') // Select the option by its visible text
     .should('have.value', 'Markets in a Minute'); // Verify that the value is correctly selected
      cy.wait(4000);

       // Step 4: Select another option and verify
    cy.get('select[placeholder="Author"]')
    .select('Alan Zhang, CFA, FRM')
    // .should('have.value', 'Alan Zhang, CFA, FRM');
    cy.wait(4000);
    cy.scrollTo('top');

    // Step 2: Get the select element by its placeholder and select an option
    cy.get('select[placeholder="Author"]')
      .should('be.visible') // Assert that the select dropdown is visible
      .select('Kara Murphy, CFA') // Select the option by its visible text
      .should('have.value', 'Kara Murphy, CFA'); // Verify that the value is correctly selected
    cy.scrollTo('top');
    cy.wait(4000);

    // Step 3: Select another option
    cy.get('select[placeholder="Author"]')
    .select('Jonah Plummer and Ryan Chang')
    .should('have.value', 'Jonah Plummer and Ryan Chang');
    cy.scrollTo('top');
    cy.wait(2000);
    

   // Step 3: Select another option from Category
   cy.get('select[placeholder="Category"]')
     .select('Money with Murphy')
     .should('have.value', 'Money with Murphy');
     cy.wait(2000);

        // Step 4: Select another option and verify
    cy.get('select[placeholder="Author"]')
    .select('Alan Zhang, CFA, FRM')
    // .should('have.value', 'Alan Zhang, CFA, FRM');
    cy.wait(4000);
    cy.scrollTo('top');

    // Step 2: Get the select element by its placeholder and select an option
    cy.get('select[placeholder="Author"]')
      .should('be.visible') // Assert that the select dropdown is visible
      .select('Kara Murphy, CFA') // Select the option by its visible text
      .should('have.value', 'Kara Murphy, CFA'); // Verify that the value is correctly selected
    cy.scrollTo('top');
    cy.wait(4000);

    // Step 3: Select another option
    cy.get('select[placeholder="Author"]')
    .select('Jonah Plummer and Ryan Chang')
    .should('have.value', 'Jonah Plummer and Ryan Chang');
    cy.scrollTo('top');
    cy.wait(2000);


    // Step 4: Select an option with a different method, using the value
   cy.get('select[placeholder="Category"]')
   .select('Video')
   .should('have.value', 'Video');
   cy.scrollTo('top');
   cy.wait(2000);

      // Step 3: Select another option
    cy.get('select[placeholder="Author"]')
    .select('Jonah Plummer and Ryan Chang')
    .should('have.value', 'Jonah Plummer and Ryan Chang');
    cy.scrollTo('top');
    cy.wait(2000);

    // Step 4: Select another option and verify
    cy.get('select[placeholder="Author"]')
      .select('Alan Zhang, CFA, FRM')
      // .should('have.value', 'Alan Zhang, CFA, FRM');
    cy.wait(2000);

  })
})