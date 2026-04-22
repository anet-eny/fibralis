export const categoryOptions = [
  "Public",
  "Scientist",
  "Media",
  "Request sample",
  "Career",
  "Other",
] as const;

export type ContactField = "name" | "email" | "company" | "category" | "message";

export type ContactFormValues = Record<ContactField, string>;

export type FormErrors = Partial<Record<ContactField, string>>;

function normalizeInput(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function hasUnsafeCharacters(value: string): boolean {
  return /[<>]/.test(value) || /[\u0000-\u001F\u007F]/.test(value);
}

export function normalizeContactFormValues(formData: FormData): ContactFormValues {
  return {
    name: normalizeInput(String(formData.get("name") ?? "")),
    email: normalizeInput(String(formData.get("email") ?? "")).toLowerCase(),
    company: normalizeInput(String(formData.get("company") ?? "")),
    category: normalizeInput(String(formData.get("category") ?? "")),
    message: normalizeInput(String(formData.get("message") ?? "")),
  };
}

export function validateContactForm(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.length < 2 || values.name.length > 80) {
    errors.name = "Please enter a name between 2 and 80 characters.";
  } else if (!/^[A-Za-zÀ-ž ,.'-]+$/.test(values.name) || hasUnsafeCharacters(values.name)) {
    errors.name = "Please use letters and basic punctuation only.";
  }

  if (values.email.length < 6 || values.email.length > 254) {
    errors.email = "Please enter a valid email address.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
    hasUnsafeCharacters(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.company.length > 120) {
    errors.company = "Company name must be up to 120 characters.";
  } else if (values.company && hasUnsafeCharacters(values.company)) {
    errors.company = "Company name contains unsupported characters.";
  }

  if (!categoryOptions.includes(values.category as (typeof categoryOptions)[number])) {
    errors.category = "Please select a category.";
  }

  if (values.message.length < 10 || values.message.length > 2000) {
    errors.message = "Message must be between 10 and 2000 characters.";
  } else if (hasUnsafeCharacters(values.message)) {
    errors.message = "Message contains unsupported characters.";
  }

  return errors;
}
