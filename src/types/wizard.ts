export type AccountType = "individual" | "business";

export type ProductGoal = "spend" | "save" | "invest";

export interface Basics {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
}

export interface Setup {
  accountType: AccountType | "";
  productGoal: ProductGoal | "";
}

export interface IndividualDetails {
  dob: string;
  address: string;
  idNumber: string;
}

export interface BusinessDetails {
  legalName: string;
  registrationCountry: string;
  role: string;
}

export interface CountryDetails {
  ssnLast4?: string;
  pan?: string;
  nationalId?: string;
}

export interface Details {
  individual?: IndividualDetails;
  business?: BusinessDetails;
  countryDetails?: CountryDetails;
  documentName?: string;
}

export interface WizardState {
  step: number;
  basics: Basics;
  setup: Setup;
  details: Details;
}
