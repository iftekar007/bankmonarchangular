import { BankmonarchangularPage } from './app.po';

describe('bankmonarchangular App', function() {
  let page: BankmonarchangularPage;

  beforeEach(() => {
    page = new BankmonarchangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
