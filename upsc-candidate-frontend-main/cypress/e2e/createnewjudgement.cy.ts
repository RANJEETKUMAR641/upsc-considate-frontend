describe('create new judgement', () => {
  it('passes', () => {
    cy.visit(' http://13.214.115.241:8002 '),
     cy.get('[data-testid="email"]').type('ora@upsc.in')
   cy.get('#password').type('Simple@123123')
   cy.get('.mb-4 > .btn').click()
  })
})
