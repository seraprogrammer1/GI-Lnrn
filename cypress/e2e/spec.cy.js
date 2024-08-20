describe("test home-image", () => {
  it("test image", () => {
    cy.visit("http://localhost:4000");
    cy.get(".home-image").should("be.visible");
    cy.get(".home-image").should("have.attr", "src");
    cy.get(".home-image").should("have.attr", "alt").and("eq", "home-image");
  });
});

describe("test button", () => {
  it("test button", () => {
    cy.visit("http://localhost:4000");
    cy.get(".home-button").should("be.visible");
    cy.get(".home-button").should("have.text", "Begin journey");
    cy.get(".home-button").click();
  });
});

describe("test heading tag", () => {
  it("test heading tag", () => {
    cy.visit("http://localhost:4000");
    cy.get(".heading-tag").should("be.visible");
    cy.get(".heading-tag").should("have.length", 3);
    cy.get(".heading-tag").eq(0).should("have.text", "Personalized Quizzes");
    cy.get(".heading-tag").eq(1).should("have.text", "Rewarding");
    cy.get(".heading-tag").eq(2).should("have.text", "Personal SME");
  });
});

describe("test footer", () => {
  it("test footer", () => {
    cy.visit("http://localhost:4000");
    cy.get("footer").should("be.visible");
    cy.get("footer").should("have.class", "page-footer blue");
  });
});
