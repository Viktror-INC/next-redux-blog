import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import { TPostsSlice } from "../store/slice/postsSlice/@types";
import styles from "/styles/Aritcle.module.scss";

export default function Articles() {
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);
  const newPosts = [...posts].reverse();
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Posts posts={newPosts} className={styles.posts} />
      </div>
    </div>
  );
}
