import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { TInput } from './@types';
import styles from './Input.module.scss';

export default function Input(props: TInput) {
  const {
    name,
    id,
    placeholder,
    setValue,
    value,
    className,
    type,
    uploadText,
    invalid = false,
  } = props;

  const onSetValue = (event) => {
    setValue(event);
  };

  const returnInput = () => {
    if (type == 'file') {
      return (
        <div
          className={classNames(styles.inputFIle, {
            [styles.invalidFile]: invalid,
          })}
        >
          <input
            id={id}
            type={type}
            name={name}
            onChange={(event) => {
              onSetValue(event);
            }}
          />
          <label htmlFor={id}>
            <div className={styles.uploadInner}>
              <div className={styles.uploadImage}>
                {value ? (
                  <Image
                    src={URL.createObjectURL(value as Blob | MediaSource)}
                    width={80}
                    height={80}
                    alt={'upload'}
                  />
                ) : (
                  <Image
                    src={'/images/upload.svg'}
                    width={40}
                    height={40}
                    alt={'upload'}
                  />
                )}
              </div>
              <span>{uploadText}</span>
            </div>
          </label>
        </div>
      );
    }

    return (
      <div
        className={classNames(styles.defaultInput, {
          [styles.invalid]: invalid,
        })}
      >
        <input
          id={id}
          name={name}
          required
          value={value as string}
          placeholder={placeholder}
          onChange={(event) => {
            onSetValue(event);
          }}
        />
      </div>
    );
  };
  return (
    <div className={classNames(styles.inputWrap, className)}>
      <span>{name}</span>
      {}
      {returnInput()}
    </div>
  );
}
