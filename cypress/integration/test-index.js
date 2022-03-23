describe('Amazon cart test', () => {
    it('adds to cart', () => {
        cy.visit("https://amazon.com")
        cy.findByRole('textbox', {name: /search/i}).type("kindle").type("{enter}")
    })
})

// test