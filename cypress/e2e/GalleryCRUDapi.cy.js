/// <reference types='cypress' />


describe('Gallery CRUD via API', () => {

     before(() => {
         cy.loginViaApi();
     })


    it('Negative case - login via APi invalid pass', () => {
        cy.loginViaApi('draganaa@gmail.com', 'pokusavam10');
    })
    it('Register via APi - first name blank', () => {
        cy.registerUserViaApi('', '', 'asdas@masda.com', );
    })

    xit('visit homepage', () => {
        cy.visit('')
    })


})