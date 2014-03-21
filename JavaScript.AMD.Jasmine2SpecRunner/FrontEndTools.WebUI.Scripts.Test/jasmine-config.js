require(['jasmine-boot', 'tests'], function (boot, tests) {

    // Load the specs
    require(tests, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });