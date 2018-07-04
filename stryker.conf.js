module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mutate: ["lib/**/*.js"],
    mochaOptions: {
      files: [
        'test/support/env.js',
        'test/*.js'
      ]
    }
  });
};
