import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import Posts from "../components/Posts/Posts";
import { TCurrentPageSlice } from "../store/slice/currentPageSlice/@types";
import { setIndex } from "../store/slice/currentPageSlice/currentPageSlice";
import { TPostsSlice } from "../store/slice/postsSlice/@types";
import styles from "/styles/Aritcle.module.scss";

export default function Articles() {
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);
  const [isRender, setIsRender] = useState(false);
  const { indexFromStore } = useSelector(
    (state: TCurrentPageSlice) => state.currentPageSlice
  );
  const [currentPosts, setCurrentPosts] = useState([]);
  const postPerPage = 5;
  const dispatch = useDispatch();

  function chunkArray(array, chunk) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }

  useEffect(() => {
    const pagesWithPosts = chunkArray([...posts].reverse(), postPerPage);

    const postOfPage = pagesWithPosts.filter((item, index) => {
      return index == indexFromStore;
    });
    setCurrentPosts(postOfPage[0]);
    setIsRender(true);
  }, [posts, indexFromStore]);

  return (
    <div>
      {isRender && (
        <>
          <Header />
          <div className={styles.container}>
            <Pagination
              posts={posts}
              postPerPage={postPerPage}
              setCurrentPosts={setCurrentPosts}
              indexFromStore={indexFromStore}
              setIndexFromStore={(index: number) => dispatch(setIndex(index))}
            />
            {currentPosts && (
              <Posts posts={currentPosts} className={styles.posts} />
            )}

            <Pagination
              posts={posts}
              postPerPage={postPerPage}
              setCurrentPosts={setCurrentPosts}
              indexFromStore={indexFromStore}
              setIndexFromStore={(index: number) => dispatch(setIndex(index))}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
