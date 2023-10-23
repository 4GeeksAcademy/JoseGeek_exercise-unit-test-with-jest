// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar } = require('./app.js');

// Comienza tu primera prueba
test('adds 7 + 3 to equal 10', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(7, 3);

    // Esperamos que la suma de esos 2 números sea 10
    expect(total).toBe(10);
});

// Resto de tus pruebas...
