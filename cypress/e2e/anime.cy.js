describe('Abrir la solapa reviews', ()=>{
    it('Visita la solapa Experience', ()=>{
       cy.visit('https://ceurrutia.github.io/TTJS2025/')
        //haceel click sobre Experience
        cy.contains('#navMenu', 'Experience').click();

        cy.url().then((currentUrl) => {
      if (currentUrl.includes('/testimonials.html')) {
        cy.log('Se ha redirigido a testimonials corregcatmente.html');
        cy.url().should('include', '/testimonials.html');
      } else {
        cy.log('No se dirigio, algo fallo')
      }
    });
    })
    
})