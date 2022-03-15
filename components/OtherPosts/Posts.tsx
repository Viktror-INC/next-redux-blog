import classNames from "classnames";
import Image from "next/image";
import React from "react";
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
                <Image
                  src={item.imgUrl}
                  width={297}
                  height={179}
                  alt={item.title}
                  layout="responsive"
                />
              </div>
              <div className={classNames("textBLock")}>
                <h3>{item.title}</h3>
                <span className={styles.otherPostDescrip}>{item.text}</span>
              </div>
            </div>
            <div
              className={classNames(styles.textBLockBottom, "textBLockBottom")}
            >
              <span className={styles.date}>{item.date}</span>
              <span className={styles.more}>Read more</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
