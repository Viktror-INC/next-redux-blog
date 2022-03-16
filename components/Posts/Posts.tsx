import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonMore from "../ButtonMore/ButtonMore";
import { TPosts } from "./@types";
import styles from "./Posts.module.scss";

export default function Posts(props: TPosts) {
  const { posts, className } = props;

  return (
    <ul className={classNames(styles.otherPosts, className)}>
      {posts.map((item, index) => {
        return (
          <li key={index}>
            <div className={classNames("postBlock")}>
              <div className={classNames("postImage")}>
                <Link
                  href={
                    "/post/" + item.title.replace(/\s/g, "-") + "?id=" + item.id
                  }
                >
                  <a>
                    <Image
                      src={item.imgUrl}
                      width={297}
                      height={179}
                      alt={item.title}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
              <div className={classNames("textBLock")}>
                <Link
                  href={
                    "/post/" + item.title.replace(/\s/g, "-") + "?id=" + item.id
                  }
                >
                  <a className={styles.postLink}>
                    <h3>{item.title}</h3>
                  </a>
                </Link>
                <span className={styles.otherPostDescrip}>
                  {item.text.substring(0, 150)}...
                </span>
              </div>
            </div>
            <div
              className={classNames(styles.textBLockBottom, "textBLockBottom")}
            >
              <span className={styles.date}>{item.date}</span>

              <ButtonMore
                text={"Read more"}
                link={
                  "/post/" + item.title.replace(/\s/g, "-") + "?id=" + item.id
                }
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
