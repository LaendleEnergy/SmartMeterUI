export interface PasswordValidation {
    password: string;
    confirmPassword: string;
    setErrors: any;
}

export function validatePassword(input: PasswordValidation) {
    if (!(input.password == input.confirmPassword)) {
        input.setErrors((prevState: any) => ({
            ...prevState,
            password: "Passwörter stimmen nicht überein.",
        }));
        return false;
    };

    if (!input.password.match(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)) {
        input.setErrors((prevState: any) => ({
            ...prevState,
            password: "Passwortanforderungen: mind. 8 Zeichen lang, mind. eine Ziffer, mind. einen Kleinbuchstaben",
        }));
        return false;
    };

    return true;
};
