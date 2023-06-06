class CreateGallery{
    get navLink(){
        return cy.get('[href="/create"]');
    }
    get galleryTitle(){
        return cy.get("#title");
    }
    get galleryDescription(){
        return cy.get("#description");
    }
    get imageInputField(){
        return cy.get(".input-group > .form-control");
    }
    get submitBtn(){
        return cy.get("form > :nth-child(4)")
    }

    gallery(title, description, url){
        this.navLink.click();
        this.galleryTitle.type(title);
        this.galleryDescription.type(description);
        this.imageInputField.type(url);
        this.submitBtn.click();
    }
}

export const createGallery = new CreateGallery();