<%@ Page Language="C#" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Color calculator</title>
        <link rel="stylesheet" href="main.css" type="text/css" />
        <script type="text/javascript" src="lib/knockout.js"></script>
        <script type="text/javascript" src="ViewModels/ColorBoxViewModel.js"></script>
        <script type="text/javascript" src="Services/ColorCalculator.js"></script>
    </head>
    <body>
        <div class="color-box">
            <h1>Color calculator</h1>
            <div class="preview"></div>
            <div>
                <label>RGB: </label>
                <input class="small" type="text" data-bind="value: red"/>
                <input class="small" type="text" data-bind="value: green"/>
                <input class="small" type="text" data-bind="value: blue"/>
            </div>
            <div>
                <label>HEX: </label>
                <input type="text" data-bind="value: hex"/>
            </div>
            <div class="button-pane">
                <button data-bind="click: toHex">to HEX</button>
                <button>to RGB</button>
            </div>
        </div>
    </body>
    
    <script type="text/javascript">        
        var colorCalculator = new FrontEndTools.ColorCalculator();
        var colorBoxViewModel = new FrontEndTools.ColorBoxViewModel(colorCalculator);

        ko.applyBindings(colorBoxViewModel);
    </script>
</html>
