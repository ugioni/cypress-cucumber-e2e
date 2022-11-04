/// <reference types="cypress" />
// @ts-check
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { ProductPage } from "../pageobjects/ProductPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("o sistema for acessado", () => {
  ProductPage.accessApp();
});

When("buscar um produto", () => {
  ProductPage.searchProductByName();
});

Then("devem ser exibidos seus detalhes", () => {
  ProductPage.checkProductCount();
});
