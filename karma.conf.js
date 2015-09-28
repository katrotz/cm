// Karma configuration
// Generated on Mon Sep 28 2015 13:42:39 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['phantomjs-shim', 'jspm', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/vendor/system.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // jspm configuration
    jspm: {
      config: 'app/config.system.js',
      packages: 'app/vendor/',
      useBundles: false,
      paths: {
        'github:*': 'base/app/vendor/github/*',
        'npm:*': 'base/app/vendor/npm/*',
        'tests/*': 'base/tests/*',
        'code/*': 'base/app/*',
        'lib/*': 'base/app/lib/*',
      },
      loadFiles: [
        'tests/unit/**/*.spec.js',
      ],
      serveFiles: [
        'app/**/*.js',
        'app/**/*.html',
        'tests/unit/**/*.mock.js',
      ],
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    client: {
      captureConsole: true,
    }
  });
}
