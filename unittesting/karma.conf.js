// Karma configuration
// Generated on Mon Sep 19 2016 10:28:32 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser//*.* any extension go inside the file
    files: [

      //dependency files
        "./node_modules/angular/angular.js", // JQuery should be in the top
        "./node_modules/angular-mocks/angular-mocks.js",
     // "jasmine-jquery-1.3.1",

        //application files
      "./js/test.js",
      "./js/**/*.js",

//below this are the test specs files
      "./test/**/*.*",

        //html files
        "./views/*.html"
    ],

    // list of files to exclude
    exclude: [

    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './views/*.html': ['ng-html2js']

    },
    //
    ngHtml2JsPreprocessor: {
      prependPrefix:'/',
      moduleName: 'duces'
    },


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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Which plugins to enable
    // plugins: [
    //   // 'karma-chrome-launcher',
    //   'karma-chrome-launcher',
    //   'karma-jasmine',
    //   'karma-ng-html2js-preprocessor'
    // ],

    // browsers: ['PhantomJS'],
    //
    // // Which plugins to enable
    // plugins: [
    //   // 'karma-chrome-launcher',
    //   'karma-phantomjs-launcher',
    //   'karma-jasmine',
    //   'karma-ng-html2js-preprocessor'
    // ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
