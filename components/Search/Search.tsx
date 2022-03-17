import React, { useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";
import Image from "next/image";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { TPostsSlice } from "../../store/slice/postsSlice/@types";
import Link from "next/link";

export default function Search() {
  const [value, setValue] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);
  const searchRef = useRef(null);

  const currentSearch = posts.filter((item) => {
    if (item.title.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  const setInputValue = (event) => {
    setShowSearchList(true);
    setValue(event.target.value);
    posts.filter((item) => {
      item.title.includes(event.target.value);
    });
  };

  const handleClickOutside = (event) => {
    if (!searchRef.current.contains(event.target)) {
      setShowSearchList(false);
    }
  };

  /**Check if ckick on non focus element */
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <label
      onClick={() => setShowSearchList(true)}
      ref={searchRef}
      htmlFor="search"
      className={styles.search}
    >
      <div className={styles.searchImage}>
        <Image
          src="/images/search-line.png"
          width={20}
          height={20}
          alt="search"
          layout="responsive"
        />
      </div>
      <Input
        id="search"
        value={value}
        placeholder={"Search..."}
        setValue={setInputValue}
      />
      {value && showSearchList && (
        <div className={styles.searchListWrap}>
          <ul>
            {currentSearch.length > 0 ? (
              currentSearch.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={
                        "/post/" +
                        item.title.replace(/\s/g, "-") +
                        "?id=" +
                        item.id
                      }
                    >
                      <a>{item.title.substring(0, 25)}...</a>
                    </Link>
                  </li>
                );
              })
            ) : (
              <li>
                <a>Not found</a>
              </li>
            )}
          </ul>
        </div>
      )}
    </label>
  );
}
