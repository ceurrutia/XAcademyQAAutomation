describe('Login de usuario', () => {
  it('Debería iniciar sesión de un usuario ya registrado', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //inputs de login y el click
    cy.get('#loginEmail').type('test@t.com');
    cy.get('#loginContraseña').type('Cu1040dv%');
    cy.contains('button', 'Ingresar').click();

    // 1 seg de wait
    cy.wait(1000);

    //redirige ok
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('/transacciones.html')) {
        cy.log('Login exitoso, redirigido a transacciones.html');
        cy.url().should('include', '/transacciones.html');
      } else {
        cy.contains('Email o contraseña incorrectos').should('be.visible');
      }
    });
  });
});
