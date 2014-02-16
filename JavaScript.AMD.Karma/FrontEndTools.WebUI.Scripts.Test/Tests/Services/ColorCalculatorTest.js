//There is problem with Karma, that base modules are defined as files (starting with "/base/...")
//This is why all dependent modules need to be defined as files as well
define(["../../../FrontEndTools.WebUI/Services/ColorCalculator.js"], function (ColorCalculator) {
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
});