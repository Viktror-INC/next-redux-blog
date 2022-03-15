import { Provider, useSelector } from "react-redux";
import "../styles/globals.css";
import store from "../store/store";
import { TUserLogin } from "../store/slice/userLogins/@types";
import Layout from "../components/Layout/Layout";
import { BrowserRouter, Routes } from "react-router-dom";
import axios from "axios";

function MyApp(props) {
  return (
    <Provider store={store}>
      <Layout Component={props.Component} pageProps={props.pageProps} />
    </Provider>
  );
}

export default MyApp;
