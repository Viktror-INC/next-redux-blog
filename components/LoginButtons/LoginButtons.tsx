import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TUserLogin } from "../../store/slice/userLogins/@types";
import { setLogin } from "../../store/slice/userLogins/userLogin";
import LoginMenu from "../LoginMenu/LoginMenu";
import { TLoginButtons } from "./@types";
import styles from "./LoginButtons.module.scss";

export default function LoginButtons(props: TLoginButtons) {
  const { setShowForm } = props;

  const { login } = useSelector((state: TUserLogin) => state.loginSlice);

  return (
    <div className={styles.buttonsWrap}>
      {login ? (
        <>
          <button
            className={styles.logInButtonActive}
          ></button>
          <div  className={styles.loginMenuWrap}>
            <LoginMenu />
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            setShowForm(true);
          }}
          className={styles.logInButton}
        ></button>
      )}
    </div>
  );
}
