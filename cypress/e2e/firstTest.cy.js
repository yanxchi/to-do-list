describe('myfirsttest', ()=>{
    it('title', () => {
        cy.visit('http://localhost:3000/');
        cy.title().should('eq', 'To-Do List App');
    })

    it('nav-bar', () => {
        cy.visit('http://localhost:3000/');
        cy.get(".navbar__link2").click();
        cy.get("h2.heading").contains('To-Do List');
        cy.get("input").type("Do homework");
        cy.get("button.input__submit").click();
        cy.get(".todos__single--text").contains("Do homework");
        cy.get(".navbar__link1").click();
        cy.get(".greeting").contains('Welcome');
    })
});