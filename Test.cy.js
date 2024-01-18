describe('Product selecting', () => {
  it('Adding to cart', () => {
     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
     cy.get('div > div:nth-child(1) > div.stepper-input > a.increment').click()
     cy.get('div > div:nth-child(1) > div.product-action > button').click()
     cy.get('img[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.get('p[class="quantity"]')
     cy.get('p[class="amount"]')
     cy.contains('Place Order').click()
     cy.get('select').select('Armenia')
     cy.get('input[type="checkbox"]').check()
     cy.contains('Proceed').click()
  });
})