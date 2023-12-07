
export interface User {
    emailAddress: string | null;
    password: string;
    name: string;
    dateOfBirth: string;
    gender: string | null;
}


export interface UserInput {
    emailAddress: string;
    password: string;
    confirmPassword: string;
    name: string;
    dateOfBirth: Date;
    gender: string;
}
