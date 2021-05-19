class Selectors {
    
    KB () {
        return cy.get('li:nth-child(3) > a');
    }
    API () {
        return cy.get('li:nth-child(4) > a');
    }


    input () {
        return cy.get('#js-search-input');
    }
    search_results () {
        return cy.get('#js-advanced-search-results-container');
    }


    DBaaS () {
        return cy.get('#API > div.book-page.book-page--home > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > a > h4');
    }
    request_block () {
        return cy.get('#api0 > div > div:nth-child(2) > div:nth-child(2) > section > div > span:nth-child(2) > div > div');
    }
}

export default Selectors;