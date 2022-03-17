export type TTextField = {
  name?: string;
  id?: string;
  placeholder: string;
  className?: string;
  setValue: (event) => void;
  value: string;
};
