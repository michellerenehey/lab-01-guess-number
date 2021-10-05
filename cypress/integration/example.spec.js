
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains user-input', ()=>{
            cy.get('#user-input').should('be.visible');
        });
    });

    describe('user interaction', ()=>{   
        it('should show taht the button was clicked', ()=>{
            cy.get('#submit-button').click();
            cy.get('#user-message').should('be.visible');
        });
    });
});