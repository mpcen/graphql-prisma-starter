import { getFirstName, isValidPassword } from '../src/utils/user';

test('returns first name when given fullname', () => {
    const firstName = getFirstName('Manny Martinez');

    expect(firstName).toBe('Manny');
});

test('returns first name when given first name', () => {
    const firstName = getFirstName('Manny');

    expect(firstName).toBe('Manny');
});

test('rejects passwords shorter than 8 characters', () => {
    const isValid = isValidPassword('abc');

    expect(isValid).toBe(false);
});

test('rejects passwords that contain the word password', () => {
    const isValid = isValidPassword('PaSSword123');

    expect(isValid).toBe(false);
});

test('validates a valid password', () => {
    const isValid = isValidPassword('Testing456');

    expect(isValid).toBe(true);
});
