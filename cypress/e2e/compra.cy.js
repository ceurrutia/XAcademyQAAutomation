describe('Ingresa y simula compra completa de manga', ()=>{
  it('Debería simular la compra del manga Kimetsu No yaiba', ()=>{
     cy.visit('https://ceurrutia.github.io/TTJS2025/')
     cy.contains('Kimetsu No Yaiba - Infinity Castle Movie I')
     .closest('.card')
     .find('.card-link')
     .click()

    //redirige ok
    cy.url().should('include', '/detail.html?id=1')

    //preparar la alert que va a tener
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
    })
    
    // //click en agregar a carrito
    cy.get('.btn.add-to-cart-btn').click()

    //verifica la alert
      cy.get('@windowAlert').should('be.calledWith', 'Kimetsu No Yaiba - Infinity Castle Movie I added to your cart.')

    cy.visit('https://ceurrutia.github.io/TTJS2025/cart.html')
    cy.contains('.btn', 'Buy').click()

  })
})