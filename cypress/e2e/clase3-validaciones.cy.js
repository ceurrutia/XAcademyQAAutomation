describe('Formulario redirect UI',()=>{
    it ('Form con validaciones',()=>{
        cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
        cy.get('[data-cy="nav-interacciones-ui"]').click()

        cy.contains('button[type="submit"]', 'Submit').should('be.enabled')
        cy.get('[data-cy="submit-button"]').click()
        cy.get('[data-cy="terms-error"]').should('be.visible')
  })
})