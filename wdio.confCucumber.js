exports.config = {
    // Specify Test Files
    specs: [
        './tests/features/**/*.feature',
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
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    reporters: ['dot', 'spec', 'allure'],

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
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./tests/features/**/*.js'], // <string[]> (file/dir) require files before executing features
        backtrace: false, // <boolean> show full backtrace for errors
        compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: false, // <boolean> fail if there are any undefined or pending steps
        tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000, // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
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