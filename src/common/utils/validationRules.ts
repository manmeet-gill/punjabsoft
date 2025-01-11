import { IValues } from "../../components/ContactForm/types";

const validate = (values: IValues): { [key in keyof IValues]?: string } => {
  let errors: { name?: string; email?: string; message?: string } = {};

  // Validate Name
  if (!values.name) {
    errors.name = "Name is required.";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Validate Email
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  // Validate Message
  if (!values.message) {
    errors.message = "Message is required.";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};

export default validate;
