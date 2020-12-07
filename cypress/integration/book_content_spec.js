describe('Book content App', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Visits a main page', () => {
    cy.contains('Book content');
    cy.contains('Chapters: 1 (completed: 0)');
    cy.contains('Subsections: 2 (completed: 1)');
    cy.contains('Readiness: 50.0 %');
  });

  it('Adding a chapter', () => {
    cy.get('input[data-testid="add-chapter-input"]').type('Second chapter').should('have.value', 'Second chapter');
    cy.contains('Add chapter').click();
    cy.contains('Second chapter');
    cy.contains('Chapters: 2 (completed: 0)');
  });

  it('Adding a subsection', () => {
    cy.get('input[data-testid="chapter-0-add-subsection-input"]').type('Subsection 3').should('have.value', 'Subsection 3');
    cy.get('button[data-testid="chapter-0-add-subsection-btn"]').click();
    cy.contains('Subsection 3');
    cy.contains('Subsections: 3 (completed: 1)');
  });

  it('Toggle a subsection as uncompleted', () => {
    cy.get('input[data-testid="chapter-0-subsection-0-checkbox"]').click();
    cy.contains('Subsections: 2 (completed: 0)');
  });

  it('Toggle a subsection as completed', () => {
    cy.get('input[data-testid="chapter-0-subsection-1-checkbox"]').click();
    cy.contains('Chapters: 1 (completed: 1)');
    cy.contains('Subsections: 2 (completed: 2)');
  });

  it('Set filter SHOW_COMPLETED', () => {
    cy.get('[data-testid="show-completed"]').click();
    cy.contains('Subsection 1');
    cy.get('Subsection 2').should('not.exist');
  });

  it('Set filter SHOW_UNCOMPLETED', () => {
    cy.get('[data-testid="show-uncompleted"]').click();
    cy.contains('Subsection 2');
    cy.get('Subsection 1').should('not.exist');
  });
});
