describe('Alura busca curso', () => {

    beforeEach(() => {
        cy.visit('http://www.alura.com.br')
    })
    it('Buscar cursos de Java', () => {
        cy.get('#header-barraBusca-form-campoBusca')
            .type('Java');
        cy.get('.header-barraBusca-form-submit')
            .click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Aprenda Java com Orientação a Objetos')
    })
})