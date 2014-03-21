require.config({
    paths: {
        'jasmine': 'lib/jasmine/jasmine',
        'jasmine-html': 'lib/jasmine/jasmine-html',
        'jasmine-boot': 'lib/jasmine/boot',
        'knockout': '../FrontEndTools.WebUI/lib/knockout'
    },
    shim: {
      'jasmine': {
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
      },
      'jasmine-boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'jasmine'
      }
    }
});