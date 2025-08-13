describe('Crear nuevo libro', ()=> {
  it('pases', ()=> {
    cy.visit('https://bookstorefrontend-henna.vercel.app/')

    cy.contains('button', 'Add New Book').click();
    //campos de crear

   cy.get('#formTitle').type('La gata Sumichiko');
    cy.get('#formAuthor').type('Keisuske Satoh');
    cy.get('#formPublishYear').type('2025');
     cy.get('#formPrice').type('245.99');
    

   cy.contains('button', 'Create').click();
   cy.contains('The book was created successfully!').should('be.visible');
  })
})

//correr un solo test con run
//npx cypress run --spec "cypress/e2e/bookstore.cy.js"

describe('Upload libro existente', ()=>{
  it('passes', ()=>{
     cy.visit('https://bookstorefrontend-henna.vercel.app/')

     //si contiene
    cy.contains('td', 'La gata Sumichiko')
      .parent('tr') // Subir al <tr> de la fila
      .within(() => {
        cy.contains('Edit').click()
      })

      cy.wait(500)

      //cambio el autor
      cy.get('input[name="author"]').clear().type('Keisuke Sato Modificado')
      cy.contains('button', 'Save Changes').click()

       cy.contains('td', 'La gata Sumichiko')
      .parent('tr')
      .within(() => {
        cy.contains('td', 'Keisuke Sato Modificado')
      })
  })
})

