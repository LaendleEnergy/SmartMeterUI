export interface CreateHousehold {
    emailAddress: string;
    password: string;
    confirmPassword?: string;
    name: string;
    pricingPlan: string;
    supplier: string;
    deviceId: string;
}

export interface Household {
    deviceId: string;
    pricingPlan: string;
    supplier: string;
    incentive: string;
    savingTarget: string;
}
