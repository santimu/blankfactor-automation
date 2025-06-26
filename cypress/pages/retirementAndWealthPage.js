import blankfactor from './blankFactorPage';

class RetirementAndWealthPage {
  get selectors() {
    return {
      sectionHeader: 'Powering innovation in retirement services',
      letsGetStartedBtn: 'a[title="Let\'s get started"]',
      footerCopyright: '© 2025 Blankfactor LLC. All rights reserved.'
    };
  }

  hoverOverThirdTileUnderPoweringInnovation() {
    cy.contains(this.selectors.sectionHeader).scrollIntoView();
    cy.wait(1000);
    blankfactor.acceptCookiePolicy();
    cy.contains('div.card-text', 'AI &')
      .closest('.flip-card')
      .should('be.visible')
      .realHover();
    cy.get('.flip-card-back.card-back')
      .should('be.visible')
      .and('contain.text', 'Automate your operations and get to market quickly');
  }

  scrollToBottomAndClickLetsGetStarted() {
        const { letsGetStartedBtn, footerCopyright } = this.selectors
        blankfactor.acceptCookiePolicy();
        cy.scrollTo('bottom')
        cy.contains(footerCopyright).click({ force: true })
        cy.get(letsGetStartedBtn).should('be.visible').click()
    }
}

export default new RetirementAndWealthPage();
