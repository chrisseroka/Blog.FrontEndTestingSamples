/// <reference path="../../../FrontEndTools.WebUI/lib/knockout.js" />
///<reference path="../../../FrontEndTools.WebUI/ViewModels/ColorBoxViewModel.js"/>
///<reference path="../../lib/jasmine/jasmine.js"/>

//Add this line to enable dubugging of the test
//-->   jasmine.getEnv().currentRunner_.finishCallback = function () { };
//You can also add this line in the middle of the test to start debugging (works not only in IE)
//-->   debugger;

//---------------------------------------------------------------------
describe("ColorBoxViewModel tests", function () {
    var viewModel = undefined;
    var calculator = undefined;

    beforeEach(function() {
        calculator = {
            toHex: function() { }
        };
        viewModel = new FrontEndTools.ColorBoxViewModel(calculator);
    });

    it("toHex method should call colorCalculator.toHex method with int parameters", function () {
        //ARRANGE
        viewModel.red("1");
        viewModel.green("2");
        viewModel.blue("3");
        spyOn(calculator, "toHex");

        //ACT
        viewModel.toHex();

        //ASSERT
        expect(calculator.toHex).toHaveBeenCalledWith(1, 2, 3);
    });
    
    it("toHex method should assign hex property", function () {
        //ARRANGE
        viewModel.red("1");
        viewModel.green("2");
        viewModel.blue("3");
        spyOn(calculator, "toHex").andReturn("#010203");

        //ACT
        viewModel.toHex();

        //ASSERT
        expect(viewModel.hex()).toBe("#010203");
    });
});

