describe('Registro de usuario', () => {
  it('Debería registrar un nuevo usuario exitosamente', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //campos de registro
   cy.get('#registerNombre').type('Cecilia Urrutia');
    cy.get('#registerEmail').type('cecilia.test@example.com');
    cy.get('#registerContraseña').type('KNY121245%');

   cy.contains('button', 'Registrar').click();
   cy.contains('Registro exitoso').should('be.visible');

   const timestamp = Date.now();
   cy.get('#registerEmail').type(`cecilia${timestamp}@example.com`);
  });
});

