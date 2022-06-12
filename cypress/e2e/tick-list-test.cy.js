describe('App', () => {
  beforeEach(() => {
    cy.visit('https://tick-list-app.herokuapp.com/')
    cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'climb'}).as('climbList')
    cy.intercept('PATCH', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'patchClimb'}).as('patchClimb')
    cy.intercept('POST', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'postClimb'}).as('postClimb')

  })

  it('should load main page with title', () => {
    cy.get('nav').find('h1').contains('Tick List')
    
  })

  it('should load main page by fetching all movie posters with movie titles', () => {
    cy.get('.climb-container').should('have.length', 11)
    cy.get('.climb-container').children('div').contains('Throttle')
    cy.get('main').children('div').contains('Marys Climb').should('not.exist')
  })
})