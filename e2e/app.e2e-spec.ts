import { DowriPage } from './app.po';

describe('dowri App', function() {
  let page: DowriPage;

  beforeEach(() => {
    page = new DowriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
