import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputWord () { return $('#kw') }
    get btnSubmit () { return $('button[type="submit"]') }

    async search (keyword) {
        await (await this.inputWord).setValue(keyword);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new SearchPage();
