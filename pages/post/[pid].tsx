import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { TPostsSlice } from '../../store/slice/postsSlice/@types';
import styles from '/styles/Post.module.scss';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';

const Post = () => {
  const router = useRouter();
  const { pid, id } = router.query;
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);

  /**Find current post by post Name and id */
  const currentPost = posts.find(
    (item) => item.title.replace(/\s/g, '-') == pid && item.id == id
  );

  if (currentPost) {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <Image
            src={currentPost.imgUrl}
            width={973}
            height={480}
            alt={currentPost.title}
            layout="responsive"
          />
          <div className={styles.postWrap}>
            <h1>{currentPost.title}</h1>
            <span>{currentPost.date}</span>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: currentPost.text }}></p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return null;
};

export default Post;
