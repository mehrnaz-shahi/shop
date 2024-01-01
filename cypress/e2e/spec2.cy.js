describe("VisualTest Example Spec", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/signUp");
    });
    it("should take a VisualTest capture of the example page", () => {
      cy.sbvtCapture("sign up  Page");
      cy.sbvtCapture("Sign up Page viewport", { capture: "viewport" });
      cy.get(".submit_btn").sbvtCapture("signup btn");
  
      cy.get(".submit_btn").click();
      cy.get(".submit_btn").sbvtCapture("signup btn after click");
  
      // Wait for the element to be visible or have a certain state
      cy.get(".error").should("be.visible").sbvtCapture("error ocurred");
    });
  });
  