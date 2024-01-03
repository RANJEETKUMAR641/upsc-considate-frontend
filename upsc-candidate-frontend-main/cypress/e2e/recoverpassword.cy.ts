describe('recover password spec', () => {
  it('passes', () => {
    cy.visit('http://13.214.115.241:8002/recover-password')
    cy.get('input[name="password"]').type('ora@123123'); 
    cy.get('input[name="confirmpassword"]').type('ora@123123'); 
    cy.get('.mb-4 > .btn').click()
  })
})
