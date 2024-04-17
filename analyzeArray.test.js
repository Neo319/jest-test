import analyzeArray from "./analyzeArray";
test('function exists', () => {
    expect(analyzeArray).toBeDefined()
});
test('returns an object', () => {
    expect(analyzeArray([1,2])).toBeInstanceOf(Object)
});
test('returns object with four properties', () => {
    const length = Object.keys(analyzeArray([1,2])).length;
    expect(length).toEqual(4)
});
test('object.average exists', () => {
    expect(analyzeArray([1,2]).average).toBeDefined()
});

//averages
test('finds average of three numbers', () => {
    expect(analyzeArray([1, 3, 5]).average).toBe(3)
});
test('rounds average down', () => {
    expect(analyzeArray([1, 3, 4]).average).toBe(2)
});


//min & max
test('finds max of three numbers', () => {
    expect(analyzeArray([1, 3, 5]).max).toBe(5)
});
test('finds min of three numbers', () => {
    expect(analyzeArray([1, 3, 5]).min).toBe(1)
});


//length
test('finds length of five numbers', () => {
    expect(analyzeArray([1, 3, 5, 6, 4]).length).toBe(5)  
});