describe('Testing Login Siakad', () => {
    it('Melakukan login dengan username salah dan password salah', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('coba')
        cy.get('#password').type('coba')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    })

    it('Melakukan login dengan username benar dan password salah', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710156')
        cy.get('#password').type('coba')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    })

    it('Melakukan login dengan username salah dan password benar', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('coba')
        cy.get('#password').type('passwordbenar')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    })

    it('Melakukan login dengan username kosong dan password kosong', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    })

    it('Melakukan login dengan username benar dan password terisi', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#password').type('passwordbenar')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    })

    it('Melakukan login dengan username terisi dan password kosong', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710156')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    })

    it('Melakukan login dengan username benar dan password benar', () =>{
        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('#username').type('1831710156')
        cy.get('#password').type('passwordbenar') //password sengaja tidak saya tunjukkan yang benar, untuk menjaga privasi data.
        cy.get('.btn-success').click()
    })
})