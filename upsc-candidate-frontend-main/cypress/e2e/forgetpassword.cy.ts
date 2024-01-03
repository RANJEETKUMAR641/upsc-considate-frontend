describe('forgot password spec', () => {
  it('passes', () => {
    cy.visit('http://13.214.115.241:8002/candidate/forgot-password')
    cy.get('input[name="email"]').type('ora@upsc.in')
    cy.get('.btn-lg').click()
  })
})
