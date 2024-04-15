import caesarCipher from './caesarCipher';
test('cipher exists', () => {
    expect(caesarCipher).toBeDefined()
});
test('cipher with key one works on single word', () => {
    expect(caesarCipher('merry', 1).toBe('nfssz'))
});
test('cipher with key one works on multiple words', () => {
    expect(caesarCipher('glad lad', 1).toBe('hmbe mbe'))
});
test('cipher with key 4 works on one word', () => {
    expect(caesarCipher('merry', 4).toBe('qivvc'))
});
test('cipher with key 4 works on multiple words', () => {
    expect(caesarCipher('glad lad', 4).toBe('kpeh peh'))
});