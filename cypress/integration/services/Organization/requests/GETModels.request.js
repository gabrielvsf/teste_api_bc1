/// <reference types="cypress" />

const payloadAddToken = require('../payloads/token-header.json');

function retornarModelo(){
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'get_models',
        failOnStatusCode: false,
        headers: payloadAddToken
    })
}
function retornarModeloComTokenInválido(){
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'get_models',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0eXAiOi213123JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        }
    })
}

export { retornarModelo };
export { retornarModeloComTokenInválido };