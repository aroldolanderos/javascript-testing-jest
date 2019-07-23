import Evaluators from '../true'

describe('Probar resultados nulos', () => {
    test('Verifica [null]', () => {
        expect(Evaluators.isNUll()).toBeNull()
    });
});

describe('Probar resultados verdaderos', () => {
    test('Verifica [true]', () => {
        expect(Evaluators.isTrue()).toBeTruthy()
    });
});

describe('Probar resultados Falsos', () => {
    test('Verifica [false]', () => {
        expect(Evaluators.isFalse()).toBeFalsy()
    });
});

describe('Probar resultados Indefinidos', () => {
    test('Verifica [undefined]', () => {
        expect(Evaluators.isUndefined()).toBeUndefined()
    });
});
