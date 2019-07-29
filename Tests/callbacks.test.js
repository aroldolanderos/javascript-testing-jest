import { callbackSaludo, unaRespuesta } from "../callbacks";

describe('Probando callback', () => {
    test('Callback', done => {
        function otroCallback(data) {
            expect(data).toBe('Hola inmundo!');
            done();
        }
        callbackSaludo(otroCallback);
    });

    test('Verifica dato en respuesta', done => {
        function vieneMiDato(data) {
            expect(data).toHaveProperty("data");
            done();
        }
        unaRespuesta(vieneMiDato);
    });
});
