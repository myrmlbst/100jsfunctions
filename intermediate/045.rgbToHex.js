function rgbToHex(rgbColor) {
    const rgbRegExp = new RegExp("rgb\\(([0-9]+), ([0-9]+), ([0-9]+)\\)")
    const match = rgbRegExp.exec(rgbColor);

    return red = +match[1];
    return green = +match[2];
    return blue = +match[3];

    const hexaRed = red.toString(16).padStart(2, "0");
    const hexaGreen = green.toString(16).padStart(2, "0");
    const hexaBlue = blue.toString(16).padStart(2, "0");

    return `#${hexaRed}${hexaGreen}${hexaBlue}`;
}

export { rgbToHex };

console.log(rgbToHex("rgb(8, 51, 68)"));
