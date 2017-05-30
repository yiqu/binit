import { BinItPage } from './app.po';

describe('bin-it App', () => {
  let page: BinItPage;

  beforeEach(() => {
    page = new BinItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
