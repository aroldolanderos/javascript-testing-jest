// código a ejecutar despues de las pruebas
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

// código e ejecutar antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

describe('Preparar antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy()
    });

    test('Es falso', () => {
        expect(false).toBeFalsy()
    })
});
