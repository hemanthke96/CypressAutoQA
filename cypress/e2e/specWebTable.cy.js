describe('Hanndle Tables', ()=>{
    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')

        cy.get('#form-login > div.text-end > button').click()
        cy.get('#modal-security > div > div > div.modal-header > button').click()
        cy.get(".parent[href='#collapse-5']").click()
        cy.get("#menu-customer>ul>li:first-child>a").click()

        
    })
    
    it('tableHandle', ()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(4)").contains('Default')  
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(6)>td:nth-child(3)").contains('hfgjhgjgjggj@gmail.com')  
        cy.get("tbody tr:nth-child(5) td:nth-child(2)").contains('!Goran Krezic!')
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','7')
    })

    it('Reading the whole table', ()=>{
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get("td").each(($col, index , $cols)=>{
                        cy.log($col.text())
                    })
                })
            })
    })

    it('Pages', ()=> {

        

    })
})