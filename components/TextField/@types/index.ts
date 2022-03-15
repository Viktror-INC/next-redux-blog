export type TTextField = {
    name?: string;
    placeholder: string;
    className?: string;
    setValue: (event) => void;
    value: string;
}