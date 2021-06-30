import SearchPage from  '../../search.page';
describe('My Search application', () => {
    it('should search with python', async () => {
        await SearchPage.open();
        await SearchPage.search('python');
    });
});


