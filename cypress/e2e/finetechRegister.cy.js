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


describe('Registro de nuevo usuario con password de 2 caracteres', ()=>{
    it('No debería registrar un nuevo usuario y mostrar cartel', () => {
       cy.visit('https://ceurrutia.github.io/EducacionITfinetech/')

  //campos de registro
   cy.get('#registerNombre').type('Cecilia Urrutia')
    cy.get('#registerEmail').type('tester34@example.com')
    cy.get('#registerContraseña').type('ma')

   cy.contains('button', 'Registrar').click();

    // 1 seg de wait
    cy.wait(1000);

   cy.contains('La contraseña debe tener al menos 8 caracteres y contener una mayúscula, un número y un carácter especial').should('be.visible')
    })
  })

