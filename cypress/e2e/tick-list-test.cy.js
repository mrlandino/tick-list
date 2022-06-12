describe('App', () => {
  beforeEach(() => {
    cy.visit('https://tick-list-app.herokuapp.com/')
    cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'climbList'}).as('climbList')
    cy.intercept('PATCH', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'patchClimb'}).as('patchClimb')
    cy.intercept('POST', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'postClimb'}).as('postClimb')
    cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', 'https://tick-list-app.herokuapp.com//error')
  })

  it('should load main page with title', () => {
    cy.get('nav').find('h1').contains('Tick List')
    
  })

  it('should load main page by fetching all climbs on tick list', () => {
    cy.get('.climb').should('have.length', 11)
    cy.get('a').children('div').contains('Throttle')
    cy.get('a').children('div').contains('Marys Climb').should('not.exist')
  })

  // it('should relocate to error screen if api call fails', () => {
  //   cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', 'https://tick-list-app.herokuapp.com/error')
  //   cy.url().should('include', '/error')
  //   // cy.get('main').find('h3').contains("Something went wrong, Please try again later.")

  // })

  it('should be able to click on the drop downs to filter a climb', () => {
    cy.get('.dropdown-filter-input1').select('completed')
    cy.get('.search-button').click()
    cy.get('.climb').should('have.length', 7)
  })
})