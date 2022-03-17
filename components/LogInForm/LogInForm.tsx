import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slice//userLogins/userLogin";
import Input from "../Input/Input";
import { TLogInForm } from "./@types";
import styles from "./LogInForm.module.scss";
/* @ts-ignore */
import logins from "/api/logins.json";
import classNames from "classnames";

export default function LogInForm(props: TLogInForm) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  const { setShowForm } = props;

  const checkLogIn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const currentData = { username: userName, password: password };

    logins.filter((item) => {
      if (
        item.username == currentData.username &&
        item.password == currentData.password
      ) {
        setWrongInput(false);
        setShowForm(false);

        return dispatch(setLogin(true));
      }

      setWrongInput(true);
    });
  };

  const checkOnEmpty = (event) => {
    const { id, value } = event.target;

    setWrongInput(false);

    switch (id) {
      case "Name":
        setUserName(value);
        break;
      case "Password":
        setPassword(value);
        break;
    }
  };

  return (
    <form
      className={styles.logInForm}
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        id={"Name"}
        placeholder={"user name"}
        setValue={checkOnEmpty}
        value={userName}
        className={classNames(styles.inputWidget, {
          [styles.wrongInput]: wrongInput,
        })}
      />
      <Input
        id={"Password"}
        placeholder={"123456"}
        setValue={checkOnEmpty}
        value={password}
        className={classNames(styles.inputWidget, {
          [styles.wrongInput]: wrongInput,
        })}
      />
      <button
        type="submit"
        className={styles.signInButton}
        onClick={(event) => {
          checkLogIn(event);
        }}
      >
        Sign In
      </button>

      <button
        className={styles.closeButton}
        onClick={() => {
          setShowForm(false);
        }}
      ></button>
    </form>
  );
}
