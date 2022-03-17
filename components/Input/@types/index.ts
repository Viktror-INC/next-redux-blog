export type TInput = {
  name?: string;
  id?: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  className?: string;
  type?: string;
  uploadText?: string;
};
