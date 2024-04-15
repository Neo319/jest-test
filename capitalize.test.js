const capitalize = require('./capitalize');
test('first letter should be capitalized', () => {
    expect(capitalize('jovial')).toBe('Jovial');
});

