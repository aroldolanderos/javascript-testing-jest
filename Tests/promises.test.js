import { getDataFromApi } from "../promises"

describe('Probando promesas', () => {
    test('Obteniendo resultados dummy', done => {
        const dummyApiUrl = 'http://dummy.restapiexample.com/api/v1/employees';
        getDataFromApi(dummyApiUrl).then( data => {
            expect(data.length).toBeGreaterThan(0);
            done();
        });
    });
});
