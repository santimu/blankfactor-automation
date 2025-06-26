import blankfactor from './blankFactorPage';

class LetsGetStartedPage {

  verifyContactPageUrlAndTitle() {
    cy.url().should('include', '/contact');
    cy.title().should('include', 'Contact | Blankfactor');
  }

  printPageTitle() {
    cy.title().then((title) => cy.log(`Page title is: ${title}`));
  }
}

export default new LetsGetStartedPage();
