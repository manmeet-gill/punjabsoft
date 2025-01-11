export interface IValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: (key: string) => string; // Translation function
}

export interface ValidationTypeProps {
  type: keyof IValues; // Matches the keys of IValues
}
