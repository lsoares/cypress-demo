describe('Amazon cart test', () => {
    it('adds to cart', () => {
        cy
            .visit("https://amazon.com")
            .get("#twotabsearchtextbox").type("kindle").type("{enter}")
    })
})
