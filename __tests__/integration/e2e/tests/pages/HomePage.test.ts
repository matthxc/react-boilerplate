describe('Home Page', () => {
  it('Navigate to Home Page and check the content', () => {
    cy.visit('/');

    // Assert
    cy.findByText('Home page').should('exist');
    cy.findByText('Hello world').should('exist');
  });
});
