Cypress.Commands.add('create', (formTitle, formAuthor, formPublishYear, formPrice) => {
    cy.visit('https://bookstorefrontend-henna.vercel.app/');
    cy.contains('button', 'Add New Book').should('be.visible').click();
    cy.get('#formTitle').type(formTitle);
    cy.get('#formAuthor').type(formAuthor);
    cy.get('#formPublishYear').type(formPublishYear);
    cy.get('#formPrice').type(formPrice);
    cy.get('button[type="submit"]').click();
});
