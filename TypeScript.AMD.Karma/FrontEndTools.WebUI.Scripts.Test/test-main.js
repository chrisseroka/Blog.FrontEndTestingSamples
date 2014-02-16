var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.*Test\.js$/.test(file)) {
        //By default Karma test files are treated as absolute path dependencies
        //which means that all relative dependencies are resolved also as path dependencies without extension:
        //(../Services/ColorCalculator) is resolved as (/base/FrontEndTools.WebUI/Services/ColorCalculator)
        //To fix it we should make test test files "relative" but this will cause karma's "no timestamp error"
        tests.push('.' + file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'. Refers to the previous comment
    paths: {
        'knockout': 'base/FrontEndTools.WebUI/lib/knockout'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});