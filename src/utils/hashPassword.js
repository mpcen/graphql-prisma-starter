import bcrypt from 'bcryptjs';

export const hashPassword = password => {
    if (password.length < 8) {
        throw new Error('Passwords must be 8 characters or longer');
    }

    return bcrypt.hash(password, 10);
};
