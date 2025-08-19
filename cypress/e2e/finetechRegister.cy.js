describe('Registro de usuario y login subsiguiente', () => {
  it('Debería registrar un nuevo usuario exitosamente', () => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/');

    //campos de registro
    cy.get('#registerNombre').type('Cecilia Urrutia')
    cy.get('#registerEmail').type('cecilia.test@example.com')
    cy.get('#registerContraseña').type('KNY121245%')

    cy.contains('button', 'Registrar').click()
    cy.contains('Registro exitoso').should('be.visible')

    //inputs de login y el click para ingresar
    cy.get('#loginEmail').type('cecilia.test@example.com')
    cy.get('#loginContraseña').type('KNY121245%')
   
    cy.contains('button', 'Ingresar').click()
    cy.url().should('include', '/transacciones.html')
    cy.log('Login exitoso, redirigido a /transacciones.html')

  })
})



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


  // REPORTAR: EL SISTEMA PERMITE REGISTRO CON EMIAL NO VALIDO, TEST FALLA
  describe('Registro de usuario con email no valido', ()=> {
    it('Debe mostrar error si el email no tiene un formato correcto', ()=> {
      cy.visit('https://ceurrutia.github.io/EducacionITfinetech/')

      cy.get('#registerNombre').type('Cecilia Urrutia')
      cy.get('#registerEmail').type('tester34')
      cy.get('#registerContraseña').type('KNNH1120&')

      cy.contains('button', 'Registrar').click();
      cy.contains('Email o contraseña incorrectos').should('be.visible')
    })
    
  })

