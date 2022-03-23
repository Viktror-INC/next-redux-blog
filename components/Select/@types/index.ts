export type TSelect = {
  defaultValue: string;
  options: string[];
  invalid?: boolean;
  setValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
