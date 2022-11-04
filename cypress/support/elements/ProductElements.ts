export class ProductElements {
  static getSearchField() {
    return cy.get("#search_query_top");
  }

  static getSearchButton() {
    return cy.get('button[name="submit_search"]');
  }

  static getProductCount() {
    return cy.get('span[class="heading-counter"]');
  }
}
