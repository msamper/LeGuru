import { LeGuruPage } from './app.po';

describe('le-guru App', function() {
  let page: LeGuruPage;

  beforeEach(() => {
    page = new LeGuruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
