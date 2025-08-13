describe('Abre pestania Bookstore digital', () => {
  it('Deberia hacer click sobre la pestania Digital Books y direccionar ', () => {
    cy.visit('https://bookstorefrontend-henna.vercel.app')
    //click
    cy.contains('.nav-link', 'Digital Books').click();
    cy.url().should('include', 'bookstorefrontend-henna.vercel.app');
  })
   
})
