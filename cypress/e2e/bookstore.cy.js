describe('Crear nuevo libro', {testIsolation : false} ,()=> {
  it('Crea un nuevo registro', ()=> {
    cy.visit('https://bookstorefrontend-henna.vercel.app/')

    cy.contains('button', 'Add New Book').click()
    //campos de crear
    cy.get('#formTitle').type('Kimetsu No Yaiba, Vol 8')
    cy.get('#formAuthor').type('Gotoge Kyotaro')
    cy.get('#formPublishYear').type('2025')
    cy.get('#formPrice').type('245.99')
    

   cy.contains('button', 'Create').click()
   cy.contains('The book was created successfully!').should('be.visible')
  })
})


describe('Create new Book', () => {
    it('User must be create a new book', ()=>{
       cy.fixture('bookstoreCreate').then((book) => {
            cy.create(book.Title, book.Author, book.PublishYear, book.Price)
                .then(() => { 
                    cy.contains('The book was created successfully!').should('be.visible')
                    cy.log('El libro ha sido creado correctamente')
                    cy.wait(1000)
                });
        });
    });
})

//correr un solo test con run
//npx cypress run --spec "cypress/e2e/bookstore.cy.js"

describe('Upload libro existente', ()=>{
  it('Deberia modificar el registro Kimetsu No Yaiba', ()=>{
     cy.visit('https://bookstorefrontend-henna.vercel.app/')

     //si contiene
    cy.contains('td', 'Kimetsu No Yaiba, Vol 8')
      .parent('tr') // Subir al <tr> de la fila
      .within(() => {
        cy.contains('Edit').click()
      })

      cy.wait(500)

      //cambio el autor
      cy.get('input[name="author"]').clear().type('Gotoge Kyotaro Modify')
      cy.contains('button', 'Save Changes').click()

       cy.contains('td', 'Kimetsu No Yaiba, Vol 8')
      .parent('tr')
      .within(() => {
        cy.contains('td', 'Gotoge Kyotaro Modify')
      })
  })
})

describe('eliminar registro creado', ()=>{
  it ('Debería eliminar un registro existente de la tabla', ()=>{
     cy.visit('https://bookstorefrontend-henna.vercel.app/')

     //si contiene
    cy.contains('td', 'Kimetsu No Yaiba, Vol 8')
      .parent('tr')
      .within(() => {
        //clickea en el delete
        cy.contains('Delete').click()
      })

       //vamos a la confirmacion
       cy.contains('Confirm Delete').should('be.visible')

       //buscar en el modal
       cy.get('button.btn.btn-danger')
        .contains(/^Delete$/)
        .should('be.visible')
        .and('not.be.disabled')
        .click({ force: true })
        
        //va de nuevo a la home
        cy.visit('https://bookstorefrontend-henna.vercel.app/')
        //no debe existir mas el book
        cy.contains('td', 'Kimetsu No Yaiba, Vol 8').should('not.exist')
      })
  })
