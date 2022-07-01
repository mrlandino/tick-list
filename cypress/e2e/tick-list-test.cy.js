describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'climbList'}).as('climbList')
    cy.intercept('PATCH', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'patchClimb'}).as('patchClimb')
    cy.intercept('POST', 'https://tick-list-api.herokuapp.com/api/v1/climbs', {fixture: 'postClimb'}).as('postClimb')
    cy.intercept('GET', 'https://tick-list-api.herokuapp.com/api/v1/climbs', 'https://tick-list-app.herokuapp.com//error')
    cy.visit('https://tick-list-app.herokuapp.com/')
  })

  it('should load main page with title', () => {
    cy.get('nav').find('h1').contains('Tick List')
    
  })

  it('should load main page by fetching all climbs on tick list', () => {
    cy.get('.climb').should('have.length', 11)
    cy.get('a').children('div').contains('Throttle')
    cy.get('a').children('div').contains('Marys Climb').should('not.exist')
  })

  it('should be able to click on the drop downs to filter a climb', () => {
    cy.get('.dropdown-filter-input1').select('completed')
    cy.get('.search-button').click()
    cy.get('.climb').should('have.length', 7)

    cy.get('.reset-button').click()
    cy.get('.climb').should('have.length', 11)

    cy.get('.dropdown-filter-input2').select('RockTown, GA')
    cy.get('.search-button').click()
    cy.get('.climb').should('have.length', 1)
    cy.get('.reset-button').click()

    cy.get('.select-grade-input').type('5')
    cy.get('.search-button').click()
    cy.get('.climb').should('have.length', 3)
    cy.get('.reset-button').click()

    cy.get('.dropdown-filter-input2').select('Boone, NC')
    cy.get('.dropdown-filter-input1').select('completed')
    cy.get('.select-grade-input').clear()
    cy.get('.select-grade-input').type('5')
    cy.get('.search-button').click()
    cy.get('.climb').should('have.length', 3)
  })

  it('should be able to add a climb from the form', () => {
    cy.get('.input-name').type('Twisted Sister')
    cy.get('.input-grade').type('5')
    cy.get('.dropdown-filter-input-location').select('Boone, NC')
    cy.get('.input-url').type('https://www.youtube.com/embed/6E1bhQurjkc')
    cy.get('.climb-button').click()
    cy.get('.climb').should('have.length', 12)
    cy.get('a').children('div').contains('Twisted Sister')
    cy.get('.reset-button').click()
  })

  it('should be able to click on a climb tile and move to climb details with beta video', () => {
    cy.get('.climb').first().click()
    cy.url().should('include', '/0')

    cy.get('nav').find('h1').contains('Tick List')
    cy.get('nav').find('button').contains('HOME')

    cy.get('.climb-name').contains('Throttle')
    cy.get('.climb-location').contains('Boone, NC')
    cy.get('.climb-grade').contains('V5')

    cy.get('[type="checkbox"]').uncheck()

    cy.get('.home').click()
    
  })

})

