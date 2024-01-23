export interface PasswordValidation {
  password: string;
  confirmPassword: string;
  setErrors: any;
}

export function validatePassword(input: PasswordValidation) {
  if (!(input.password == input.confirmPassword)) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      password: 'Passwörter stimmen nicht überein.',
    }));
    return false;
  }

  if (!input.password.match(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      password: 'Passwortanforderungen: mind. 8 Zeichen lang, mind. eine Ziffer, mind. einen Kleinbuchstaben',
    }));
    return false;
  }

  return true;
}

export interface DateOfBirthValidation {
  dateOfBirth: Date | null;
  setErrors: any;
}

export function validateDateOfBirth(input: DateOfBirthValidation) {
  if (input.dateOfBirth == null || input.dateOfBirth > new Date()) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      dateOfBirth: 'Das Geburtsdatum darf nicht in der Zukunft liegen.',
    }));
    return false;
  }

  return true;
}

export interface PricingPlanAndSupplierValidation {
  pricingPlan: string;
  supplier: string;
  setErrors: any;
}

export function validatePricingPlanAndSupplier(input: PricingPlanAndSupplierValidation) {
  if (!input.pricingPlan) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      pricingPlan: 'Dieses Feld bitte ausfüllen.',
    }));
    return false;
  }

  if (!input.supplier) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      supplier: 'Dieses Feld bitte ausfüllen.',
    }));
    return false;
  }

  return true;
}

export interface DeviceCategoryValidation {
  categoryName: string;
  setErrors: any;
}

export function validateDeviceCategoryInput(input: DeviceCategoryValidation) {
  if (!input.categoryName) {
    input.setErrors((prevState: any) => ({
      ...prevState,
      categoryName: 'Dieses Feld bitte ausfüllen.',
    }));
    return false;
  }

  return true;
}
