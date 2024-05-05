//import 'cypress-iframe'

describe('Qwerty', ()=>{
    it('Navigating a website', ()=>{

        cy.visit("www.google.com")
        cy.get("#APjFqb").type("Cypress Testing").type('{enter}')
        //cy.reload()
        //cy.go('back')
        //cy.go('back')
        //cy.screenshot()
       //

    })
    it('Frame', () =>{
    
            cy.visit('https://the-internet.herokuapp.com/iframe')
            cy.frameLoaded('#mce_0_ifr')  //loading frame
    
            cy.iframe('#mce_0_ifr').clear().type('Hello {ctrl+a}')
    
            cy.get("[aria-label='Italic']").click()
        })
    
    })
