describe('Direccion a UI',()=>{
    it ('Direction a UI',()=>{
        cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
        cy.get('[data-cy="nav-interacciones-ui"]').click()
        cy.get('#username').type('ceciur')
        cy.get('input[type="email"]').type('mimail@g.com')
        cy.get('#password').type('123456')
        cy.get('#confirmPassword').type('123456')
        cy.get('#role' ).type('Developer')
        cy.get('input[type="checkbox"]').check()
        cy.contains('button[type="submit"]', 'Submit').click()
  })
})