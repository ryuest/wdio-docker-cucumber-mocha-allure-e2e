exports.config = {
    // Specify Test Files
    specs: [
        './tests/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // Capabilities
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--no-sandbox']
        }
    }],
    //
    // Test Configurations
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'command',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './output',
    //
    // Set a base URL in order to shorten url command calls.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Selenium standalone
    services: ['docker'],
    //
    // Framework you want to run your specs with.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    reporters: ['dot', 'spec', 'allure'],

    allure: {
        outputDir: './allure-results/',
        disableWebdriverStepsReporting: false,
        useCucumberStepReporter: false,
    },


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: ['docker'],
    dockerLogs: './',
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        options: {
            p: ['4444:4444', '5900:5900'],
            shmSize: '2g'
        }
    },
    onDockerReady: function () {
        //run script to start VNC?
    },
    //

    // Output for jUnit
    reporterOptions: {
        junit: {
            outputDir: './output/',
            outputFileFormat: function (opts) { // optional
                return `${opts.capabilities}.results-${opts.cid}.xml`
            }
        }
    },
}