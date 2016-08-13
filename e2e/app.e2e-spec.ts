import { Angular2CliSpikePage } from './app.po';

describe('angular2-cli-spike App', function() {
  let page: Angular2CliSpikePage;

  beforeEach(() => {
    page = new Angular2CliSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
