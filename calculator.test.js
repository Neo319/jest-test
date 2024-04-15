import calculator from './calculator'
test('object exists', () => {
    expect(calculator).toBeDefined();
});
test ('add one and two', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test ('subtract three from 4', () => {
    expect(calculator.subtract(3, 4)).toBe(1);
});
test ('multiply two and three', () => {
    expect(calculator.mult(2, 3)).toBe(6);
});
test ('divide 4 by 2', () => {
    expect (calculator.divide(4, 2)).toBe(2)
});