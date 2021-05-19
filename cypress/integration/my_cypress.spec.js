import page_data from './test_data/page_text';
import Selectors from './page_elements/selectors';
const selector = new Selectors();

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('https://kb.selectel.ru/');
    cy.on('uncaught:exception', (err, runnable) => {
      return false
  })
  })
  
    it('Checking the headers elements', () => {
      selector.KB().should('be.visible');
      selector.API().should('be.visible');
    })

    it('Knowledge base surfing', () => {
      selector.input().should('be.visible');
      selector.input().type(page_data.input_word2).type('{enter}'); //Почему-то на этом шаге тест падает. Видит инпут, но текст ввести не может
      cy.url().should('contain', 'search/?q=балансы');
      selector.search_results().should('be.visible');
    })

    it('Checking API documentation', () => {
      selector.API().should('be.visible').click();
      selector.DBaaS().should('be.visible').click();
      selector.request_block().should('be.visible');
    })
})