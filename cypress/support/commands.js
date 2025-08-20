//commands para registro y login de usuario finetech

Cypress.Commands.add('registerAndLogin', (email, password, name) => {
  cy.visit('https://ceurrutia.github.io/EducacionITfinetech/')

  // Registro de usuario
  cy.get('#registerNombre').type(name)
  cy.get('#registerEmail').type(email)
  cy.get('#registerContraseña').type(password)
  cy.contains('button', 'Registrar').click()
  cy.contains('Registro exitoso').should('be.visible')

  // Login del usuario
  cy.get('#loginEmail').type(email)
  cy.get('#loginContraseña').type(password)
  cy.contains('button', 'Ingresar').click()
  
  // Verificación de redirección
  cy.url().should('include', '/transacciones.html')
});