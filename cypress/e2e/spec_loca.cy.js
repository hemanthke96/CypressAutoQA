

describe('LocatorTry', ()=> {
    
    it('testSingleExecution', ()=> {
        cy.visit("https://demowebshop.tricentis.com/")
        cy.xpath("//a").should('have.length',"95")
    })
    
    it('test2', ()=> {
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get("a").should('have.length',"95")  
    })
    
    it('test3', ()=> {
        // cy.log(cy.url()) // this will print the url in logs
        // cy.get(".inactive [href='/books']").should('be.enabled')

        cy.log(cy.url()) // this will print the url in logs
        cy.xpath("body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(1) > a").should('be.enabled')

    })
    
    
    it('test0', ()=> {
        let str = "laptop"
        cy.visit("https://demowebshop.tricentis.com/")
        cy.screenshot()
        cy.get("img[alt='Tricentis Demo Web Shop']").should('be.visible')
        cy.url().should('eq', 'https://demowebshop.tricentis.com/')
        cy.get("#small-searchterms").type(str)
        cy.get("input[value='Search']").click()
        //cy.log(cy.get("#Q").)
        //cy.get('#Q').should('eq', str)
        cy.get('#Q').should('have.value',str)
        cy.get("#Q").invoke('val').then((value) => {
            cy.log('Textbox value is: ' + value);
            expect(value).to.equal(str)
          });
        
        


    })
})