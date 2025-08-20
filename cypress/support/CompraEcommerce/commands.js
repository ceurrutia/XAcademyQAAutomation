Cypress.Commands.add('Botón add to cart', ()=> {
    cy.visit('https://ceurrutia.github.io/TTJS2025/')
    cy.get('.card-title', 'Kimetsu No Yaiba - Infinity Castle Movie I').click()
    cy.url().should('include', '/detail.html?id=1')
    cy.get('.add-to-cart-btn', 'Add to Cart').click()
    
})