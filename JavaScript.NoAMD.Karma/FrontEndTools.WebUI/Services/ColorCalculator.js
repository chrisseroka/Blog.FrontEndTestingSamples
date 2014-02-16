function ColorCalculator() {
    var self = this;

    function byteToHex(value) {
        return (value < 16
            ? "0" + value.toString(16)
            : value.toString(16)).toUpperCase();
    }

    self.toHex = function (red, green, blue) {
        return "#" + byteToHex(red) + byteToHex(green) + byteToHex(blue);
    };
    
    self.toRgb = function (hex) {
        throw new Error("not implemented yet");
    };
};