import axios from 'axios';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';
import TextField from '../components/TextField/TextField';
import { TPostsSlice } from '../store/slice/postsSlice/@types';
import { setPosts } from '../store/slice/postsSlice/postsSlice';
import styles from '/styles/AddPost.module.scss';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState(moment().format('MMM Do YY') || '');
  const [image, setImage] = useState();
  const [postType, setPostType] = useState('');
  const defaultValuePost = 'Choose post type';
  const [invalidFields, setInvalidFields] = useState([]);
  const dispatch = useDispatch();
  const { posts } = useSelector((state: TPostsSlice) => state.postsSlice);
  const reversePosts = [...posts].reverse();

  const formRef = useRef(null);

  const uploadImage = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'coffee');
      const { data } = await axios.post(
        'https://api.cloudinary.com/v1_1/cofee2456/image/upload',
        formData
      );
      return data.secure_url;
    }
  };

  const clearForm = (event) => {
    setTitle('');
    setText('');
    setDate(moment().format('MMM Do YY'));
    setImage(undefined);
    setPostType(defaultValuePost);
  };

  const sendForm = async () => {
    setInvalidFields(validateFields());

    console.log(validateFields());

    if (validateFields().length == 0 && reversePosts) {
      const lastPostId = reversePosts[0].id;
      const data = {
        id: Number(lastPostId) + 1,
        title: title,
        text: text,
        date: date,
        imgUrl: `${await uploadImage()}`,
        type: postType,
      };

      dispatch(setPosts(data));
      axios.post('https://6229bec8be12fc4538a69297.mockapi.io/Posts', data);
      clearForm(event);
    }
  };

  const setValue = (event) => {
    const { id, value, files } = event.target;

    setInvalidFields(invalidFields.filter((item) => item != id));

    const removeInvalidSelect = () => {
      setInvalidFields(invalidFields.filter((item) => item != 'postType'));
    };

    switch (id) {
      case 'title':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'image':
        setImage(files[0]);
        break;

      /**Posts types */
      case 'Big post':
        setPostType('big');
        removeInvalidSelect();
        break;
      case 'Other post':
        setPostType('other');
        removeInvalidSelect();

        break;
      case 'Main post':
        setPostType('main');
        removeInvalidSelect();
        break;
    }
  };

  const validateFields = () => {
    const invalidFields = [];

    if (!title || title.length < 3) {
      invalidFields.push('title');
    }
    if (!text || title.length < 10) {
      invalidFields.push('text');
    }
    if (!date || date != moment().format('MMM Do YY')) {
      invalidFields.push('date');
    }
    if (!image) {
      invalidFields.push('image');
    }
    if (!postType) {
      invalidFields.push('postType');
    }

    return invalidFields;
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form
          ref={formRef}
          className={styles.postForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <Select
            options={['Big post', 'Other post', 'Main post']}
            setValue={setValue}
            defaultValue={defaultValuePost}
            invalid={invalidFields.includes('postType')}
          />
          <Input
            name={'Post title'}
            id={'title'}
            placeholder={'Write your title'}
            setValue={setValue}
            value={title}
            className={styles.inputWidget}
            invalid={invalidFields.includes('title')}
          />

          <TextField
            id={'text'}
            name={'Post Text'}
            placeholder={'It is a long established fact that a...'}
            setValue={setValue}
            value={text}
            className={styles.inputWidget}
            invalid={invalidFields.includes('text')}
          />

          <Input
            id={'date'}
            name={'Post date'}
            placeholder={'May 19th 2020'}
            setValue={setValue}
            value={date}
            className={styles.inputWidget}
            invalid={invalidFields.includes('date')}
          />

          <Input
            id={'image'}
            name={'Post Image'}
            setValue={setValue}
            className={styles.inputWidget}
            uploadText={'Upload image'}
            type="file"
            invalid={invalidFields.includes('image')}
            value={image}
          />
          <button className={styles.addPostButton} onClick={() => sendForm()}>
            AddPost
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
