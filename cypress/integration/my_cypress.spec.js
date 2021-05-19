import Selector from './page_elements/selectors';
import page_data from './test_data/page_text';
const selector = new Selector();

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('https://kb.selectel.ru/');
  })
  
    it('Checking the headers elements', () => {
      selector.KB().should('be.visible');
      selector.API().should('be.visible');
    })

    it('Knowledge base surfing', () => {
      selector.accaunt().should('be.visible').click();
      cy.url().should('contain', 'docs/control-panel-actions/account/');

      selector.input().type(page_data.input_word2).type('{enter}');
      selector.search_results().should('be.visible');
    })

    it('Checking API documentation', () => {
      selector.API().should('be.visible').click();
      selector.DBaaS().should('be.visible').click();
      selector.request_block().should('be.visible');
    })
})