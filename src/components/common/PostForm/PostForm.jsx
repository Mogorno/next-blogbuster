'use client';
import React, { useState } from 'react';
import styles from './postForm.module.scss';
import Button from '../Button/Button';
import axios from '@/utils/axios';
import ImgInput from '../ImgInput/ImgInput';
import SelectedPost from '../SelectedPost/SelectedPost';

const PostForm = ({
    mutate,
    session,
    selectImg,
    setSelectImg,
    postData,
    setPostData,
    editPost,
    setEditPost,
}) => {
    const [selectFile, setSelectFile] = useState(null);
    const hasEditPost =
        editPost !== null && Object.entries(editPost).length !== 0
            ? true
            : false;

    const handleChangeInput = (e) => {
        const value = e.target.value;
        const key = e.target.name;

        setPostData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const checkData = (oldData, newData) => {
        const title = oldData?.title === newData?.title;
        const description = oldData?.description === newData?.description;
        const content = oldData?.content === newData?.content;
        if (title && description && content) return true;
        return false;
    };

    const handleSubmit = async () => {
        const { title, description, content } = postData;
        const user = session.data.user.id;

        const hasSameData = checkData(postData, editPost);

        if (hasSameData && !selectFile) {
            return;
        }

        try {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', content);
            formData.append('user', user);

            if (selectFile) {
                formData.append('img', selectFile, selectFile.name);
            }

            if (hasEditPost && editPost._id) {
                await axios.patch('/api/posts/' + editPost._id, formData);
            } else await axios.post('/api/posts', formData);

            mutate();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
            method={hasEditPost ? 'PATCH' : 'POST'}
        >
            <SelectedPost post={editPost} setPost={setEditPost} />

            <input
                onChange={handleChangeInput}
                value={postData?.title ? postData?.title : ''}
                className={styles.input}
                placeholder="Заголовок"
                type="text"
                name="title"
            />

            <input
                onChange={handleChangeInput}
                value={postData?.description ? postData?.description : ''}
                className={styles.input}
                placeholder="Опис"
                type="text"
                name="description"
            />

            <ImgInput
                selectImg={selectImg}
                setSelectImg={setSelectImg}
                selectFile={selectFile}
                setSelectFile={setSelectFile}
            />

            <textarea
                onChange={handleChangeInput}
                value={postData?.content ? postData?.content : ''}
                className={styles.textarea}
                placeholder="Вміст посту."
                cols={30}
                rows={10}
                name="content"
            />
            <Button text="Опублікувати" url={undefined} type="submit" w={100} />
        </form>
    );
};

export default PostForm;
