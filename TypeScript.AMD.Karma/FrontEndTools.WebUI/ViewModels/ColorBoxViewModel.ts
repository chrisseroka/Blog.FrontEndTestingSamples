/// <reference path="../lib/knockout.d.ts" />

import ColorCalculator = require("../Services/ColorCalculator");
import ko = require("knockout");

class ColorBoxViewModel {
    red: KnockoutObservable<string>;
    green: KnockoutObservable<string>;
    blue: KnockoutObservable<string>;
    hex: KnockoutObservable<string>;
    colorCalculator: ColorCalculator;

    constructor(colorCalculator: ColorCalculator) {
        this.colorCalculator = colorCalculator;
        this.red = ko.observable('');
        this.green = ko.observable('');
        this.blue = ko.observable('');
        this.hex = ko.observable('');
    }

    toHex(): void {
        var hex = this.colorCalculator.toHex(
            parseInt(this.red()),
            parseInt(this.green()),
            parseInt(this.blue()));
        this.hex(hex);
    }
}
export = ColorBoxViewModel;