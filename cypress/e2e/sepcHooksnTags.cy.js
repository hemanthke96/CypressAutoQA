describe('Hooks & Tags', ()=> {

    before(()=>{
        cy.log("Before Hook - Launch App")
    })

    after(()=>{
        cy.log("After Hook - Close App");
    })

    beforeEach(()=>{
        cy.log('Before Each - Run this before each testcase')
    })

    afterEach(()=>{
        cy.log('After Each - Run this After each testcase')
    })

    it('Search', ()=>{
        cy.log("++++++++Search++++++++")
    })

    it('Advanced Search', ()=>{
        cy.log("++++++++Advanced Search++++++++")
    })

    it('Listing Prods', ()=>{
        cy.log("++++++++Listing Prods++++++++")
        
    {tags: '@smoke'}})

    it('Add new Prod', ()=>{
        cy.log("++++++++Add new Prod++++++++")
    {tags: '@smoke'}});  
})