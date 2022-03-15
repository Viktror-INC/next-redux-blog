export type TSelect = {
  defaultValue: string;
  options: string[];
  setValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
