class EditGallery{
    get boxTitle(){
        return cy.get(".box-title");
    }
    get editBtn(){
        return cy.get("a")
    }
    get titleNew(){
        return cy.get("#title")
    }
    get submitButton(){
        return cy.get("button")
    }

}
export const editGallery = new EditGallery();