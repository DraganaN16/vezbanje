/// <reference types='cypress'/>

import { commonElements } from "../support/page_objects/commonElements"
import { createGallery } from "../support/page_objects/createGallery"
import { editGallery } from "../support/page_objects/editGallery"


before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

  

describe("CRUD flow", () => {

    beforeEach(() =>{   ///u beforeEach je stavio login
        cy.visit("login");
        commonElements.loginUser(Cypress.env('existingUserEmail'), Cypress.env('validPassword'));
        cy.wait(2000);


        //treci nacin koriscenja podataka iz cypress environmenta
        // const { existingUserEmail, validPassword } = Cypress.env();
       // commonElements.loginUserFE(existingUserEmail, validPassword); -POZIVAMO FUNKCIJU
    })


    it.only("Create new gallery", () =>{    //sada kada sam kreirala, proveram da li je galerija tu, i ostale el.
        cy.intercept({
            url: "https://gallery-api.vivifyideas.com/api/galleries",
            method: "POST"
        }).as('galleryCreated')
        createGallery.navLink.click();
        createGallery.galleryTitle.type("Summer");
        createGallery.galleryDescription.type("flower");
        createGallery.imageInputField.type("https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        createGallery.submitBtn.click();
        cy.wait(2000);

        cy.wait('@galleryCreated').then((res) => {

            cy.log('Gall created ' + res);
        })

        cy.get("h1").should("have.text", "All Galleries")
        cy.get(".box-title").first()
        .should("contain", "Summer")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-family", "Didot, serif")
        
    });

    it('Edit gallery title', () => {
        cy.visit('');
        editGallery.boxTitle.first().click();  ///kliknemo na prvu galeriju koju smo napravili
        
        //cy.get('#title').should('have.value', 'Summer');  //assertation
        //cy.get('#description').eq(0).should("contain", "Flower")
      
        //cy.get('[type="url"]').should('have.value','https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

        editGallery.editBtn.contains("Edit Gallery").click();
        editGallery.titleNew.clear().type("Editovano");
        editGallery.submitButton.contains("Submit").click();
        cy.wait(2000);
    });


})