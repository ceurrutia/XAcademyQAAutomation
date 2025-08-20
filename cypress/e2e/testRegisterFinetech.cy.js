describe('Register with valid credentials', () => {
    it('User must be register and redirect automatically to login page', ()=>{
        cy.fixture('user').then((user) =>{
            cy.register(user.nombre, user.email, user.password)
        })
        
        cy.contains('Registro exitoso').should('be.visible')
        cy.url().should('include', '/index.html')
        cy.log('Ha sido redirigido correctamente a login luego del login')
        
    })
})