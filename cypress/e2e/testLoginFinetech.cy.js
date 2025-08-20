describe('Login with invalid credentials', () => {
    it('User must be login and show alert red', ()=>{
        cy.fixture('user').then((badCredentials)=> {
            cy.login(badCredentials.email, badCredentials.password)
        })
        cy.contains('Email o contraseña incorrectos').should('be.visible')
        cy.log('No ha accedido, credenciales incorrectas')
    })
})

describe('Login with valid credentials', () => {
    it('User must be login and redirect transaction page', ()=>{
        cy.fixture('existingUser').then((existingUser)=> {
            cy.login(existingUser.email, existingUser.password)
        })
        cy.wait(5000)
        // redirija ok
        cy.url().should('include', '/transacciones.html')
        cy.log('Accede correctamente a transacciones')
    })
})