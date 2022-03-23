export type TTextField = {
  name?: string;
  id?: string;
  placeholder: string;
  className?: string;
  invalid?: boolean;
  value: string;
  setValue: (event) => void;
};
