// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
    // Retornamos el valor en libras
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
