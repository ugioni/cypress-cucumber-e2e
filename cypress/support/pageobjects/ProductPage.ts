/// <reference types="Cypress" />

import { ProductElements } from "../elements/ProductElements";

export class ProductPage {
  static accessApp() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  }

  static searchProductByName() {
    ProductElements.getSearchField().type("t-shirts");
    ProductElements.getSearchButton().click();
  }

  static checkProductCount() {
    ProductElements.getProductCount().should("be.visible");
  }
}
