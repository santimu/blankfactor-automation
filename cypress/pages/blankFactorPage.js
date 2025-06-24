// blankFactorPage.js
// Page Object Model (POM) for BlankFactor website

class BlankFactorPage {
  // --- Element selectors ---
  get selectors() {
    return {
      acceptCookiesBtn: '[data-cky-tag="accept-button"]',
      industriesLink: 'a:contains("Industries")',
      retirementLink: 'a:contains("Retirement and wealth")',
      sectionHeader: 'Powering innovation in retirement services',
      tiles: '.swiper-wrapper .swiper-slide',
      letsGetStartedBtn: 'a[title="Let\'s get started"]',
      footerCopyright: '© 2025 Blankfactor LLC. All rights reserved.',
    };
  }

  // --- Actions ---
  visit() {
    cy.visit('https://blankfactor.com');
  }

  acceptCookiePolicy() {
    cy.wait(500);
    cy.get('body').then(($body) => {
      const { acceptCookiesBtn } = this.selectors;
      if ($body.find(acceptCookiesBtn).length > 0) {
        cy.get(acceptCookiesBtn, { timeout: 0 }).then(($btn) => {
          if ($btn.is(':visible')) {
            cy.wrap($btn).click();
            cy.log('Cookie policy accepted.');
          } else {
            cy.log('Cookie button present but not visible.');
          }
        });
      } else {
        cy.log('Cookie policy button not found.');
      }
    });
  }

  navigateToRetirementAndWealth() {
    const { industriesLink, retirementLink } = this.selectors;

    cy.get(industriesLink)
      .last()
      .should('be.visible')
      .trigger('mouseover');

    cy.wait(500);

    cy.get(retirementLink)
      .last()
      .should('be.visible')
      .click();

    this.acceptCookiePolicy(); // Handle potential reappearance
  }

  hoverOverThirdTileUnderPoweringInnovation() {
    const { sectionHeader, tiles } = this.selectors;

    cy.contains(sectionHeader).scrollIntoView();
    cy.wait(1000);

    cy.get(tiles)
      .eq(2)
      .trigger('mouseover', { force: true })
      .invoke('text')
      .then((text) => cy.log(`3rd Tile Text: ${text.trim()}`));
  }

  scrollToBottomAndClickLetsGetStarted() {
    const { letsGetStartedBtn, footerCopyright } = this.selectors;

    cy.scrollTo('bottom');
    cy.contains(footerCopyright).click({ force: true });

    cy.get(letsGetStartedBtn)
      .should('be.visible')
      .click();
  }

  verifyContactPageUrlAndTitle() {
    cy.url().should('include', '/contact');
    cy.title().should('include', 'Contact | Blankfactor');
  }

  printPageTitle() {
    cy.title().then((title) => cy.log(`Page title is: ${title}`));
  }
}

export default new BlankFactorPage();
