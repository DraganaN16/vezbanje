class CommonElements{
    get emailInputField(){
        return cy.get("#email");
    }

    get passwordInputField(){
        return cy.get("#password");
    }

    get submitButton(){
        return cy.get("button[type='submit']");
    }

    loginUser(email, password){
        cy.visit('login');
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.submitButton.click();
    }

}

export const commonElements = new CommonElements();