describe('UI Element Check', () =>{
    it.skip('radio-buttons', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[value='radio1']").should( "be.visible"); //Checking if the radio1 button is visible
        cy.get("input[value='radio2']").should( "be.visible"); //Checking if the radio2 button is visible
        cy.get("input[value='radio2']").should( "be.visible"); //Checking if the radio3 button is visible        
        
        // Selecting the radio button

        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio2']").should( "not.be.checked");
        cy.get("input[value='radio3']").should( "not.be.checked");

        cy.get("input[value='radio2']").check().should('be.checked')
        cy.get("input[value='radio1']").should( "not.be.checked");
        cy.get("input[value='radio3']").should( "not.be.checked");

        cy.get("input[value='radio3']").check().should('be.checked')
        cy.get("input[value='radio2']").should( "not.be.checked");
        cy.get("input[value='radio1']").should( "not.be.checked");
    })

    it.skip('Checkboxs', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //visibility
        cy.get("#checkBoxOption1").should( "be.visible"); //Checking if the checkbox1 is visible
        cy.get("#checkBoxOption2").should( "be.visible"); //Checking if the checkbox2 is visible
        cy.get("#checkBoxOption3").should( "be.visible"); //Checking if the checkbox3 is visible 

        //select single option
        cy.get("#checkBoxOption1").check().should('be.checked')
        cy.get("#checkBoxOption2").should('not.be.checked')
        cy.get("#checkBoxOption3").should('not.be.checked')
        
        cy.screenshot()
        //Uncheck
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.screenshot()

        // two options selected
        cy.get("#checkBoxOption1").check().should('be.checked')
        cy.get("#checkBoxOption2").check().should('be.checked')
        cy.get("#checkBoxOption3").should('not.be.checked')

        // All selected
        cy.get("#checkBoxOption1").check().should('be.checked')
        cy.get("#checkBoxOption2").check().should('be.checked')
        cy.get("#checkBoxOption3").check().should('be.checked')
     
        })

    it('Dropdown try with Select', ()=>{

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        //cy.get("#dropdown-class-example").select("Option1")
        // cy.get("#dropdown-class-example").should("have.value", "Option1")
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')

    })

    it('Dropdown try without Select', () =>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        
        cy.get('#autocomplete').type('Austria').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Austria')
    })

    
})