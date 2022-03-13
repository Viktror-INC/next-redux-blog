import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { TLoginMenu } from "./@types";
import styles from "./LoginMenu.module.scss";

export default function LoginMenu(props: TLoginMenu) {
  const { className } = props;
  return (
    <ul className={classNames(styles.loginMenu, className)}>
      <li>
        <Link href="/addPost">
          <a>Add post</a>
        </Link>
      </li>
    </ul>
  );
}
