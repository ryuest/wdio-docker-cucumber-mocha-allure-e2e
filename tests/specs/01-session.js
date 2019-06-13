var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

describe('DuckDuckGo search', () => {
  it('searches for WebdriverIO', () => {
    browser.url('https://duckduckgo.com/')
 //   browser.saveScreenshot('./reports/screenshot.png');

    $('#search_form_input_homepage').addValue('WebdriverIO')
    $('#search_button_homepage').click()

    const title = browser.getTitle()
    console.log('Title is: ' + title)
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
  })
})