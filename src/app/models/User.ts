export const Gender = ['', 'männlich', 'weiblich', 'divers'];

export interface User {
  emailAddress: string | null;
  password: string;
  name: string;
  dateOfBirth: string | null;
  gender: string | null;
}

export interface UserInput {
  emailAddress: string;
  password: string;
  confirmPassword: string;
  name: string;
  dateOfBirth: Date | null;
  gender: string;
}
