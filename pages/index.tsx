import Image from "next/image";
import styles from "../styles/Home.module.scss";
import socailList from "../src/data/socialList.json";
import postsData from "../src/data/postsData.json";
import classNames from "classnames";
import Link from "next/link";
import Header from "../components/Header/Header";
import { TUserLogin } from "../store/slice/userLogins/@types";
import { useDispatch, useSelector } from "react-redux";
import { TPostsSlice } from "../store/slice/postsSlice/@types";
import { useEffect } from "react";
import axios from "axios";
import { setPosts } from "../store/slice/postsSlice/postsSlice";

export default function Home() {
  const { login } = useSelector((state: TUserLogin) => state.loginSlice);
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://6229bec8be12fc4538a69297.mockapi.io/Posts"
        );
        dispatch(setPosts(data));
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [dispatch]);
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
                  <Image src="/images/coffee.png" width={70} height={67} />
                </h1>
              </div>
              <span className={styles.description}>why learn how to blog?</span>
            </div>
            <Image src="/images/croods.png" width={476} height={323} />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mainPost}>
            <div className={styles.textBLock}>
              <h2>long established</h2>
              <span className={styles.textBLockDescrip}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </span>
              <div className={styles.textBLockBottom}>
                <span className={styles.date}>May 20th 2020</span>
                <span className={styles.more}>Read more</span>
              </div>
            </div>
            <div className={styles.mainPostImage}>
              <Image
                src="/images/posts/post1.png"
                width={433}
                height={243}
                alt="notebook"
                layout="responsive"
              />
            </div>
          </div>
          <ul className={styles.otherPosts}>
            {postsData.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={item.image}
                    width={297}
                    height={179}
                    layout="responsive"
                    alt={item.image}
                  />
                  <h3>{item.title}</h3>
                  <span className={styles.otherPostDescrip}>{item.text}</span>
                  <div className={styles.textBLockBottom}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.more}>Read more</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.bigPost}>
            <div className={styles.bigPostTextBlock}>
              <h2>What is Lorem Ipsum?</h2>
              <span className={styles.bigPostDescrip}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution...
              </span>
              <div
                className={classNames(
                  styles.textBLockBottom,
                  styles.bigPostBottom
                )}
              >
                <span className={styles.date}>May 20</span>
                <span className={styles.more}>Read more</span>
              </div>
            </div>
            <Image src="/images/posts/post5.png" width={525} height={500} />
          </div>
          <Link href="/">
            <a className={styles.seeMore}>
              <span>See more</span>
              <Image src="/images/more.png" width={20} height={20} alt="more" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <span>
              <b>hotcoffee</b> 2022 copyright all rights reserved
            </span>
            <ul className={styles.social}>
              {socailList.map((item, index) => {
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
    </div>
  );
}
