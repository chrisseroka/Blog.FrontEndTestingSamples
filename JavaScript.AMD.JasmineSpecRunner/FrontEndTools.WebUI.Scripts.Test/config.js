require.config({
    urlArgs: 'nocache=' + Math.random(),
    paths: {
        'jasmine': 'lib/jasmine/jasmine',
        'jasmine-html': 'lib/jasmine/jasmine-html',
        'knockout': '../FrontEndTools.WebUI/lib/knockout'
    },
    shim: {
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});