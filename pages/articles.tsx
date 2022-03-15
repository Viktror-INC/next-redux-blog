import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header";
import Posts from "../components/OtherPosts/Posts";
import { TPostsSlice } from "../store/slice/postsSlice/@types";
import styles from "/styles/Aritcle.module.scss";

export default function Articles() {
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Posts posts={posts} className={styles.posts}/>
      </div>
    </div>
  );
}
