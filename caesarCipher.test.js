import caesarCipher from './caesarCipher';
test('cipher exists', () => {
    expect(caesarCipher).toBeDefined()
});
test('cipher with key one works on single letter a', () => {
    expect(caesarCipher('a', 1)).toBe('b')
});
test('cipher with key two works on single letter b', () => {
    expect(caesarCipher('b', 2)).toBe('d')
});
test('cipher wraps from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a')
});
test('capitals are maintained', () => {
    expect(caesarCipher('A', 1)).toBe('B')
});
test('cipher wrap works with key > 1', () => {
    expect(caesarCipher('y', 4)).toBe('c')
});

test('cipher wraps from Z to A', () => {
    expect (caesarCipher('Z', 3)).toBe('C')
});

test('cipher with key one works on single word', () => {
    expect(caesarCipher('merry', 1)).toBe('nfssz')
});
test('cipher with key one works on multiple capitalized words', () => {
    expect(caesarCipher('Glad lad', 1)).toBe('Hmbe mbe')
});
test('cipher with key 4 works on one word', () => {
    expect(caesarCipher('merry', 4)).toBe('qivvc')
});
test('cipher with key 4 works on multiple words', () => {
    expect(caesarCipher('glad lad', 4)).toBe('kpeh peh')
});

test('cipher does not affect punctuation', () => {
    expect(caesarCipher("Oh, hi there. Hello world!", 4)).toBe("Sl, lm xlivi. Lipps asvph!")
});