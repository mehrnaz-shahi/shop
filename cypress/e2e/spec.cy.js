
describe("VisualTest for Navigation to Product Detail Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/products/"); // Adjust the URL as needed
    });
  
    it("should navigate to a product detail page and check the URL", () => {

    cy.get('.product-card').first().sbvtCapture('card of first product');

      // Click on the first product or any specific product you want to test
      cy.get('.detail-link').first().click();

      cy.get('.prod-img').should('be.visible');

      cy.get('.prod-img').sbvtCapture('image of first product');
  
      // Wait for the URL to change after the click
      cy.url().should('match', /http:\/\/localhost:3000\/products\/\d+/);
    });
  
  });
