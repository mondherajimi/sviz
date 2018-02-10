import { SvizPage } from './app.po';

describe('sviz App', () => {
  let page: SvizPage;

  beforeEach(() => {
    page = new SvizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
