import classNames from 'classnames';
import React from 'react';
import { TTextField } from './@types';
import styles from './TextField.module.scss';

export default function TextField(props: TTextField) {
  const {
    name,
    id,
    placeholder,
    className,
    value,
    invalid = false,
    setValue,
  } = props;

  return (
    <div className={classNames(styles.textFieldWrap, className)}>
      <span>{name}</span>
      <textarea
        id={id}
        name={name}
        value={value}
        className={classNames(styles.textField, {
          [styles.invalid]: invalid,
        })}
        placeholder={placeholder}
        onChange={(event) => setValue(event)}
      ></textarea>
    </div>
  );
}
