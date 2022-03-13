import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TUserLogin } from "../../store/slice/userLogins/@types";
import { setLogin } from "../../store/slice//userLogins/userLogin";
import Input from "../Input/Input";
import { TLogInForm } from "./@types";
import styles from "./LogInForm.module.scss";
/* @ts-ignore */
import logins from "/api/logins.json";

export default function LogInForm(props: TLogInForm) {
  const dispatch = useDispatch();
  const { login } = useSelector((state: TUserLogin) => state.loginSlice);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setShowForm } = props;

  // console.log("logins", logins);

  const checkLogIn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const currentData = { username: userName, password: password };

    logins.filter((item) => {
      // console.log("item", item);
      // console.log("currentData", currentData);

      if (
        item.username == currentData.username &&
        item.password == currentData.password
      ) {
        console.log("loggined");
        setShowForm(false);

        return dispatch(setLogin(true));
      }

      // dispatch(setLogin(false));
    });
  };

  return (
    <form
      className={styles.logInForm}
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        name={"Name"}
        placeholder={"user name"}
        setValue={setUserName}
        value={userName}
      />
      <Input
        name={"Password"}
        placeholder={"123456"}
        setValue={setPassword}
        value={password}
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
