describe('AsertionTry', () =>{
   let sol = "Our test should now display CONTAINS in the Command Log and still be green.Even without adding an assertion, we know that everything is okay! This is because many of Cypress' commands are built to fail if they don't find what they're expecting to find. This is known as an Implicit Assertion.To verify this, replace type with something not on the page, like hype. You'll notice the test goes red, but only after about 4 seconds! Can you see what Cypress is doing under the hood? It's automatically waiting and retrying because it expects the content to eventually be found in the DOM. It doesn't immediately fail!"
   
    it('implicitAssertions', ()=>{

        cy.visit('https://demowebshop.tricentis.com/')
            cy.url().should('include','tri')
            cy.url().should('not.include','failure')
            cy.url().should('contain', 'webshop')
            cy.url().should('eq', 'https://demowebshop.tricentis.com/')
            cy.url().should('include','tri').and('not.include','failure')
            .and('contain', 'webshop')
    })

    it('test1', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("input[placeholder='Username']").should('have.value', "Admin")
        cy.get("button[type='submit']").click()
        cy.get("img[alt='client brand banner']").should('be.visible')
        //cy.wait('2000')
        cy.get("input[placeholder='Search']").type(sol)
        cy.screenshot()
    })

    it('explicitAssertion', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.title().should('eq', 'OrangeHRM')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        //cy.get("input[placeholder='Username']").should('have.value', "Admin")
        cy.get("button[type='submit']").click()
        
        let expname = "Giovanna Kikuchi"

        cy.get(".oxd-userdropdown-name").then((val) => {
            let actname = val.text()
            //expect(actname).to.not.equal(expname)
            expect(actname).to.equal(expname)

        //TDD Style

            assert.equal(actname, expname)
        })
   
    })


})