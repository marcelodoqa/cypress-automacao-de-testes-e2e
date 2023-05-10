describe('Login e registro de usuario alura pic', () => {

    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com')
    })
    it('verifica mensagens validacao - utilizando inspector e localizando elements', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })
    it('verifica mensagens validacao - utilizando seletor playground', () => {
        cy.get('p > a').click()
        cy.get('.btn').click()
        cy.get('.text-danger').should('have.text', 'Email is required!')
        cy.get('.btn').click()
        cy.get(':nth-child(2) > ap-vmessage > .text-danger').should('have.text', 'Full name is required!')
        cy.get(':nth-child(3) > ap-vmessage > .text-danger').should('have.text', 'User name is required!')
        cy.get(':nth-child(4) > ap-vmessage > .text-danger').should('have.text', 'Password is required!')
    })
    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.get(':nth-child(1) > .form-control').type('invalid.email')
        cy.contains('button', 'Register').click()
        cy.get('.text-danger').should('have.text', 'Invalid e-mail')
    })

    it.only('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.get(':nth-child(1) > .form-control').type('invalid.email')
        cy.contains('button', 'Register').click()
        cy.get('.text-danger').should('have.text', 'Invalid e-mail')
        cy.get(':nth-child(4) > .form-control').type('123')
        cy.contains('button', 'Register').click()
        cy.get(':nth-child(4) > ap-vmessage > .text-danger')
        .should('have.text', 'Mininum length is 8')
    })
})  