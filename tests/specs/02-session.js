describe('Local Cards', () => {
  it('searches for WebdriverIO', () => {
    browser.url('http://localhost:8080/')
//    browser.saveScreenshot('./reports/screenshotLocal.png');

    var logout = browser.element('.green');
    logout.waitForExist(5000);
    browser.click('#search_button_homepage');
   

    const title = browser.getTitle()
    console.log('Title is: ' + title)
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
  })
})