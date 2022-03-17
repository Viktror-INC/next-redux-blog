import Image from "next/image";
import styles from "../styles/Home.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Header from "../components/Header/Header";
import { TUserLogin } from "../store/slice/userLogins/@types";
import { useSelector } from "react-redux";
import { TPostsSlice } from "../store/slice/postsSlice/@types";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import ButtonMore from "../components/ButtonMore/ButtonMore";

export default function Home() {
  const { login } = useSelector((state: TUserLogin) => state.loginSlice);
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);

  /**Posts */
  const [otherPosts, setOtherPosts] = useState([]);
  const [mainPost, setMainPost] = useState([]);
  const [bigPost, setBigPost] = useState([]);

  /**Get posts and sorting by type */
  useEffect(() => {
    let otherPostsData = [];
    let mainPostData = [];
    let bigPostData = [];

    posts.map((item) => {
      switch (item.type) {
        case "other":
          otherPostsData = [...otherPostsData, item];
          break;

        case "main":
          mainPostData = [...mainPostData, item];
          break;

        case "big":
          bigPostData = [...bigPostData, item];
          break;
      }
    });

    setOtherPosts(otherPostsData.slice(-3).reverse());
    setMainPost(mainPostData.slice(-1));
    setBigPost(bigPostData.slice(-1));
  }, [posts]);

  return (
    <div>
      <Header />
      <div className={styles.mainSlide}>
        <div className={styles.container}>
          <div className={styles.mainSlideInner}>
            <div className={styles.mainSlideTitle}>
              <div className={styles.titleWrap}>
                <h1>
                  Make better coffee
                  <Image
                    src="/images/coffee.png"
                    width={70}
                    height={67}
                    alt="coffee picture"
                  />
                </h1>
              </div>
              <span className={styles.description}>why learn how to blog?</span>
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/croods.png"
                width={476}
                height={323}
                alt="croods picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Posts posts={mainPost} className={styles.mainPost} />
          <Posts posts={otherPosts} />
          <div className={styles.bigPost}>
            <Posts posts={bigPost} className={styles.posts} />
          </div>
          <div className={styles.ButtonMoreWrap}>
            <ButtonMore text={"See more"} link={"/articles"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
