import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TUserLogin } from "../../store/slice/userLogins/@types";
import Router, { useRouter } from "next/router";

function Layout(props) {
  const { Component, pageProps } = props;
  const { login } = useSelector((state: TUserLogin) => state.loginSlice);
  const router = useRouter();
  
  useEffect(() => {
    const signInRoutes = ["/addPost"];
      if(!login) {
        if( signInRoutes.includes(router.pathname)) {
            Router.push({
                pathname: '/',
            })
        }
      }
  }, [login, router.pathname]);

  return <Component {...pageProps} />;
}

export default Layout;
