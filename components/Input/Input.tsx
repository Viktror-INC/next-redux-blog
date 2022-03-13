import classNames from "classnames";
import React from "react";
import { TInput } from "./@types";
import styles from "./Input.module.scss";

export default function Input(props: TInput) {
  const { name, placeholder, setValue, value, className, type } = props;
  const onSetValue = (event) => {
    setValue(event);
  };
  return (
    <div className={classNames(styles.inputWrap, className)}>
      <span>{name}</span>
      <input
        name={name}
        required
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          onSetValue(event);
        }}
      />
    </div>
  );
}
