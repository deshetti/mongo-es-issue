import { element, by, ElementFinder } from 'protractor';

export class PostComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-post div table .btn-danger'));
    title = element.all(by.css('jhi-post div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PostUpdatePage {
    pageTitle = element(by.id('jhi-post-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    tagSelect = element(by.id('field_tag'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async tagSelectLastOption() {
        await this.tagSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async tagSelectOption(option) {
        await this.tagSelect.sendKeys(option);
    }

    getTagSelect(): ElementFinder {
        return this.tagSelect;
    }

    async getTagSelectedOption() {
        return this.tagSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class PostDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-post-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-post'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
