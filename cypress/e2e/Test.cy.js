/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Visit', function(){

    it('first test case', function(){
	    for(var i=0 ; i<220 ; i++){
        	cy.visit("https://app.vested.co.in/vest-details?vestId=6ba85deb-b233-401e-9935-f6c6702f293a");
            cy.wait(10000);
            cy.clearCookies();
            cy.clearLocalStorage();
	    }
    })
})