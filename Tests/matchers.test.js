describe('Comparadores comunes', () => {
    const user = {
        name: 'Alan',
        lastname: 'Brito'
    };
    const user2 = {
        name: 'Jorge',
        lastname: 'Nitales'
    };
    const user3 = {
        name: 'Alan',
        lastname: 'Brito'
    };

    test('Estos usuarios son iguales', () => {
        expect(user).toEqual(user3);
    });
    test('Estos usuarios no son iguales', () => {
        expect(user2).not.toEqual(user3);
    });
});
