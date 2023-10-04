import * as yup from "yup";
import {
  fieldEmail,
  fieldTextOptional,
  fieldTextRequired,
} from "./commonFields";

export type ContactSchemaSubmit = {
  email: string;
  name: string;
  message: string;
};

export const contactSchema = yup.object({
  email: fieldEmail,
  name: fieldTextRequired,
  message: fieldTextRequired,
});
