describe('Formulario redirect UI',()=>{
    it ('Form sin validaciones',()=>{
        cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
        cy.get('[data-cy="nav-interacciones-ui"]').click()
        cy.get('#username').type('ceciur')
        cy.get('input[type="email"]').type('mimail@g.com')
        cy.get('#password').type('123456')
        cy.get('#confirmPassword').type('123456')
        cy.get('[data-cy="role-select"]' ).select('Developer')

        cy.get('[data-cy="notification-email"]').check()
        cy.get('[data-cy="notification-sms"]').check()
        cy.get('[data-cy="notification-push"]').check()

        cy.contains('accept the terms').click()
        cy.contains('button[type="submit"]', 'Submit').click()
  })
})