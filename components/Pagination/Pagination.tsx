import classNames from "classnames";
import React, { useState } from "react";
import { TPagination } from "./@types";
import styles from "./Pagination.module.scss";

export default function Pagination(props: TPagination) {
  const {
    posts,
    postPerPage,
    indexFromStore,
    setIndexFromStore,
    setCurrentPosts,
  } = props;

  //   const [currentPage, setCurrentPageStore] = useState(0);
  const pagesWithPosts = chunkArray([...posts].reverse(), postPerPage);


  /**Delete array on {postPerPage} posts */
  function chunkArray(array, chunk) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }

  /**PAgination for Numbers */
  const onChangePage = (index, posts) => {
    setIndexFromStore(index);
    setCurrentPosts(posts);
  };

  /**Pagination for Button Next and Prev */
  const onButtonChange = (event) => {
    switch (event.target.id) {
      case "prev":
        if (indexFromStore > 0) {
          setIndexFromStore(indexFromStore - 1);
          const postOfPage = pagesWithPosts.filter((item, index) => {
            return index == indexFromStore - 1;
          });
          setCurrentPosts(postOfPage[0]);
        }
        break;
      case "next":
        const postOfPage = pagesWithPosts.filter((item, index) => {
          if (index == indexFromStore + 1) {
            setIndexFromStore(indexFromStore + 1);
            return index == indexFromStore + 1;
          }
        });
        if (postOfPage.length > 0) {
          setCurrentPosts(postOfPage[0]);
        }
        break;
    }
  };

  return (
    <div className={styles.paginationWrap}>
      <button id="prev" onClick={(event) => onButtonChange(event)}>
        Prev
      </button>
      <ul>
        {pagesWithPosts.map((posts, index) => {
          return (
            <li
              className={classNames(styles.number, {
                [styles.activeNumber]: index == indexFromStore,
              })}
              onClick={() => onChangePage(index, posts)}
              key={index}
            >
              {index}
            </li>
          );
        })}
      </ul>

      <button id="next" onClick={(event) => onButtonChange(event)}>
        Next
      </button>
    </div>
  );
}
