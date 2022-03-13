import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import TextField from "../components/TextField/TextField";
import styles from "/styles/AddPost.module.scss";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState();

  const uploadImage = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image[0]);
      formData.append("upload_preset", "coffee");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/cofee2456/image/upload",
        formData
      );
    }
  };

  const sendForm = () => {
    
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      <form
        className={styles.postForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          name={"Post title"}
          placeholder={"Write your title"}
          setValue={setTitle}
          value={title}
          className={styles.inputWidget}
        />

        <TextField
          name={"Post Text"}
          placeholder={"It is a long established fact that a..."}
          setValue={setText}
          value={text}
          className={styles.inputWidget}
        />

        <Input
          name={"Post date"}
          placeholder={"May 19th 2020"}
          setValue={setDate}
          value={date}
          className={styles.inputWidget}
        />

        <Input
          name={"Post Image"}
          setValue={setImage}
          className={styles.inputWidget}
          type="file"
        />
        <button className={styles.addPostButton} onClick={() => sendForm()}>
          AddPost
        </button>
      </form>
    </>
  );
}
