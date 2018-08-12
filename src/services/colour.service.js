export {
    generateColour,
    rgbHex,
    textColour
}

function generateColour() {
    const rgb = generateRgb();

    return {
        rgb,
        hex: rgbHex(rgb)
    }
}

function generateRgb() {
    return {
        red: random(0, 255),
        green: random(0, 255),
        blue: random(0, 255)
    }
}

function rgbHex({ red, green, blue }) {
    return `#${dec2Hex(red)}${dec2Hex(green)}${dec2Hex(blue)}`;
}

function textColour({ red, green, blue }) {
    return brightness(red, green, blue) > 125 ? 'black' : 'white';
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function dec2Hex(dec) {
    let hex = parseInt(dec).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

/*
 * brightness  = sqrt( .299*R2 + .587*G2 + .114*B2 );
 * from here: alienryderflex.com/hsp.html
 */
function brightness(red, green, blue) {
    return Math.round(
        Math.sqrt(
            Math.pow(parseInt(red), 2) * 0.299 +
            Math.pow(parseInt(green), 2) * 0.587 +
            Math.pow(parseInt(blue), 2) * 0.114
        )
    );
}
