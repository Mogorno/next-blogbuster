'use client';
import React from 'react';
import styles from './post.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Post = ({
    post,
    mutate,
    session,
    setEditPost,
    setSelectImg,
    setPostData,
}) => {
    if (Object.keys(post).length === 0) return;

    const handleGetValue = (value) => {
        if (value in post) {
            return post[value];
        }
        return '';
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`api/posts/${id}`, { method: 'DELETE' });
            mutate();
        } catch (error) {}
    };

    const handleSetEditPost = () => {
        setEditPost(post);
        setPostData((prev) => {
            return {
                ...prev,
                title: post?.title,
                description: post?.description,
                content: post?.content,
            };
        });
        setSelectImg(post.img);
    };

    const user = session ? session.data.user : undefined;

    return (
        <div className={styles.post}>
            <Link
                href={`/blog/${handleGetValue('_id')}`}
                className={styles.container}
                key={post._id}
            >
                {handleGetValue('img') && (
                    <div className={styles.imgContainer}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill={true}
                            alt="Some text"
                            src={handleGetValue('img')}
                            className={styles.img}
                        />
                    </div>
                )}

                <div className={styles.text}>
                    <h1 className={styles.title}>{handleGetValue('title')}</h1>
                    <p className={styles.description}>
                        {handleGetValue('description')}
                    </p>
                    <p className={styles.content}>
                        {handleGetValue('content')}
                    </p>
                </div>
            </Link>
            {session && user.id === post.user ? (
                <div className={styles.actions}>
                    <small onClick={handleSetEditPost} className={styles.icon}>
                        <AiFillEdit />
                    </small>
                    <small
                        onClick={() => handleDelete(handleGetValue('_id'))}
                        className={styles.icon}
                    >
                        <AiFillDelete />
                    </small>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Post;
