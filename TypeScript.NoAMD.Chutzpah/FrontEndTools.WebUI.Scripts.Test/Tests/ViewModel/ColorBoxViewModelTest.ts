/// <reference path="../../lib/jasmine/jasmine.d.ts"/>
/// <reference path="../../../FrontEndTools.WebUI/ViewModels/ColorBoxViewModel.ts"/>

module FrontEndTools {

    describe("ColorBoxViewModel tests", () => {
        var viewModel: ColorBoxViewModel = undefined;
        var calculator = undefined;

        beforeEach(() => {
            calculator = {
                toHex: ()=> {}
            };
            viewModel = new ColorBoxViewModel(calculator);
        });

        it("toHex method should call colorCalculator.toHex method with int parameters", () => {
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

        it("toHex method should assign hex property", () => {
            //ARRANGE
            viewModel.red("1");
            viewModel.green("2");
            viewModel.blue("3");
            var spy = spyOn(calculator, "toHex");
            spy.andReturn("#010203");

            //ACT
            viewModel.toHex();

            //ASSERT
            expect(viewModel.hex()).toBe("#010203");
        });
    });
}