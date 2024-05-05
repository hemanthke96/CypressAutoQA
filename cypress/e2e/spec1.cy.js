describe('Test1', () =>{
    // it('test1', () =>{
    //     cy.visit("https://demowebshop.tricentis.com/")
    //     cy.title().should('eq', 'Demo Web Shop')
    // })

    it('assertion', () =>{
        let name = 'Jane'
        //cy.visit("https://demowebshop.tricentis.com/")
        
        //cy.title().should('eq', 'Demo Web Shop')
        expect(name).to.not.equal('kane')
    })

    
})