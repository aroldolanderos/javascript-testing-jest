import { getFruits, getColors } from "../arrays";

describe('Verifica si existe un elemento', () => {
    test('¿Contiene manzana?', () => {
        expect(getFruits()).toContain('manzana')
    });
    test('¿No Contiene cleste?', () => {
        expect(getColors()).not.toContain('celeste')
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(getFruits()).toHaveLength(7)
    });
});
