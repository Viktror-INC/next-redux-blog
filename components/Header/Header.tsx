import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
// @ts-ignore
import menuList from "/src/data/menuList.json";
// @ts-ignore
import socailList from "/src/data/socialList.json";
import Input from "../Input/Input";
import LogInForm from "../LogInForm/LogInForm";
import { useSelector } from "react-redux";
import { TUserLogin } from "../../store/slice/userLogins/@types";
import LoginButtons from "../LoginButtons/LoginButtons";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  /**Show LogIn Form */
  const [showForm, setShowForm] = useState(false);
  const [lockScroll, setLockScroll] = useState("visible");

  const onMenuButton = (param: boolean) => {
    setShowMenu(param);

    if (!param) {
      // unLock body scroll
      setLockScroll("visible");
      return;
    }

    // Lock body scroll
    setLockScroll("hidden");
  };

  useEffect(() => {
    document.body.style.overflow = lockScroll;
  }, [lockScroll]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={classNames(styles.headerContent, {
            [styles.headerContentAcive]: showMenu,
          })}
        >
          <button
            onClick={() => onMenuButton(!showMenu)}
            className={styles.menuButton}
          ></button>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  width={102}
                  height={24}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className={styles.search}>
            <Image
              src="/images/search-line.png"
              width={20}
              height={20}
              alt="search"
            />
            <input placeholder="Search..." />
          </div>
          <nav className={styles.navigateWrap}>
            <div className={styles.leftSideMenu}>
              <ul className={styles.navigate}>
                {menuList.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <LoginButtons setShowForm={setShowForm} />

              <ul className={styles.social}>
                {socailList.map((item, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={item.path}
                        width={24}
                        height={24}
                        alt={item.alt}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              onClick={() => onMenuButton(false)}
              className={styles.rightSideMenu}
            ></div>
          </nav>
        </div>
      </div>

      {showForm && (
        <div className={styles.logInPopup}>
          <LogInForm setShowForm={setShowForm} />
        </div>
      )}
    </header>
  );
}
