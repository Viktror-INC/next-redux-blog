import classNames from "classnames";
import React from "react";
import { TTextField } from "./@types";
import styles from "./TextField.module.scss";

export default function TextField(props: TTextField) {
  const { name, placeholder, className, value, setValue } = props;

  return (
    <div className={classNames(styles.textFieldWrap, className)}>
      <span>{name}</span>
      <textarea
        id={name}
        name={name}
        value={value}
        className={styles.textField}
        placeholder={placeholder}
        onChange={(event) => setValue(event)}
      ></textarea>
    </div>
  );
}
