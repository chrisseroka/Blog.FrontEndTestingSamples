///<reference path="../../lib/jasmine/jasmine.d.ts"/>

import ColorCalculator = require("../../../FrontEndTools.WebUI/Services/ColorCalculator");

describe("ColorCalculator tests", ()=> {
    var calculator = null;

    beforeEach(()=> {
        //ARRANGE
        calculator = new ColorCalculator();
    });

    it("should calculate hex when passing all rbg factors", ()=> {
        //ACT
        var result = calculator.toHex(255, 255, 255);

        //ASSERT
        expect(result).toBe("#FFFFFF");
    });

    it("should always produce hex made of 6 signs", ()=> {
        //ACT
        var result = calculator.toHex(1, 1, 1);

        //ASSERT
        expect(result).toBe("#010101");
    });
});