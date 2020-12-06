describe('Book content App', function () {
  it('Visits a main page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Book content');
    cy.get('input[data-testid="add-chapter-input"]').type('Second chapter').should('have.value', 'Second chapter');
    cy.contains('Add chapter').click();
  });
});
