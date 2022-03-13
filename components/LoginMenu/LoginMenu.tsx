import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slice/userLogins/userLogin";
import { TLoginMenu } from "./@types";
import styles from "./LoginMenu.module.scss";

export default function LoginMenu(props: TLoginMenu) {
  const { className } = props;
  const dispatch = useDispatch();
  return (
    <ul className={classNames(styles.loginMenu, className)}>
      <li>
        <Link href="/addPost">
          <a>Add post</a>
        </Link>
      </li>
      <li
        onClick={() => {
          dispatch(setLogin(false));
        }}
      >
        <a>Log out</a>
      </li>
    </ul>
  );
}
