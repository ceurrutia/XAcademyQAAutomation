Cypress.Commands.add('register', (nombre, email, password) => {
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/register.html')
    cy.viewport('iphone-x')
    cy.get('#registerNombre').type(nombre)
    cy.get('#registerEmail').type(email)
    cy.get('#registerContraseña').type(password)

    cy.contains('button', 'Registrar').click();
    cy.contains('Registro exitoso').should('be.visible');
})


Cypress.Commands.add('login', (email, password)=>{
    cy.visit('https://ceurrutia.github.io/EducacionITfinetech/')
    cy.viewport('macbook-15')
    cy.get('#loginEmail').type(email)
    cy.get('#loginContraseña').type(password)

    cy.contains('button', 'Ingresar').click();
    cy.log('Ingreso correcto')

})




