const Main = require ('./main.page.js');

describe('ADDQ Main Page', function () {
  before('Open main page', function () {
    browser.url('/');
  });

  it('should display a header logo', function () {
    Main.headerLogo.waitForVisible(10000).should.equal(true, `Header logo wasn't displayed within 10s`);
  });
});