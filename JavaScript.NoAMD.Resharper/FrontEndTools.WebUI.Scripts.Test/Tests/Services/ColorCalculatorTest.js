///<reference path="/../FrontEndTools.WebUI/Services/ColorCalculator.js"/>
///<reference path="/lib/jasmine/jasmine.js"/>

//Add this line to enable dubugging of the test
//-->   jasmine.getEnv().currentRunner_.finishCallback = function () { };
//You can also add this line in the middle of the test to start debugging (works not only in IE)
//-->   debugger;

//---------------------------------------------------------------------
describe("ColorCalculator tests", function () {
    var calculator = null;
    
    beforeEach(function () {
        //ARRANGE
        calculator = new ColorCalculator();
    });

    it("should calculate hex when passing all rbg factors", function () {
        //ACT
        var result = calculator.toHex(255, 255, 255);

        //ASSERT
        expect(result).toBe("#FFFFFF");
    });

    it("should always produce hex made of 6 signs", function () {
        //ACT
        var result = calculator.toHex(1, 1, 1);

        //ASSERT
        expect(result).toBe("#010101");
    });
});

