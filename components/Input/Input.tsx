import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { TInput } from "./@types";
import styles from "./Input.module.scss";

export default function Input(props: TInput) {
  const { name, placeholder, setValue, value, className, type, uploadText } =
    props;
  const [imagePreview, setImagePreview] = useState("");

  const onSetValue = (event) => {
    setValue(event);

    if (type == "file" && event.target.files[0]) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const returnInput = () => {
    if (type == "file") {
      return (
        <div className={styles.inputFIle}>
          <input
            id={name}
            type={type}
            name={name}
            onChange={(event) => {
              onSetValue(event);
            }}
          />
          <label htmlFor={name}>
            <div className={styles.uploadInner}>
              <div className={styles.uploadImage}>
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    width={80}
                    height={80}
                    alt={"upload"}
                  />
                ) : (
                  <Image
                    src={"/images/upload.svg"}
                    width={40}
                    height={40}
                    alt={"upload"}
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
      <input
        id={name}
        required
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          onSetValue(event);
        }}
      />
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
