import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TUserLogin } from "../../store/slice/userLogins/@types";
import Router, { useRouter } from "next/router";
import { TPostsSlice } from "../../store/slice/postsSlice/@types";
import axios from "axios";
import { allPosts } from "../../store/slice/postsSlice/postsSlice";

function Layout(props) {
  const { Component, pageProps } = props;
  const { login } = useSelector((state: TUserLogin) => state.loginSlice);
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const signInRoutes = ["/addPost"];
    if (!login) {
      if (signInRoutes.includes(router.pathname)) {
        Router.push({
          pathname: "/",
        });
      }
    }
  }, [login, router.pathname]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://6229bec8be12fc4538a69297.mockapi.io/Posts"
      );
      dispatch(allPosts(data));
    };

    getPosts();
  }, [dispatch]);

  return <Component {...pageProps} />;
}

export default Layout;
