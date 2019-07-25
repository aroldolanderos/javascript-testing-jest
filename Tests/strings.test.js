describe('Comprobar cadenas de texto', () => {

    const text = 'Hola inmundo!';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/inmundo/)
    });

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/adios/)
    });

    test('Comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(13 )
    });
});
