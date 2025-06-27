'use client';
import React from 'react';
import PostPreview from '../PostPreview/PostPreview';
import PostForm from '../PostForm/PostForm';
import styles from './postEditor.module.scss';

const PostEditor = ({
    mutate,
    session,
    editPost,
    setEditPost,
    selectImg,
    setSelectImg,
    postData,
    setPostData,
}) => {
    return (
        <div className={styles.container}>
            <PostPreview postData={postData} selectImg={selectImg} />
            <PostForm
                editPost={editPost}
                setEditPost={setEditPost}
                selectImg={selectImg}
                setSelectImg={setSelectImg}
                postData={postData}
                setPostData={setPostData}
                mutate={mutate}
                session={session}
            />
        </div>
    );
};

export default PostEditor;
