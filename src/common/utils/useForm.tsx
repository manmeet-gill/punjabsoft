import { useState } from "react";
import { IValues } from "../../components/ContactForm/types";

export const useForm = (
  validate: (values: IValues) => { [key in keyof IValues]?: string }
) => {
  const [values, setValues] = useState<IValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key in keyof IValues]?: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const resetForm = () => {
    console.log("Resetting form..."); // Debugging log
    setValues({ name: "", email: "", message: "" });// Clear form fields
    setErrors({}); // Clear validation errors
  };

  return { values, errors, handleChange, handleSubmit, setValues, resetForm };
};
