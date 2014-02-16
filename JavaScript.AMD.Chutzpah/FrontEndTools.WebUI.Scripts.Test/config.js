requirejs.config({
    paths: {
        //because of TestHarnessLocationMode - SettingsFileAdjacent all references here are relative to
        //chutzpah.json file location
        'knockout': 'FrontEndTools.WebUI/lib/knockout'
    }
});