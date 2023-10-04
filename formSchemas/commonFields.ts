import * as yup from "yup";
import { validationMessages } from "~/constants/validationMessages";

// Text fields
export const fieldTextRequired = yup
  .string()
  .required(validationMessages.emptyField);

export const fieldTextOptional = yup.string().nullable();

export const fieldTextSpecificLenght = (length: number) =>
  fieldTextRequired
    .min(length, validationMessages.onlySpecificDigits(length))
    .max(length, validationMessages.onlySpecificDigits(length));

// Miscellaneous

export const fieldEmail = fieldTextRequired.email(
  validationMessages.validEmail,
);
