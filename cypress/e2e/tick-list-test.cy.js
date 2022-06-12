describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.intercept('GET', '', {fixture: 'movie'}).as('movie')

  })

  it('should load main page with title', () => {
    cy.get('nav').find('h1').contains('Tick List')
    
  })

})