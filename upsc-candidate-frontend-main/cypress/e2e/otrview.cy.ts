type Url = string
describe('otr view', () => {
  it('fills out the form', () => {
    const url: Url = 'http://13.214.115.241:8002/candidate/otr'
    cy.visit(url);
    cy.get('#my-colId-cand_name_first').type('Gangesh');
    
    // cy.get('#my-colId-cand_name_middle').type('');
    cy.get('#my-colId-cand_name_last').type('kumar');
    
    cy.get('#my-colId-father_name_first').type('Tara');
    
    cy.get('#my-colId-father_name_middle').type('Kant');
    
    cy.get('#my-colId-father_name_last').type('Roy');
    cy.get('#my-colId-motherfirst_name').type('Anju');
    // cy.get('#my-colId-mothermiddle_name').type('Devi');
    cy.get('#my-colId-motherlast_name').type('Devi');
    cy.get('#my-colId-place_of_birth').type('Samastipur');
    cy.get('#gender > .react-select__control > .react-select__value-container > .react-select__input-container').click(); // Simulate clicking to open the dropdown
    cy.wait(2000);

    cy.get('input[name="class_x_roll_no"]').type('630778');                                    
    cy.get('#my-colId-email').type("gangesh.kumar@cipl.org.in");
    // cy.get('.input-sm btn btn-info').click();
    
    cy.get('#my-colId-mobile').type("9743375626");
    cy.get('#securityquestionid1 > .react-select__control > .react-select__value-container > .react-select__input-container').click();
    cy.wait(2000);
    cy.get('input[name="securityanswer1"]').type('samastipur');
    cy.get('input[name="securityanswer2"]').type('rosera');
    cy.get('#securityquestionid2 > .react-select__control > .react-select__value-container > .react-select__input-container').click();
    cy.wait(2000);

    cy.get('#Password').type("Password@123456");
    cy.get('[name="confirmPassword"]').type("Password@123456");
    cy.get('#Captcha').type("cusiun");
  });
});
