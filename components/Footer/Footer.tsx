import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
// @ts-ignore
import socialList from "/src/data/socialList";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <span>
            <b>hotcoffee</b> 2022 copyright all rights reserved
          </span>
          <ul className={styles.social}>
            {socialList.map((item, index) => {
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
      </div>
    </div>
  );
}
