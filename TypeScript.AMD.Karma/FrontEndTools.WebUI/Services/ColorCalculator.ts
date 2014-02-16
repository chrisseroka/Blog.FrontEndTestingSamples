class ColorCalculator {

    byteToHex(value): string {
        return (value < 16
            ? "0" + value.toString(16)
            : value.toString(16)).toUpperCase();
    }

    toHex(red, green, blue): string {
        return "#" + this.byteToHex(red) + this.byteToHex(green) + this.byteToHex(blue);
    }

    toRgb(hex): string {
        throw new Error("not implemented yet");
    }
}

export = ColorCalculator;