describe('My First Test', () => {
    it('Does not do much!', () => {
        cy
            .visit("https://amazon.com")
            .get("#twotabsearchtextbox").type("kindle").type("{enter}")
    })
})
