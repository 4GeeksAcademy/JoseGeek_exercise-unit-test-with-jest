let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Función que convierte de euros a dólares
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// Función que convierte de dólares a yenes
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return valueInYen;
}

// Función que convierte de yenes a libras
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
