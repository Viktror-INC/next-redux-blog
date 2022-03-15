import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import TextField from "../components/TextField/TextField";
import { setPosts } from "../store/slice/postsSlice/postsSlice";
import styles from "/styles/AddPost.module.scss";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState();
  const [postType, setPostType] = useState("");
  const defaultValuePost = "Choose post type";

  const [invalidFields, setInvalidFields] = useState([]);

  const dispatch = useDispatch();

  const uploadImage = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "coffee");
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/cofee2456/image/upload",
        formData
      );
      return data.secure_url;
    }
  };

  const clearForm = () => {
    setTitle("");
    setText("");
    setDate("");
    setPostType(defaultValuePost);
  };

  const sendForm = async () => {
    if (title && text && date && image && postType) {
      const data = {
        title: title,
        text: text,
        date: date,
        imgUrl: `${await uploadImage()}`,
        type: postType,
      };

      dispatch(setPosts(data));
      axios.post("https://6229bec8be12fc4538a69297.mockapi.io/Posts", data);
      clearForm();
    }
  };

  const checkOnEmpty = (event) => {
    const { id, value, files } = event.target;

    switch (id) {
      case "Post title":
        setTitle(value);
        break;
      case "Post Text":
        setText(value);
        break;
      case "Post date":
        setDate(value);
        break;
      case "Post Image":
        setImage(files[0]);
        break;

      /**Posts types */
      case "Big post":
        setPostType("big");
        break;
      case "Other post":
        setPostType("other");
        break;
      case "Main post":
        setPostType("main");
        break;
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form
          className={styles.postForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <Select
            options={["Big post", "Other post", "Main post"]}
            setValue={checkOnEmpty}
            defaultValue={defaultValuePost}
          />
          <Input
            name={"Post title"}
            placeholder={"Write your title"}
            setValue={checkOnEmpty}
            value={title}
            className={styles.inputWidget}
          />

          <TextField
            name={"Post Text"}
            placeholder={"It is a long established fact that a..."}
            setValue={checkOnEmpty}
            value={text}
            className={styles.inputWidget}
          />

          <Input
            name={"Post date"}
            placeholder={"May 19th 2020"}
            setValue={checkOnEmpty}
            value={date}
            className={styles.inputWidget}
          />

          <Input
            name={"Post Image"}
            setValue={checkOnEmpty}
            className={styles.inputWidget}
            uploadText={"Upload image"}
            type="file"
          />
          <button className={styles.addPostButton} onClick={() => sendForm()}>
            AddPost
          </button>
        </form>
      </div>
    </>
  );
}
