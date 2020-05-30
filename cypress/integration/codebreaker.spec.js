describe('My CodeBreaker app test', () => {
    it('Gest type element and check email', () => {
        cy.request('POST', 'http://localhost:3000/codeBreaker', { secret: '4382' }).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.body).to.have.property('secret', '4382') // true
        })
        cy.visit('/');

        cy.get('#code').type('1234{enter}')

        cy.get('#codeBreakerResults').should('contain', '___');

        cy.get('#code').clear()
        cy.get('#code').type('4385')
        cy.get('#play').click();
        cy.get('#codeBreakerResults').should('contain', 'XXX');

        cy.get('#code').clear()
        cy.get('#code').type('4382')
        cy.get('#play').click();
        cy.get('#codeBreakerResults').should('contain', 'XXXX');
    });
});