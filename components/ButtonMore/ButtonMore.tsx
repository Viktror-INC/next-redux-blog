import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TButtonMore } from "./@types";
import styles from "./ButtonMore.module.scss";

export default function ButtonMore(props: TButtonMore) {
  const { text, link } = props;
  return (
    <>
      <Link href={link}>
        <a className={styles.seeMore}>
          <span>{text}</span>
          <Image
            src="/images/plus.svg"
            width={20}
            height={20}
            alt={text + ` icon`}
          />
        </a>
      </Link>
    </>
  );
}
