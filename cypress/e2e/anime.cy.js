describe('Abrir la solapa reviews', ()=>{
    it('Visita la solapa Experience', ()=>{
       cy.visit('https://ceurrutia.github.io/TTJS2025/')
        //haceel click sobre Experience
        cy.contains('#navMenu', 'Experience').click();

        cy.url().then((currentUrl) => {
      if (currentUrl.includes('/testimonials.html')) {
        cy.log('Se ha redirigido a testimonials corregcatmente.html')
        cy.url().should('include', '/testimonials.html')
      } else {
        cy.log('No se dirigio, algo fallo')
      }
    });
    })
    
})


describe('Envio de email al form', ()=>{
  it('Envio de email', ()=>{
    cy.visit('https://ceurrutia.github.io/TTJS2025/')
    cy.get('[name="email"]').type('test@t.com') 
    cy.get('[name="message"]').type('Mensaje de test')
    cy.contains('button[type="submit"]', 'Send').click()

  })
   
})

//ingresa a card con detalles y clikea

describe('Ingresa a card con detalles y clikea', ()=>{
  it('Card Chainsawman', ()=>{
     cy.visit('https://ceurrutia.github.io/TTJS2025/')
     cy.contains('Chainsawman Vol. 1')
     .closest('.card')
     .find('.card-link')
     .click()

    //redirige ok
    cy.url().should('include', '/detail.html?id=2')
  })
})