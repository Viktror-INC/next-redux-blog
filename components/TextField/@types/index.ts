export type TTextField = {
    name?: string;
    placeholder: string;
    className?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}