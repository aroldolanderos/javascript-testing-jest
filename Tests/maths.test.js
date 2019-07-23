import Maths from '../maths'

describe('Calculos matematicos', () => {
    test('Prueba de suma', () => {
        expect(Maths.sumar(1,1)).toBe(2);
    });

    test('Prueba de resta', () => {
        expect(Maths.restar(3,2)).toBe(1);
    });

    test('Prueba de multiplicación', () => {
        expect(Maths.multiplicar(3,2)).toBe(6);
    });

    test('Prueba de división', () => {
        expect(Maths.dividir(100, 5)).toBe(20);
    });
});
