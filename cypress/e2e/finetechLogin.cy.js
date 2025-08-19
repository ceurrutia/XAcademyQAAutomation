describe('Login de usuario', () => {
  it('Debería no permitir iniciar sesión sin contrasenia', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //inputs de login y el click
    cy.get('#loginEmail').type('cecilia.test@example.com')
    //cy.get('#loginContraseña').type('');
   
    cy.contains('button', 'Ingresar').click();
     cy.contains('La contraseña no puede estar vacía')

    // 1 seg de wait
    cy.wait(1000);
  });
});

//test con usuario registrado

describe('Login de usuario', () => {
  it('Debería permitir iniciar sesión de un usuario registrado', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //inputs de login y el click
    cy.get('#loginEmail').type('cecilia.test@example.com');
    cy.get('#loginContraseña').type('KNY22%');
   
    cy.contains('button', 'Ingresar').click();
    // 1 seg de wait
    cy.wait(1000);

    //redirige ok
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('/transacciones.html')) {
        cy.log('Login exitoso, redirigido a transacciones.html');
        cy.url().should('include', '/transacciones.html');
      } else {
        cy.contains('Email o contraseña incorrectos').should('be.visible')
      }
    })
  })
})