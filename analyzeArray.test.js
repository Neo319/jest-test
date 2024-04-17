import analyzeArray from "./analyzeArray";
test('function exists', () => {
    expect(analyzeArray).toBeDefined()
});
test('returns an object', () => {
    expect(analyzeArray()).toBeInstanceOf(Object)
});
test('returns object with four properties', () => {
    const length = Object.keys(analyzeArray()).length;
    expect(length).toEqual(4)
});
test('object.average exists', () => {
    expect(analyzeArray().average).toBeDefined()
});