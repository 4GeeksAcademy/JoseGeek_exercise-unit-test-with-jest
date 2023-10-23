// Importar las funciones desde el archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba de suma
test('adds 7 + 3 to equal 10', () => {
    let total = sum(7, 3);
    expect(total).toBe(10);
});

// Prueba de conversión de euro a dólar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(dollars).toBe(expected);
});

// Prueba de conversión de dólar a yen
test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(1); // Cambia el valor 1 si es necesario
    const expected = 1 * oneEuroIs.JPY;
    expect(yen).toBe(expected);
});

// Prueba de conversión de yen a libras
test("One yen should be 0.87 pounds", function() {
    const pounds = fromYenToPound(1); // Cambia el valor 1 si es necesario
    const expected = 1 * oneEuroIs.GBP;
    expect(pounds).toBe(expected);
});
