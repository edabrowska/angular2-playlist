import { PlaylistPage } from './app.po';

describe('playlist App', () => {
  let page: PlaylistPage;

  beforeEach(() => {
    page = new PlaylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
