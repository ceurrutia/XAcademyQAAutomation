describe('Direccion a UI',()=>{
    it ('Direction a UI',()=>{
        cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
        cy.get('[data-cy="nav-interacciones-ui"]').click()
        cy.get('[data-cy="email-input"]').type('Cualquiera@gmial.com')
  })
})